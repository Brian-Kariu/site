'use client'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/ui.astro/card.tsx'
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
	const experiencesItems = [
		{
			company: 'Savannah Informatics',
			role: 'data engineer',
			experience:
				'Headed a team of data engineers and achieved all and spearheaded 3 projects end to end. Developed a semantic layer enabling data commercialization through APIs, boosting revenue by 7%. Architected LLM-driven consultation modules using LangChain & Milvus vector store, achieving 40% user adoption for the products. Designed and deployed 3+ microservices in Django (Python), handling 5k reqs/min under Kubernetes. Maintained data pipeline infrastructure with a 99.9% SLA.',
			year: ['July, 2022', 'now'],
			techstacks: ['airflow', 'django']
		},
		{
			company: 'Vorane Studios',
			role: 'software engineer',
			experience:
				'Migrated to automated deployments for our tech stack. Created an online learning platform tailored for medical professionals that led to increased revenue for the company.',
			year: ['October, 2021', 'June, 2022'],
			techstacks: ['django']
		},
		{
			company: 'Weza Ventures',
			role: 'software engineer',
			experience: 'Conducted comprehensive software testing on various systems',
			year: ['Jan, 2020', 'Jun, 2020'],
			techstacks: ['django']
		},
		{
			company: 'Jomo Kenyatta University',
			role: 'Bachelor in Information Technology',
			experience: 'Studied fundamentals in computer science',
			year: ['Sep, 2017', 'Nov, 2021'],
			techstacks: []
		}
	]

	return (
		<div className='w-full min-h-[400px] p-6 flex justify-center flex-row gap-6'>
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
				<CarouselContent className='-mt-1 h-[400px]'>
					{experiencesItems.map((items, index) => (
						<CarouselItem key={index} className='pt-1 md:basis-1/2'>
							<div className='p-1'>
								<Card className='shadow-none bg-white  dark:bg-background dark:text-white'>
									<CardContent className='flex flex-row items-center gap-5 justify-center p-4 '>
										<div className='w-1/4 flex items-center justify-center text-xl max-sm:text-base'>
											{items.year[0]} - {items.year[1]}
										</div>
										<div className='relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point'>
											<div className='items-start justify-start'>
												<h2>{items.company}</h2>
												<code className='text-orange'>{items.role}</code>
											</div>
											<p className=' w-full text-sm '>{items.experience}</p>
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
