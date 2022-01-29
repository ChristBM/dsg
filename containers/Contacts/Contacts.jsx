import React from 'react'
import MyMap from '@components/Map/MyMap'
import {
	RiMapPin2Fill,
	RiMailFill,
	RiPhoneFill,
	RiCalendarFill,
	RiHandSanitizerFill,
	RiInfraredThermometerFill,
	RiSurgicalMaskFill,
} from 'react-icons/ri'

export default function Contacts({ language, alert }) {
	const handleCopy = text => {
		navigator.clipboard.writeText(text)
		alert('copied', 'Copied')
	}

	return (
		<div className='contacts'>
			<MyMap />
			<div className='contacts_card'>
				<div
					className='contact_data'
					title={language ? 'Copy' : 'Copiar'}
					onClick={() =>
						handleCopy('1380 E Sahara Ave Suite B Las Vegas, NV 89104 United States')}
				>
					<p className='contact_data_p'>{language ? 'Copy' : 'Copiar'}</p>
					<RiMapPin2Fill size='30px' color='#ffe619' />
					<h2 className='contact_data__title'>
						1380 E Sahara Ave Suite B Las Vegas, NV 89104 United States
					</h2>
				</div>

				<div
					className='contact_data'
					onClick={() => handleCopy('dollarsymphonygroup@gmail.com')}
				>
					<p className='contact_data_p'>{language ? 'Copy' : 'Copiar'}</p>
					<RiMailFill size='30px' color='#ffe619' />
					<h2 className='contact_data__title'>dollarsymphonygroup@gmail.com</h2>
				</div>

				<div className='contact_data' onClick={() => handleCopy('7025780864')}>
					<p className='contact_data_p'>{language ? 'Copy' : 'Copiar'}</p>
					<RiPhoneFill size='30px' color='#ffe619' />
					<h2 className='contact_data__title'>
						(702) 483-5180 {language ? 'or' : 'o'} (702) 578-0864
					</h2>
				</div>

				<div
					className='contact_data'
					onClick={() => {
						let horario = language
							? 'Opening from 8:30 AM to 5:30 PM Monday to Friday and 10:00 AM to 5:00 PM on Saturdays'
							: 'Abierto de 8:30 AM a 5:30 PM de Lunes a Viernes y de 10:00 AM a 5:00 PM los Sábados'
						handleCopy(horario)
					}}
				>
					<p className='contact_data_p'>{language ? 'Copy' : 'Copiar'}</p>
					<RiCalendarFill size='30px' color='#ffe619' />
					<h2 className='contact_data__title'>
						{language ? (
							'Opening from 8:30 AM to 5:30 PM Monday to Friday and 10:00 AM to 5:00 PM on Saturdays'
						) : (
							'Abierto de 8:30 AM a 5:30 PM de Lunes a Viernes y de 10:00 AM a 5:00 PM los Sábados'
						)}
					</h2>
				</div>
			</div>
			<div className='contact_data card_health'>
				<h3 className='health_title'>
					{language ? 'Health and Safety' : 'Salud y Seguridad'}
				</h3>
				<p className='health_text'>
					<RiSurgicalMaskFill size='25px' color='#000' />
					{` `}--{` `}
					{language ? (
						'Masks are required. Staff wears face masks.'
					) : (
						'Se requiere el uso de mascarilla. El personal usa mascarillas.'
					)}
				</p>
				<p className='health_text'>
					<RiInfraredThermometerFill size='25px' color='#000' />
					{` `}--{` `}
					{language ? (
						'A temperature check is required. Personnel undergo temperature checks.'
					) : (
						'Se requiere una revisión de temperatura. El personal se somete a verificaciones de temperatura.'
					)}
				</p>
				<p className='health_text'>
					<RiHandSanitizerFill size='25px' color='#000' />
					{` `}--{` `}
					{language ? (
						'Mandatory surface disinfection by staff after each visit.'
					) : (
						'Desinfección de superficies obligatoria por parte del personal después de cada visita.'
					)}
				</p>
			</div>
			<style jsx>{`
				.contacts {
					display: flex;
					width: 100%;
					padding-block-end: 20px;
					padding-inline: 20px;
					flex-direction: column;
					align-items: center;
					gap: 50px;
				}
				.contacts_card {
					display: flex;
					max-width: 750px;
					height: auto;
					flex-flow: row wrap;
					justify-content: center;
					gap: 20px;
				}
				.contact_data {
					display: grid;
					width: 320px;
					min-height: 150px;
					padding: 10px 5px;
					border-radius: 5px;
					border: 2px dashed #ffe619;
					position: relative;
					grid-template-rows: auto 80px;
					box-shadow: 0px 5px 5px #0000004d;
					cursor: copy;
					background-image: url('/endless-constellation.svg');
					background-repeat: repeat;
					background-size: contain;
				}
				.card_health {
					display: flex;
					width: 0px;
					width: 100%;
					max-width: 660px;
					padding: 20px 30px;
					background-image: none;
					background-color: #ffe619;
					border: none;
					flex-direction: column;
					gap: 20px;
					cursor: pointer;
					transform: scale(1);
					transition: transform 200ms ease-out;
				}
				.card_health:hover {
					transform: scale(1.1);
					transition: transform 200ms ease-in;
				}
				.health_title {
					text-align: center;
					text-decoration: underline;
					font-size: 1.8rem;
					font-weight: 700;
					line-height: calc(1.8rem * 1.6);
					color: #000;
				}
				.health_text {
					text-align: left;
					font-size: 1.6rem;
					font-weight: 500;
					line-height: calc(1.6rem * 1.6);
					color: #000;
				}
				.contact_data_p {
					position: absolute;
					top: 5px;
					right: 5px;
					font-size: 1rem;
					font-weight: 300;
					color: #000;
				}
				.contact_data__title {
					padding-inline: 25px;
					text-align: center;
					font-size: 1.6rem;
					font-weight: 500;
					line-height: calc(1.6rem * 1.6);
					color: #000;
				}
			`}</style>
		</div>
	)
}
