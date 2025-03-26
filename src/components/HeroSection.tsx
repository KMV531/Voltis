import React from 'react'
import { HERO_QUERYResult } from '../../sanity.types'
import Link from 'next/link'

const HeroSection = ({ hero }: { hero: HERO_QUERYResult }) => {
  return (
    <section className='container mx-auto mt-5 md:mt-20'>
      {hero?.map((heroData) => (
        <div
          key={heroData?._id}
          className='flex flex-col px-5 lg:px-0 gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-10'
        >
          <div>
            <h1 className='lg:text-7xl text-5xl font-semibold max-w-xl'>
              {heroData?.title}
            </h1>
          </div>
          <div className='flex flex-col gap-y-10'>
            <p className='text-lg max-w-2xl text-white'>
              {heroData?.heroDescription}
            </p>
            <Link
              href={'/pricing'}
              className='p-3 rounded-full hover:bg-[#90c038] bg-[#BFF265] text-black cursor-pointer w-max'
            >
              {heroData?.heroButton}
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default HeroSection
