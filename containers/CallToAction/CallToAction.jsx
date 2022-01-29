import MainBtn from '@components/MainBtn/MainBtn'
import Link from 'next/link'

export default function CallToAction({ language }) {
	return (
		<div className='cta'>
			<div className='cta__title_cont'>
				<h2 className='cta__title'>
					{language ? (
						'We love our customers! for that reason we prepare events, lucky draws and special prices for them.'
					) : (
						'¡Amamos a nuestros clientes! por eso preparamos eventos, sorteos y precios especiales para ellos.'
					)}
				</h2>
			</div>
			<div>
				<MainBtn
					text={language ? 'See All Updates' : 'Conozca Lo Nuevo'}
					icon='arrow_r'
					link='/updates'
					border={true}
				/>
			</div>

			<Link href='/gallery'>
				<a title='Go To The Gallery' className='cta__a'>
					{language ? 'Go To The Gallery' : 'Visitar La Galería'}
				</a>
			</Link>

			<style jsx>{`
				.cta {
					display: flex;
					width: 100%;
					height: auto;
					padding-block-end: 50px;
					flex-direction: column;
					align-items: center;
					gap: 30px;
				}
				.cta__title {
					text-align: center;
					padding-block-start: 60px;
					padding-block-end: 20px;
					padding-inline: 10px;
					text-transform: uppercase;
					font-size: 2.8rem;
					font-weight: 700;
					line-height: calc(2.8rem * 1.6);
					color: #fff;
				}
				.cta__a {
					border-bottom: 2px solid #ffe619;
					font-size: 1.6rem;
					font-weight: 500;
					line-height: calc(1.6rem * 1.6);
					color: #ffe619;
					transform: scale(1);
					transition: transform 300ms linear;
				}
				.cta__a:hover {
					color: #fff;
					transform: scale(1.1);
					transition: transform 300ms linear;
				}
				@media screen and (min-width: 750px) {
					.cta__title {
						width: 700px;
					}
				}
				@media screen and (min-width: 1050px) {
					.cta {
						gap: 40px;
					}
					.cta__title {
						padding-block-start: 60px;
						padding-block-end: 60px;
					}
				}
			`}</style>
		</div>
	)
}
