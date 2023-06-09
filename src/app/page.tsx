import Image from 'next/image'
import { Inter } from 'next/font/google'
import Button from '@/components/ui/Button'
import { db } from '@/lib/db'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  await db.set("hello", 'hello')
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button isLoading={false}>Submit</Button>
    </main>
  )
}
