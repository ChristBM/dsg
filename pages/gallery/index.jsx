import Link from 'next/link'
import SectionTitle from '@components/SectionTitle/SectionTitle'
import { RiArrowGoBackFill } from 'react-icons/ri'

export default function Gallery() {
	return (
		<div className='gallery'>
			<SectionTitle title='COOMING SOON' color='#1d1d1d' />
			<Link href='/'>
				<a>
					<RiArrowGoBackFill size='25px' color='#000' />
					Go Home
				</a>
			</Link>
			<style jsx>{`
				.gallery {
					display: flex;
					width: 100%;
					min-height: 100vh;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size: 2rem;
				}
				a {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				a:hover {
					text-decoration: underline;
				}
			`}</style>
		</div>
	)
}
