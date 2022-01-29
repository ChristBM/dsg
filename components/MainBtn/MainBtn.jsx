import { useEffect, useState } from 'react'
import Link from 'next/link'
import { RiCalendarCheckFill, RiArrowRightSLine } from 'react-icons/ri'

export default function MainBtn({ text, icon, link, border = false }) {
	const [ state, setState ] = useState({
		title: '',
		blank: false,
	})
	useEffect(() => {
		let title = ''
		if (/^\/[\w]+/.test(link)) {
			title = link.replace(/^\/([\w]+)/, '$1')
				setState({
				title: title,
				blank: false,
			})
		} else {
			title = link.replace(/^https:\/\/www\.([\w]+)\.com\/.*/, '$1')
			setState({
				title: title,
				blank: true,
			})
		}
	}, [link])

	return (
		<button type='button' className={`mainbtn ${border ? 'border_style' : ''}`}>
			{icon === 'calendar' ? <RiCalendarCheckFill size='30px' color='#fff' /> : null}
			{icon === 'arrow_r' ? <RiArrowRightSLine size='30px' color='#000' /> : null}
			<Link href={link}>
				<a target={state.blank ? '_blank': '_self'} rel='noreferrer' title={`Go to the ${state.title} page`} />
			</Link>
			{text}
			<style jsx>{`
				.mainbtn {
					display: flex;
					width: 300px;
					height: 50px;
					padding-inline-start: 40px;
					border-style: none;
					border-radius: 5px;
					border: 1px groove #fff;
					position: relative;
					align-items: center;
					gap: 30px;
					background: linear-gradient(
						135deg,
						#ffe619,
						#d7c21e,
						#b09f1f,
						#8b7d1e,
						#685d1c,
						#463f17,
						#272311,
						#030303
					);
					color: #fff;
					font-size: 1.8rem;
					font-weight: 500;
					box-shadow: 0px 10px 15px #0000004d;
					cursor: pointer;
					transition: transform 200ms ease-out;
				}
				.border_style {
					width: 250px;
					height: 40px;
					padding-inline-start: 20px;
					gap: 10px;
					background: #ffe619;
					border: none;
					box-shadow: 0px 5px 15px #0000004d;
					color: #030303;
					font-size: 1.8rem;
					font-weight: 700;
				}
				.mainbtn:hover {
					background-image: url('/pattern-randomized.svg');
					background-repeat: no-repeat;
					background-position: center;
					background-size: 800px;
				}
				.border_style:hover {
					background: #faeb7c;
				}
				.mainbtn:active {
					transform: scale(0.9);
					transition: transform 100ms ease-in;
				}
				.mainbtn a {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
				}
			`}</style>
		</button>
	)
}
