import { RiArrowUpLine } from 'react-icons/ri'

export default function GoUpArrow() {
	const goUp = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div className='go_up' onClick={goUp} title='Go to the top'>
			<RiArrowUpLine size='30px' color='#ffe619' />
			<style jsx>{`
				.go_up {
					display: flex;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					position: fixed;
					bottom: 100px;
					right: 10px;
					z-index: 12;
					justify-content: center;
					align-items: center;
					background-color: transparent;
					cursor: pointer;
					opacity: 0.5;
					background-color: #1d1d1c;
				}
				.go_up:hover {
					opacity: 1;
					box-shadow: 0px 0px 20px #ffe619;
				}
			`}</style>
		</div>
	)
}
