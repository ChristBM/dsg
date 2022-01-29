import { useContext } from 'react'
import { GlobalContext } from '@contexts/GlobalContext'
import LangBtn from '@components/LangBtn/LagnBtn'
import Logo from '@components/Logo/Logo'
import HamburgerIcon from '@components/ HamburgerIcon/ HamburgerIcon'
import NavHeader from '@components/NavHeader/NavHeader'

export default function Header() {
	let globals = useContext(GlobalContext)
	let { language, menuMobile } = globals.globalStates.state
	let { isDown } = globals.globalStates.scroll
	let { toggleLanguage, MenuMobileSwitch } = globals.statesUpdaters
	return (
		<div className='header'>
			<div className='header__lang'>
				<LangBtn language={language} langBtnClick={toggleLanguage} />
			</div>
			<div className='header__logo'>
				<Logo isDown={isDown} />
			</div>
			<div className='header__menu'>
				<div className='header__hamburger'>
					<HamburgerIcon openMenu={menuMobile} hamburgerClick={MenuMobileSwitch} />
				</div>
				<div className='header__nav'>
          <NavHeader language={language} />
				</div>
			</div>
			<style jsx>{`
				.header {
					display: grid;
					width: 100%;
					height: ${ isDown ? '100px' : '140px'};
					padding-block-start: 30px;
					grid-template-columns: 1fr 1fr 1fr;
					background-color: #030303;
					place-items: center;
					transition: height 150ms ease-out;
					box-shadow: 0px 5px 15px #0000004d;
				}
				.header__lang {
					grid-area: 1/1/2/2;
				}
				.header__logo {
					grid-area: 1/2/2/3;
				}
				.header__menu {
					grid-area: 1/3/2/4;
				}
				.header__hamburger {
					display: block;
				}
				.header__nav {
					display: none;
				}
				@media screen and (min-width: 720px) {
					.header {
						grid-template-columns: 1fr 2fr 1fr;
					}
					.header__lang {
						grid-area: 1/3/2/4;
					}
					.header__logo {
						grid-area: 1/1/2/2;
					}
					.header__menu {
						grid-area: 1/2/2/3;
					}
					.header__hamburger {
						display: none;
					}
					.header__nav {
						display: block;
					}
				}
			`}</style>
		</div>
	)
}
