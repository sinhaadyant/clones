import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { SignedIn } from '@clerk/nextjs'
import { UsernameDisplay } from '@/components/username-display'

const Page = (): React.JSX.Element => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <div>
          <p className='text-xl font-bold tracking-tight'>Hello World</p>
          <UsernameDisplay />
        </div>
      </div>

      <SignedIn>
        <div className="text-center text-gray-600">
          <p>Welcome! You are successfully signed in.</p>
        </div>
      </SignedIn>
    </div>
  )
}

export default Page