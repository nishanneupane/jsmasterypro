import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <Skeleton className='bg-slate-500 w-full h-[274px] rounded-lg' />
      </section>
      <section className='mt-6 flex w-full flex-col sm:mt-20'>
        <Skeleton className='bg-slate-500 w-56 h-10 ' />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
        <Skeleton className='bg-slate-500 w-full h-[440px] sm:w-[356px] ' />
        <Skeleton className='bg-slate-500 w-full h-[440px] sm:w-[356px] ' />
        <Skeleton className='bg-slate-500 w-full h-[440px] sm:w-[356px] ' />
        </div>
      </section>
    </main>
  )
}

export default Loading