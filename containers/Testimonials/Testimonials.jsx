import TestimonialCard from '@components/TestimonialCard/TestimonialCard'

const testim = [
	{
		textEn:
			'Every time I visit dollar symphony i leave with a smile on my face. I have done my taxes with them for the past 4 years and they do not disappoint. They get you back what you are entitled...',
		textEs: '',
		author: 'yasmani g',
		stars: 5,
	},
	{
		textEn:
			'I highly recommend this place because they are really helpful. Dayna answered all my questions and made me feel like family. Thank you Dollar Symphony Group you guys are the best...',
		textEs: '',
		author: 'guatemalteco0823',
		stars: 5,
	},
	{
		textEn:
			'Everyone is amazing here! I will keep coming to do my tax return!!! Thank you!...',
		textEs: '',
		author: 'Patricia M',
		stars: 5,
	},
]

export default function Testimonials() {
	return (
		<div className='testimonials'>
			{testim.map(t => (
				<TestimonialCard
					key={t.author}
					text={t.textEn}
					author={t.author}
					stars={t.stars}
				/>
			))}
			<style jsx>{`
				.testimonials {
					display: flex;
					width: 100%;
					height: auto;
					padding-block-end: 50px;
					flex-flow: row wrap;
					justify-content: center;
					gap: 30px;
				}
				@media screen and (min-width: 1050px) {
					.testimonials {
						display: flex;
						width: 1000px;
						height: auto;
						padding-block-end: 50px;
						flex-flow: row wrap;
						justify-content: center;
						gap: 30px;
					}
				}
			`}</style>
		</div>
	)
}
