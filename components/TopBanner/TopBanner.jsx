import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { HiPhone, HiMail } from 'react-icons/hi'

export default function TopBanner() {

  let globals = useContext(GlobalContext)
  let { statesUpdaters } = globals

	const handleCopy = text => {
		navigator.clipboard.writeText(text)
    statesUpdaters.showAlert('copied', 'Copied')
	}

	return (
		<div className='topbanner'>
			<div
				className='topbanner_tel_email'
				title='copy phone number'
				onClick={() => handleCopy('7024835180')}
			>
				<div className='topbanner__info_cont'>
					<HiPhone color='#000' size='12px' />
					<p>
						+1 {`(`}702{`)`}-483-5180
					</p>
				</div>
				<span className='topbanner__info_underline' />
			</div>
			<div
				className='topbanner_tel_email'
				title='copy email address'
				onClick={() => handleCopy('dollarsymphonygroup@gmail.com')}
			>
				<div className='topbanner__info_cont'>
					<HiMail color='#000' size='12px' />
					<p>dollarsymphonygroup@gmail.com</p>
				</div>
				<span className='topbanner__info_underline' />
			</div>
			<style jsx>{`
				.topbanner {
					display: flex;
					width: 100%;
					height: 30px;
					margin: 0 auto;
					position: fixed;
					top: 0;
					z-index: 10;
					flex-direction: row;
					justify-content: space-evenly;
					align-items: center;
					gap: 5px;
					background-color: #ffe619;
					color: #030303;
					font-size: 1.1rem;
					font-weight: 500;
					cursor: pointer;
				}
				.topbanner_tel_email {
					display: flex;
					width: auto;
					flex-direction: column;
					align-items: center;
				}
				.topbanner__info_cont {
					display: flex;
					align-items: center;
					gap: 5px;
				}
				.topbanner__info_underline {
					display: block;
					width: 100%;
					height: 2px;
					border-block-end: 1px solid #030303;
					transform: scaleX(0);
					transition: transform 200ms ease-out;
				}
				.topbanner_tel_email:hover .topbanner__info_underline {
					transform: scaleX(1);
					transition: transform 300ms ease-in;
				}
			`}</style>
		</div>
	)
}
