import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Page = (): React.JSX.Element => {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <p className='text-xl font-bold tracking-tight'>Hello World</p>

    </div>
  )
}

export default Page