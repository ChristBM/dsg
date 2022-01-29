import React from 'react'
import Image from 'next/image'
import logo from '@public/logo.webp'
import logo2 from '@public/logoIcon.webp'

export default function Logo({ isDown }) {
	return (
		<div className='logo'>
			{isDown ? (
				<Image src={logo2} loading='eager' placeholder='blur' layout='responsive' alt='Dollar Symphony Group Logo' />
			) : (
				<Image src={logo} loading='eager' placeholder='blur' layout='responsive' alt='Dollar Symphony Group Logo' />
			)}
			<style jsx>{`
				.logo {
					width: ${ isDown ? '60px' : '90px'};
					height: ${ isDown ? '60px' : '90px'};
				}
			`}</style>
		</div>
	)
}
