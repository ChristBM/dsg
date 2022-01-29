import PorpTypes from 'prop-types'

export default function LangBtn({ language, langBtnClick }) {
	return (
		<button
			className={`lang_btn ${language ? 'bkg-en' : 'bkg-es'}`}
			onClick={langBtnClick}
		>
			<span className='lang_btn__es'>ES</span>
			<span className='lang_btn__en'>EN</span>
			<div className={`lang_btn__circle ${language ? 'circ-en' : 'circ-es'}`}>
				{language ? 'EN' : 'ES'}
			</div>
			<style jsx>{`
				.lang_btn {
					display: flex;
					width: 51px;
					height: 31px;
					padding-inline: 5px;
					position: relative;
					border-style: none;
					border-radius: 20px;
					outline-style: none;
					justify-content: space-between;
					align-items: center;
					background: none;
					cursor: pointer;
				}
        .lang_btn__es, .lang_btn__en {
          line-height: calc(1rem * 1.6);
          font-size: 1rem;
					font-weight: 700;
          letter-spacing: 0px;
          color: #030303;
        }
				.lang_btn__en {
					color: #fff;
				}
				.lang_btn__circle {
					display: flex;
					width: 28px;
					height: 28px;
					position: absolute;
					z-index: 1;
					border-radius: 50%;
					justify-content: center;
					align-items: center;
					background-color: #fff;
					transition: transform 200ms ease;

          font-weight: 700;
          line-height: calc(1.6rem * 1.6);
          font-size: 1.6rem;
          letter-spacing: 0px;
          color: #030303;
				}
        .bkg-en {
          background-color: #ffe619;
        }
        .circ-en {
          transform: translateX(17px);
          transition: transform 200ms ease;
        }
        .bkg-es {
          background-color: #707070;
        }
        .circ-es {
          transform: translateX(-3px);
          transition: transform 200ms ease;
        }
			`}</style>
		</button>
	)
}

LangBtn.defaultProps = {
	language: true, // true = EN, false = ES
	langBtnClick: () => null,
}

LangBtn.porpTypes = {
	language: PorpTypes.bool.isRequired,
	langBtnClick: PorpTypes.func.isRequired,
}
