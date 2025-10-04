import Button from '@/components/ui/button'
// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        size={2}
        color="Brand"
        // leadingIcon={<Image src="/path/to/icon.svg" alt="Icon" />}
        showLeadingIcon
        // trailingIcon={<Image src="/path/to/icon.svg" alt="Icon" />}
        variant="Solid"
      />
    </main>
  )
}
