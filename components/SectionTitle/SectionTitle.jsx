import React from 'react'

export default function SectionTitle({ title, color }) {
	return (
		<div className='section_title_cont'>
			<h2 className='section_title'>{title}</h2>
			<style jsx>{`
				.section_title_cont {
					width: 100%;
					height: auto;
					padding-block-end: 50px;
				}
				.section_title {
					text-decoration: none;
					text-align: center;
					vertical-align: middle;
					font-size: 3rem;
					font-weight: 700;
					line-height: calc(3rem * 1.6);
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
					background-clip: text;
					color: transparent;
					animation: bg 5000ms ease-in-out infinite;
				}
				@keyframes bg {
					0% {
						color: transparent;
					}
					30% {
						color: ${color};
					}
					100% {
						color: transparent;
					}
				}
				@media screen and (min-width: 1050px) {
					.section_title {
						font-size: 3.5rem;
						line-height: calc(3.5rem * 1.6);
					}
				}
			`}</style>
		</div>
	)
}
