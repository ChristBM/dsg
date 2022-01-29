import PorpTypes from 'prop-types'

export default function HamburgerIcon({ openMenu, hamburgerClick }) {
	return (
		<div className='hamburger' onClick={hamburgerClick}>
			<div className={`hamburger__elem_top ${openMenu ? 'x_top' : ''}`} />
			<div className={`hamburger__elem_middle ${openMenu ? 'x_middle' : ''}`} />
			<div className={`hamburger__elem_bottom ${openMenu ? 'x_bottom' : ''}`} />
			<style jsx>{`
				.hamburger {
					width: 30px;
					height: 17px;
					position: relative;
					background: transparent;
					cursor: pointer;
					transition: transform 200ms ease-out;
				}
				.hamburger__elem_top {
					width: inherit;
					height: 3px;
					position: absolute;
					transform: translateY(0px);
					background-color: #ffe619;
					transition: transform 200ms linear;
				}

				.hamburger__elem_middle {
					width: inherit;
					height: 3px;
					position: absolute;
					transform: translateY(7px) scale(1);
					opacity: 1;
					background-color: #ffe619;
					transition: opacity 200ms linear;
				}

				.hamburger__elem_bottom {
					width: inherit;
					height: 3px;
					position: absolute;
					transform: translateY(14px);
					background-color: #ffe619;
					transition: transform 200ms linear;
				}

				.hamburger:hover {
					transform: scale(1.1);
					transition: transform 200ms ease-in;
				}

				.x_top {
					transform: translateY(7px) rotateZ(-45deg);
					transition: transform 200ms linear;
				}
				.x_middle {
					transform: translateY(7px) scale(0);
					opacity: 0;
					transition: opacity 200ms linear;
				}
				.x_bottom {
					transform: translateY(7px) rotateZ(45deg);
					transition: transform 200ms linear;
				}
			`}</style>
		</div>
	)
}

HamburgerIcon.defaultProps = {
	openMenu: false, // open the Menu = true, close the Menu = false
	hamburgerClick: () => null,
}

HamburgerIcon.porpTypes = {
	openMenu: PorpTypes.bool.isRequired,
	hamburgerClick: PorpTypes.func.isRequired,
}
