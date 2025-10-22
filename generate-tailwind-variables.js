const fs = require('fs');
const path = require('path');

// Read CSS file and extract all CSS variables
function extractCSSVariables(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const variables = {};
  
  // Match CSS variables: --variable-name: value;
  const regex = /--([a-zA-Z0-9-_]+):\s*([^;]+);/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const varName = match[1];
    const varValue = match[2].trim();
    // Store as CSS variable reference instead of static value
    variables[varName] = `var(--${varName})`;
  }
  
  return variables;
}

// Convert CSS variable name to Tailwind config path
function cssVarToTailwindPath(varName) {
  // Remove prefixes
  const cleanName = varName
    .replace(/^color-/, '')
    .replace(/^measure-/, '')
    .replace(/^shadow-/, '');
  
  // Split by hyphens and build nested structure
  const parts = cleanName.split('-');
  return parts;
}

// Build nested object from flat variables
function buildNestedObject(variables, prefix) {
  const result = {};
  
  Object.keys(variables).forEach(varName => {
    if (!varName.startsWith(prefix)) return;
    
    const value = variables[varName];
    const parts = cssVarToTailwindPath(varName);
    
    // Navigate/create nested structure
    let current = result;
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
    
    // Set the value
    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
  });
  
  return result;
}

// Convert nested object to JavaScript code string
function objectToJS(obj, indent = 2) {
  const spaces = ' '.repeat(indent);
  const entries = Object.entries(obj);
  
  if (entries.length === 0) return '{}';
  
  const lines = entries.map(([key, value]) => {
    const safeKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
    
    if (typeof value === 'object' && value !== null) {
      const nested = objectToJS(value, indent + 2);
      return `${spaces}${safeKey}: ${nested}`;
    } else {
      return `${spaces}${safeKey}: '${value}'`;
    }
  });
  
  return `{\n${lines.join(',\n')},\n${' '.repeat(indent - 2)}}`;
}

// Main function to generate tailwind-variables.js
function generateTailwindVariables() {
  const baseDir = __dirname;
  
  console.log('Reading Supernova CSS files...');
  const colorsVars = extractCSSVariables(path.join(baseDir, 'colors.css'));
  const measuresVars = extractCSSVariables(path.join(baseDir, 'measures.css'));
  const shadowsVars = extractCSSVariables(path.join(baseDir, 'shadows.css'));
  
  console.log(`Found ${Object.keys(colorsVars).length} color tokens`);
  console.log(`Found ${Object.keys(measuresVars).length} measure tokens`);
  console.log(`Found ${Object.keys(shadowsVars).length} shadow tokens`);
  
  // Build the Tailwind config structure
  const config = {
    colors: {},
    spacing: {},
    borderRadius: {},
    fontSize: {},
    lineHeight: {},
    boxShadow: {},
    borderWidth: {}
  };
  
  // Process colors
  Object.keys(colorsVars).forEach(varName => {
    if (varName.startsWith('color-')) {
      const value = colorsVars[varName];
      const cleanName = varName.replace('color-', '');
      const parts = cleanName.split('-');
      
      let current = config.colors;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        // Check if current is an object before creating nested properties
        if (typeof current[part] !== 'object' || current[part] === null) {
          current[part] = {};
        }
        current = current[part];
      }
      
      const lastPart = parts[parts.length - 1];
      // Only set if current is an object
      if (typeof current === 'object' && current !== null) {
        current[lastPart] = value;
      }
    }
  });
  
  // Process spacing (dimension scales and space)
  Object.keys(measuresVars).forEach(varName => {
    if (varName.includes('dimension-scale-') || varName.includes('space-')) {
      const value = measuresVars[varName];
      const cleanName = varName
        .replace('measure-dimension-scale-', '')
        .replace('measure-space-gap-', 'gap-')
        .replace('measure-space-padding-', 'padding-')
        .replace('measure-space-margin-', 'margin-');
      
      config.spacing[cleanName] = value;
    }
  });
  
  // Process border radius
  Object.keys(measuresVars).forEach(varName => {
    if (varName.includes('border-radius-')) {
      const value = measuresVars[varName];
      const cleanName = varName.replace('measure-border-radius-border-radius-', '');
      config.borderRadius[cleanName] = value;
    }
  });
  
  // Process border width
  Object.keys(measuresVars).forEach(varName => {
    if (varName.includes('border-width-')) {
      const value = measuresVars[varName];
      const cleanName = varName.replace('measure-border-width-border-width-', '');
      config.borderWidth[cleanName] = value;
    }
  });
  
  // Process font sizes
  Object.keys(measuresVars).forEach(varName => {
    if (varName.includes('font-size-')) {
      const value = measuresVars[varName];
      const cleanName = varName
        .replace('measure-font-size-', '')
        .replace('-font-size', '');
      config.fontSize[cleanName] = value;
    }
  });
  
  // Process line heights
  Object.keys(measuresVars).forEach(varName => {
    if (varName.includes('line-height-')) {
      const value = measuresVars[varName];
      const cleanName = varName
        .replace('measure-line-height-', '')
        .replace('-line-height', '');
      config.lineHeight[cleanName] = value;
    }
  });
  
  // Process shadows
  Object.keys(shadowsVars).forEach(varName => {
    if (varName.startsWith('shadow-')) {
      const value = shadowsVars[varName];
      const cleanName = varName.replace('shadow-', '');
      config.boxShadow[cleanName] = value;
    }
  });
  
  // Generate the JavaScript file content
  let output = `/**
 * Tailwind CSS Variables - Auto-generated from Supernova Design Tokens
 * Generated by: generate-tailwind-variables.js
 * Source files: colors.css, measures.css, shadows.css, typography.css
 * 
 * DO NOT EDIT THIS FILE MANUALLY
 * Run 'node generate-tailwind-variables.js' to regenerate
 * 
 * Total tokens: ${Object.keys(colorsVars).length + Object.keys(measuresVars).length + Object.keys(shadowsVars).length}
 */

module.exports = ${objectToJS(config, 2)};
`;

  // Write the generated file
  const outputPath = path.join(baseDir, 'tailwind-variables.js');
  fs.writeFileSync(outputPath, output, 'utf-8');
  
  console.log('\n✅ Successfully generated tailwind-variables.js');
  console.log(`📝 File saved to: ${outputPath}`);
  console.log(`📊 Colors: ${Object.keys(config.colors).length} groups`);
  console.log(`📊 Spacing: ${Object.keys(config.spacing).length} values`);
  console.log(`📊 Border Radius: ${Object.keys(config.borderRadius).length} values`);
  console.log(`📊 Font Sizes: ${Object.keys(config.fontSize).length} values`);
  console.log(`📊 Line Heights: ${Object.keys(config.lineHeight).length} values`);
  console.log(`📊 Shadows: ${Object.keys(config.boxShadow).length} values`);
  console.log(`📊 Border Widths: ${Object.keys(config.borderWidth).length} values`);
  console.log('\n🎉 All values are now sourced from Supernova design tokens!');
}

// Run the generator
try {
  generateTailwindVariables();
} catch (error) {
  console.error('❌ Error generating tailwind-variables.js:', error);
  process.exit(1);
}
