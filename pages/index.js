import Head from 'next/head'
import { useContext } from 'react'
import { GlobalContext } from '@contexts/GlobalContext'

import Header from '@containers/Header/Header'
import Landing from '@containers/Landing/Landing'
import Testimonials from '@containers/Testimonials/Testimonials'
import About from '@containers/About/About'
import Services from '@containers/Services/Services'
import CallToAction from '@containers/CallToAction/CallToAction'
import Contacts from '@containers/Contacts/Contacts'

import AlertMessage from '@components/AlertMessage/AlertMessage'
import TopBanner from '@components/TopBanner/TopBanner'
import SectionTitle from '@components/SectionTitle/SectionTitle'
import BottomMenu from '@components/BottomMenu/BottomMenu'
import GoUpArrow from '@components/GoUpArrow/GoUpArrow'

import { RiFacebookBoxFill, RiInstagramFill, RiShareFill } from 'react-icons/ri'
import styles from '@styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
	let globals = useContext(GlobalContext)
	let { showAlert } = globals.statesUpdaters
	let { language, menuMobile } = globals.globalStates.state
	let { y } = globals.globalStates.scroll
	let { show, type } = globals.globalStates.state.alert

	const shareData = {
		title: 'Dollar Symphony Grup',
		text: language
			? 'Make your tax return with our experts. We guarantee agility, security and maximum reimbursement.'
			: 'Realice su declaración de impuestos con nuestros expertos. Le garantizamos agilidad, seguridad y máximo reembolso.',
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
		<div className={styles.container}>
			<Head>
				<title>Dollar Symphony Group</title>
			</Head>

			{show ? <AlertMessage type={type} language={language} /> : null}

			<TopBanner />

			<header className={styles.header}>
				<Header />
			</header>

			{y >= 300 ? <GoUpArrow /> : null}

			<main className={styles.main}>
				<section className={styles.main_sect__landing}>
					<Landing />
				</section>

				<section className={styles.main_sect__aboutus}>
					<SectionTitle title={language ? 'About Us' : 'Nosotros'} color='#1d1d1d' />
					<About language={language} />
				</section>

				<section className={styles.main_sect__services}>
					<div className={styles.sect__tilt_top} />
					<SectionTitle title={language ? 'Services' : 'Servicios'} color='#1d1d1d' />
					<Services language={language} />
					<div className={styles.sect__tilt_btt} />
				</section>

				<section className={styles.main_sect__testimonials}>
					<SectionTitle
						title={language ? 'Testimonials' : 'Testimonios'}
						color='#1d1d1d'
					/>
					<Testimonials />
				</section>

				<section className={styles.main_sect__actioncall}>
					<div className={styles.sect__tilt_top} />
					<CallToAction language={language} />
					<div className={styles.sect__tilt_btt} />
				</section>

				<section className={styles.main_sect__contacts}>
					<SectionTitle title={language ? 'Contacts' : 'Contactos'} color='#1d1d1d' />
					<Contacts language={language} alert={showAlert} />
				</section>
			</main>

			<footer className={styles.footer}>
				<div className={styles.sect__tilt_top} />
				<div className={styles.footer_landing__social}>
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
					<button
						title='Share with friends'
						onClick={handleShare}
						className={styles.footer_btn}
					>
						<RiShareFill size='28px' color='#fff' />
					</button>
				</div>
				<div className={styles.footer_official}>
					<p>
						{language ? (
							'This is a trial application, if you wish, you can to consult the official website at the following link:'
						) : (
							'Esta es una aplicación de prueba, si desea, puede consultar la web oficial en el siguiente enlace:'
						)}
					</p>
					<br />
					<Link href='https://dollar-symphony-group-tax-preparation-service.business.site'>
						<a rel='noreferrer' target='_blank'>
							Dollar Symphony Group Official Website
						</a>
					</Link>
				</div>
				<p className={styles.footer_copy}>
					2022 Dollar Symphony Group · Made in Las Vegas · Coded by ChristBM
				</p>
			</footer>

			{menuMobile ? <BottomMenu language={language} /> : null}
		</div>
	)
}
/* © */
