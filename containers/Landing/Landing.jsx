import { useContext } from 'react'
import { GlobalContext } from '@contexts/GlobalContext'
import MainBtn from '@components/MainBtn/MainBtn'
import SliderLanding from '@components/SliderLanding/SliderLanding'
import { RiFacebookBoxFill, RiInstagramFill, RiShareFill } from 'react-icons/ri'

let titleEn = '"Good credit is the key to whole opportunities"'
let titleEs = '"Un buen credito es la clave para todas las oportunidades"'

let infoEn =
	'Tax Preparation Service in Las Vegas, Opening from 8:30 AM to 5:30 PM Monday to Friday and 10:00 AM to 5:00 PM on Saturdays'
let infoEs =
	'Servicio de Preparación de Impuestos en Las Vegas, Abierto de 8:30 AM a 5:30 PM de Lunes a Viernes y de 10:00 AM a 5:00 PM los Sábados'

export default function Landing() {
	let globals = useContext(GlobalContext)
	let { language } = globals.globalStates.state
	const shareData = {
		title: 'Dollar Symphony Grup',
		text: 'Come and discover incredible and delicious recipes.',
		url: '/',
	}

	const handleShare = async () => {
		try {
			await navigator.share(shareData)
		} catch (err) {
			throw new Error()
		}
	}
	return (
		<div className='landing'>
			<div className='landing_left'>
				<div>
					<h1 className='landing__title'>{language ? titleEn : titleEs}</h1>
				</div>
				<div className='landing__btn'>
					<MainBtn
						text={language ? 'Make Appointment' : 'Pida Su Cita Ahora'}
						icon='calendar'
						link='https://www.facebook.com/DollarSymphonyGroup'
					/>
				</div>
				<p className='landing__info'>{language ? infoEn : infoEs}</p>
				<div className='landing__social'>
					<a
						href='https://www.facebook.com/DollarSymphonyGroup'
						title='Go to the Facebook page'
						target='_blank'
						rel='noreferrer'
					>
						<RiFacebookBoxFill size='30px' color='#fff' />
					</a>
					<a
						href='https://www.instagram.com/dollarsymphonygroup'
						title='Go to the Instagram profile'
						target='_blank'
						rel='noreferrer'
					>
						<RiInstagramFill size='28px' color='#fff' />
					</a>
					<button title='Share with friends' onClick={handleShare} className='btn_share'>
						<RiShareFill size='30px' color='#fff' />
					</button>
				</div>
			</div>
			<div className='landing_right'>
				<SliderLanding />
			</div>
			<div className='landing__tilt' />
			<style jsx>{`
				.landing {
					display: flex;
					width: 100%;
					min-height: 650px;
					margin-block-start: 60px;
					padding: 20px;
					position: relative;
					align-items: center;
					background-image: url('/diamond-sunset.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
				}
				.landing_left {
					display: flex;
					width: 100%;
					flex-direction: column;
					align-items: center;
					gap: 20px;
				}
				.landing__title {
					text-align: center;
					padding-block-start: 60px;
					padding-block-end: 20px;
					text-transform: uppercase;
					font-size: 3.2rem;
					font-weight: 700;
					line-height: calc(2.5rem * 1.6);
					color: #fff;
				}
				.landing__btn {
					display: flex;
					width: 100%;
					justify-content: center;
				}
				.landing__info {
					padding-block-start: 20px;
					padding-inline: 20px;
					text-align: center;
					font-size: 1.6rem;
					font-weight: 500;
					line-height: calc(1.6rem * 1.6);
					color: #fff;
				}
				.landing__social {
					display: flex;
					width: 300px;
					gap: 30px;
					justify-content: center;
					align-items: center;
				}
				.landing__social a {
					text-decoration: none;
					text-align: center;
					font-size: 1.2rem;
					font-weight: 500;
					line-height: calc(1rem * 1.6);
					color: #fff;
				}
				.btn_share {
					border-style: none;
					background: none;
					cursor: pointer;
				}
				.landing_right {
					display: none;
				}
				.landing__tilt {
					width: 100%;
					height: 40px;
					position: absolute;
					bottom: 0px;
					left: 0;
					right: 0;
					z-index: 2;
					transform: rotateX(180deg);
					background-image: url('/tilt_mobile_landing.svg');
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
				}
				@media screen and (min-width: 750px) {
					.landing {
					justify-content: center;
				}
					.landing_left {
						width: 670px;
					}
				}
				@media screen and (min-width: 1050px) {
					.landing {
						display: grid;
						width: 100%;
						min-height: 700px;
						padding-inline: 100px;
						margin-block-start: 60px;
						grid-template-columns: repeat(2, 1fr);
						gap: 50px;
					}
					.landing_left {
						grid-column: 1/2;
						display: flex;
						width: 100%;
						flex-direction: column;
						align-items: flex-start;
						gap: 20px;
					}
					.landing_right {
						grid-column: 2/3;
						width: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.landing__title {
						text-align: left;
						padding-block-start: 0px;
						padding-block-end: 40px;
						padding-inline-end: 40px;
						font-size: 4rem;
						line-height: calc(3rem * 1.6);
					}
					.landing__btn {
						justify-content: flex-start;
					}
					.landing__info {
						width: 60ch;
						padding-block-start: 0px;
						padding-inline-start: 0px;
						padding-inline-end: 80px;
						text-align: left;
						font-size: 1.8rem;
						line-height: calc(1.8rem * 1.6);
					}
					.landing__social {
						padding-block-start: 0px;
						gap: 30px;
						justify-content: flex-start;
					}
				}
			`}</style>
		</div>
	)
}
