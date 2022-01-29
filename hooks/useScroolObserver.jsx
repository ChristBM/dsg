import { useEffect, useState } from 'react'

export default function useScroolObserver() {
	const [ scroll, setScroll ] = useState({
		y: 0,
		isDown: false,
	})
	useEffect(() => {
		const handleScroll = () => {
			let posY = window.scrollY
			if (posY > 0) {
				setScroll({
					y: posY,
					isDown: true,
				})
			} else {
				setScroll({
					y: posY,
					isDown: false,
				})
			}
		}
		document.addEventListener('scroll', handleScroll)

		return () => document.removeEventListener('scroll', handleScroll)
	}, [])

	return { scroll }
}
