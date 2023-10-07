import Link from 'next/link'
import { montserrat } from './fonts'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className={`text-base mx-auto text-center py-20`} autoFocus>
      <h2 className='text-2xl mb-8'>404 | Found Nothing</h2>
      <div className={`${montserrat.className}`}>
      <p className='mb-4 text-base'>Are your sure about this?</p>
      <div className='p-4'>
      <Image className='w-full mx-auto rounded-md mb-4' src={"/404/463771.jpg"} height={1000} width={1000} alt='notFound 404'></Image>
      </div>
      <Link href="/" className='t text-livingCoral text-lg'>Return Home</Link>
      </div>
    </div>
  )
}