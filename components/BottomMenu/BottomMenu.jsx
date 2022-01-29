import Link from 'next/link'
import {
	RiHome4Fill,
	RiCoinsFill,
	RiGalleryFill,
	RiGiftFill,
	RiTeamFill,
} from 'react-icons/ri'

export default function BottomMenu({ language }) {
	return (
		<nav className='bottom_menu'>
			<ul className='bottom_menu__list'>
				<li className='bottom_menu__li'>
					<Link href='/'>
						<a className='ancor'>
							<RiHome4Fill size='20px' color='#000' />
							{language ? 'Home' : 'Inicio'}
						</a>
					</Link>
					<span className='li_underline' />
				</li>
				<li className='bottom_menu__li'>
					<Link href='/services'>
						<a className='ancor'>
							<RiCoinsFill size='20px' color='#000' />
							{language ? 'Services' : 'Servicios'}
						</a>
					</Link>
					<span className='li_underline' />
				</li>
				<li className='bottom_menu__li'>
					<Link href='/updates'>
						<a className='ancor'>
							<RiGiftFill size='20px' color='#000' />
							{language ? 'Updates' : 'Novedades'}
						</a>
					</Link>
					<span className='li_underline' />
				</li>
				<li className='bottom_menu__li'>
					<Link href='/gallery'>
						<a className='ancor'>
							<RiGalleryFill size='20px' color='#000' />
							{language ? 'Gallery' : 'Galería'}
						</a>
					</Link>
					<span className='li_underline' />
				</li>
				<li className='bottom_menu__li'>
					<Link href='/gallery'>
						<a className='ancor'>
							<RiTeamFill size='20px' color='#000' />
							{language ? 'About Us' : 'Nosotros'}
						</a>
					</Link>
					<span className='li_underline' />
				</li>
			</ul>
			<style jsx>{`
				.bottom_menu {
					display: flex;
					width: 100%;
					height: 60px;
					position: fixed;
					bottom: 0px;
					z-index: 12;
					justify-content: space-between;
					align-items: center;
					background-color: #fff;
					animation: intro 300ms linear forwards;
					background-image: url('/endless-constellation.svg');
					background-repeat: repeat;
					background-size: 150px;
					box-shadow: 0px -5px 15px #0000004d;
				}
				@keyframes intro {
					0% {
						transform: translateY(60px);
					}
					100% {
						transform: translateY(0);
					}
				}
				.bottom_menu__list {
					display: flex;
					width: 100%;
					height: 100%;
					justify-content: space-evenly;
					align-items: center;
					list-style: none;
				}
				.bottom_menu__li {
					width: auto;
					color: #030303;
					font-size: 1.2rem;
					font-weight: 500;
					cursor: pointer;
				}
				.li_underline {
					display: block;
					width: 100%;
					height: 2px;
					padding-block-start: 2px;
					border-block-end: 2px solid #030303;
					transform: scaleX(0);
					transition: transform 200ms ease-out;
				}
				.bottom_menu__li:hover .li_underline {
					transform: scaleX(1);
					transition: transform 300ms ease-in;
				}
				.ancor {
					display: flex;
					padding-block-end: 5px;
					text-decoration: none;
					flex-direction: column;
					align-items: center;
				}
				@media screen and (min-width: 720px) {
					.bottom_menu {
						display: none;
					}
				}
			`}</style>
		</nav>
	)
}
