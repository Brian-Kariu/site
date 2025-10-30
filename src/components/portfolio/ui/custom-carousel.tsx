'use client'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/ui.astro/card.tsx'
import data from '@/data/data.json'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui.astro/carousel.tsx'
import { Slider } from '@/components/ui.astro/slider.tsx'

const CustomCarousel = () => {
	const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
	const experience = data.experience

	return (
		<div className='w-full min-h-[320px] 2xs:min-h-[360px] xs:min-h-[400px] p-2 2xs:p-3 xs:p-4 sm:p-6 flex justify-center flex-row gap-3 2xs:gap-4 xs:gap-6'>
			<Carousel
				orientation='vertical'
				opts={{
					align: 'start'
				}}
				plugins={[plugin.current]}
				className='w-full lg:w-4/5  border-none bg-none dark:text-white shadow-none'
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.play}
			>
				<CarouselContent className='-mt-1 h-[320px] 2xs:h-[360px] xs:h-[400px]'>
					{experience.map((items, index) => (
						<CarouselItem key={index} className='pt-1 md:basis-1/2'>
							<div className='p-1'>
								<Card className='shadow-none bg-white  dark:bg-background dark:text-white'>
									<CardContent className='flex flex-col 2xs:flex-row items-center gap-2 2xs:gap-3 xs:gap-5 justify-center p-2 2xs:p-3 xs:p-4 '>
										<div className='w-full 2xs:w-1/4 flex items-center justify-center text-xs 2xs:text-sm xs:text-base sm:text-lg text-center'>
											{items.year[0]} - {items.year[1]}
										</div>
										<div className='relative w-full 2xs:w-3/4 border-l-0 2xs:border-l-4 border-t-4 2xs:border-t-0 border-l-[#3c3c3c] border-t-[#3c3c3c] p-2 2xs:p-3 xs:p-4 gap-2 2xs:gap-3 education_point'>
											<div className='items-start justify-start'>
												<h2 className='text-sm 2xs:text-base xs:text-lg'>{items.company}</h2>
												<code className='text-orange text-xs 2xs:text-sm xs:text-base'>
													{items.role}
												</code>
											</div>
											<p className=' w-full text-xs 2xs:text-sm xs:text-sm '>{items.experience}</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export { CustomCarousel }
