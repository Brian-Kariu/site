const scrollToHash = (elementId: string) => {
	const element = document.getElementById(elementId)
	element?.scrollIntoView({
		behavior: 'smooth',
		block: 'end',
		inline: 'nearest'
	})
}

export { scrollToHash }
