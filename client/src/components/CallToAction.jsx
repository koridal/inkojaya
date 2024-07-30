import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col items-center justify-center p-3 text-center border border-teal-500 sm:flex-row rounded-tl-3xl rounded-br-3xl'>
        <div className="flex flex-col justify-center flex-1">
            <h2 className='text-2xl'>
                Next-Generation Technology
            </h2>
            <p className='my-2 text-gray-500'>
                In line with the Fourth Industrial Revolution, PT.Yunsung Indonesia will concentrate all of its capability on developing Smart factory and Next-Generation Technology.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-bl-none rounded-tl-xl'>
                <a href='http://ysindonesia.com' target='_blank' rel='noopener noreferrer'>
                    PT. Yunsung Indonesia
                </a>
            </Button>
        </div>
        <div className="flex-1 p-7">
            <img src="/images/homeimage/machinery.jpg" />
        </div>
    </div>
  )
}