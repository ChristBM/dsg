import Image from 'next/image'
import aboutImg from '@public/about.webp'
import styles from './about.module.css'
import MainBtn from '@components/MainBtn/MainBtn'

export default function About({ language }) {
	return (
		<div className={styles.container}>
			<div className={styles.img_cont}>
				<Image src={aboutImg} placeholder='blur' className={styles.img} />
			</div>
			<div className={styles.texts_cont}>
				<h1 className={styles.title}>Dollar Symphony Group</h1>
				<div className={styles.text_container}>
					{language ?<p className={styles.text}>
						Welcome! It's good to have you here with us and if you don't know us yet let
						us introduce ourselves. My name is Ana Maria and I am in charge of a fabulous
						team which goes by the name of "Dollar Symphony Group".
						<br/>
						<br/>
						Our experts will take	care of giving you the best treatment and advice possible. We offer you peace of mind knowing that your "Taxes" will be done right the first time and we guarantee agility, security and maximum reimbursement.
						<br/>
						<br/>
						We have a number of other services such as:
						Car, Home and Business Insurance. Immigration and Notary Procedures. Translations. Business Licenses. Credit Arrangements. Applications for Foods Stamps, Medicaid and others.
						<br/>
						<br/>
						Do not hesitate to contact	us, we are at your disposal.
					</p>
					:<p className={styles.text}>
						¡Bienvenido! Es bueno tenerte aquí con nosotros y si aún no nos conoces permítenos una presentación. Mi nombre es Ana María y estoy a cargo de un fabuloso equipo de trabajo el cual lleva el nombre de "Dollar Symphony Group".
						<br/>
						<br/>
						Nuestros expertos se encargarán de darte el mejor trato y asesoramiento posible. Te ofrecemos paz mental sabiendo que tus "Taxes" serán hechos correctamente desde la primera vez y además le garantizamos agilidad, seguridad y máximo reembolso.
						<br/>
						<br/>
						Contamos con otra serie de servicios tales como:
						Seguro de Carro, Casa y Negocio. Trámites de Inmigración y Notaría. Traducciones. Licencias de negocios. Arreglo de Crédito. Aplicaciones para Foods Stamps, Medicaid y otros.
						<br/>
						<br/>
						No dude en contactarnos, estamos a su entera disposición.
					</p>}
				</div>
			</div>
			<div className={styles.btn_cont}>
				<MainBtn
					text={language ? 'More About Us' : 'Más Sobre Nosotros'}
					icon='arrow_r'
					link='/about-us'
					border={true}
				/>
			</div>
		</div>
	)
}
