import React, { useEffect, useState } from 'react'
import {
	RiSingleQuotesL,
	RiSingleQuotesR,
	RiHeart3Fill,
	RiHeart3Line,
} from 'react-icons/ri'

export default function TestimonialCard({ text, author, stars }) {
	const [ state, setState ] = useState([ 'fill', 'fill', 'fill', 'fill', 'fill' ])

	useEffect(() => {
		if (stars < 5) {
			let starsArr = []
			let cont = stars
			for (let i = 0; i < 5; i++) {
				if (cont > 0) {
					starsArr.push('fill')
					cont--
				} else {
					starsArr.push('line')
				}
			}
			setState([ ...starsArr ])
		}
	}, [stars])
	return (
		<div className='testimonialCard'>
			<p className='testimonialCard__text'>
				<span>
					<RiSingleQuotesL size='15px' color='#000' />
				</span>
				{text}
				<span>
					<RiSingleQuotesR size='15px' color='#000' />
				</span>
			</p>
      <div className='testimonialCard__author_con'>
        <p className='testimonialCard__author'>{author}</p>
			</div>
      <div className='testimonialCard__stars'>
				{state.map((m, index) => {
					if (m === 'fill') {
						return <RiHeart3Fill size='20px' color='#ffe619' key={index} />
					} else {
						return <RiHeart3Line size='20px' color='#ffe619' key={index} />
					}
				})}
			</div>
			<style jsx>{`
				.testimonialCard {
          display: flex;
					width: 300px;
					min-height: 150px;
					height: auto;
					padding: 20px 15px 20px 35px;
					border-radius: 5px;
          position: relative;
          flex-direction: column;
          align-items: center;
          gap: 10px;
					background-image: url('/page-turner.svg');
					background-position: -10px 0px;
					background-repeat: no-repeat;
					background-size: 50px;
					box-shadow: 0px 10px 15px #0000004d;
				}
				.testimonialCard__text {
					text-decoration: none;
					text-align: left;
					font-size: 1.2rem;
					font-weight: 500;
					line-height: calc(1rem * 1.6);
					color: #030303;
				}
        .testimonialCard__author_con {
          display: flex;
          width: 100%;
          padding-block-end: 40px;
          justify-content: flex-end;
          align-items: center;
        }
        .testimonialCard__author {
          text-decoration: none;
					text-align: center;
					font-size: 1.4rem;
					font-weight: 700;
					line-height: calc(1.4rem * 1.6);
					color: #030303;
        }
        .testimonialCard__stars {
          width: 100%;
          position: absolute;
          bottom: 20px;
          left: 35px;
        }
			`}</style>
		</div>
	)
}
