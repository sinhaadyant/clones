import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import AuthButton from '@/app/modules/auth/ui/components/auth-button'
import StudioUploadModal from '../studio-upload-modal'

const StudioNavbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center px-3 md:px-4 z-50 border-bottom shadow-md'>
        <div className='flex items-center justify-between w-full max-w-full'>
             {/* Menu & Logo */}
             <div className='flex items-center flex-shrink-0 min-w-0'>
                <SidebarTrigger className='mr-2 p-2 hover:bg-gray-100 rounded-full transition-colors' />
                <Link href="/" className='flex items-center min-w-0'>
                    <div className='flex items-center gap-1 px-2'>
                        <Image src="/logo.png" alt="logo" width={32} height={32} className='flex-shrink-0' />
                        <p className='text-xl font-bold tracking-tight hidden sm:block truncate'>
                            Studio
                        </p>
                    </div>
                </Link>
              </div>
              
              {/* spacer   */}
              <div className='flex-1' />
              
              {/* Actions */}
              <div className='flex items-center gap-2 md:gap-4 flex-shrink-0'>
                 <StudioUploadModal />
                 <AuthButton />
              </div>
        </div>
    </nav>
  )
}

export default StudioNavbar