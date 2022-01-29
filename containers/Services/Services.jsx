import Link from 'next/link'
import ServiceCard from '@components/ServiceCard/ServiceCard'
import MainBtn from '@components/MainBtn/MainBtn'

const mainServices = [
	{
		img: 'estimate',
		titleEn: 'Taxes Estimation',
		titleEs: 'Estimación De Taxes',
		price: 0,
		time: '1h',
	},
	{
		img: 'credit',
		titleEn: 'Credit Repair',
		titleEs: 'Reparación De Crédito',
		price: 185,
		time: '1h',
	},
	{
		img: 'pppEidl',
		titleEn: 'Aplication For PPP or EIDL',
		titleEs: 'Aplicación Para PPP o EIDL',
		price: 100,
		time: '1h',
	},
	{
		img: 'bussines',
		titleEn: 'Aplication For Bussiness License',
		titleEs: 'Aplicación Para Licencia De Negocio',
		price: 200,
		time: '1h',
	},
]

export default function Services({ language }) {
	return (
		<div className='services_section'>
			<div className='services_section__cards'>
				{mainServices.map(s => (
					<ServiceCard
						key={s.titleEn}
						img={s.img}
						title={language ? s.titleEn : s.titleEs}
						price={s.price}
						time={s.time}
					/>
				))}
			</div>
			<div className='services_section__btn'>
				<MainBtn
					text={language ? 'More About Services ' : 'Ver Más Servicios'}
					icon='arrow_r'
					link='/services'
					border={true}
				/>
			</div>
			<Link href='https://www.facebook.com/DollarSymphonyGroup/services/'>
				<a
					target='_blank'
					rel='noreferrer'
					title='Make Appointment'
					className='services_section__a'
				>
					{language ? 'Make Appointment' : 'Pida Su Cita Ahora'}
				</a>
			</Link>
			<style jsx>{`
				.services_section {
					display: flex;
					width: 100%;
					padding-block-end: 50px;
					flex-direction: column;
					align-items: center;
					gap: 30px;
				}
				.services_section__cards {
					display: flex;
					width: 100%;
					max-width: 700px;
					height: auto;
					flex-flow: row wrap;
					justify-content: center;
					gap: 20px;
				}
				.services_section__btn {
					padding-block-start: 40px;
				}
				.services_section__a {
					border-bottom: 2px solid #ffe619;
					font-size: 1.6rem;
					font-weight: 500;
					line-height: calc(1.6rem * 1.6);
					color: #ffe619;
					transform: scale(1);
					transition: transform 300ms linear;
				}
				.services_section__a:hover {
					color: #FFF;
					transform: scale(1.1);
					transition: transform 300ms linear;
				}
				@media screen and (min-width: 1050px) {
					.services_section {
					gap: 40px;
				}
					.services_section__cards {
					display: flex;
					width: 100%;
					max-width: 1000px;
					height: auto;
					flex-flow: row wrap;
					justify-content: center;
					gap: 40px;
				}
				.services_section__btn {
					padding-block-start: 100px;
				}
				}
			`}</style>
		</div>
	)
}
