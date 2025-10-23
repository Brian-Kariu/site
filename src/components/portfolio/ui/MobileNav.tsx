import React from 'react'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui.astro/button.tsx'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui.astro/dropdown-menu.tsx'

interface MenuItem {
	title: string
	path: string
}

interface MobileNavProps {
	menuitems: MenuItem[]
}

const MobileNav: React.FC<MobileNavProps> = ({ menuitems }) => {
	const [isOpen, setIsOpen] = React.useState(false)

	const handleNavClick = (path: string) => {
		const element = document.getElementById(path)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest'
			})
		}
		setIsOpen(false) // Close the dropdown after navigation
	}

	return (
		<div className='md:hidden align-middle'>
			<DropdownMenu onOpenChange={setIsOpen}>
				<DropdownMenuTrigger asChild>
					<Button size='icon-sm' variant='outline'>
						{isOpen ? <X /> : <Menu />}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='w-12 bg-white dark:bg-primary py-3' align='end'>
					<DropdownMenuGroup>
						{menuitems.map((item, index) => (
							<DropdownMenuItem
								className='bg-white dark:bg-card dark:text-white'
								key={index}
								onClick={() => handleNavClick(item.path)}
							>
								{item.title}
							</DropdownMenuItem>
						))}
						<DropdownMenuItem
							className='bg-white dark:bg-card dark:text-white'
							onClick={() => {
								setIsOpen(false)
								window.location.href = '/blog'
							}}
						>
							<span className='flex items-center gap-2'>
								Blog <ExternalLink size={16} />
							</span>
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export { MobileNav }
