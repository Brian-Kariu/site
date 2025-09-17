import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui.astro/button.tsx'
import { Sun } from 'lucide-react'
import { Moon } from 'lucide-react'

const Toggle = () => {
	const [darkMode, setDarkMode] = useState(false)

	const toggleMode = () => {
		setDarkMode((prev) => !prev)
		document.documentElement.classList.toggle('dark')
	}

	return (
		<Button
			variant='ghost'
			onClick={toggleMode}
			className='relative overflow-hidden items-center justify-center'
		>
			<motion.div
				initial={{ y: 0, opacity: 1 }}
				animate={darkMode ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className='absolute'
			>
				<Sun />
			</motion.div>

			<motion.div
				initial={{ y: 40, opacity: 0 }}
				animate={darkMode ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
				className='absolute'
			>
				<Moon color='white' />
			</motion.div>
		</Button>
	)
}

export { Toggle }
