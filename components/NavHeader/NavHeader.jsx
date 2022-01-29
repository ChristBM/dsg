import Link from "next/link"

export default function NavHeader({language}) {
	return (
		<nav className='navheader'>
			<ul className='navheader__list'>
				<li className='navheader__li'>
          <Link href='/'>
            <a className="ancor">{language ? 'Home' : 'Inicio'}</a>
          </Link>
					<span className='li_underline' />
				</li>
				<li className='navheader__li'>
          <Link href='/services'>
            <a className="ancor">{language ? 'Services' : 'Servicios'}</a>
          </Link>
					<span className='li_underline' />
				</li>
				<li className='navheader__li'>
          <Link href='/updates'>
            <a className="ancor">{language ? 'Updates' : 'Novedades'}</a>
          </Link>
					<span className='li_underline' />
				</li>
				<li className='navheader__li'>
          <Link href='/gallery'>
            <a className="ancor">{language ? 'Gallery' : 'Galería'}</a>
          </Link>
					<span className='li_underline' />
				</li>
				<li className='navheader__li'>
          <Link href='/gallery'>
            <a className="ancor">{language ? 'About Us' : 'Nosotros'}</a>
          </Link>
					<span className='li_underline' />
				</li>
			</ul>
			<style jsx>{`
				.navheader {
					display: flex;
					width: 400px;
					height: 100%;
					justify-content: space-between;
					align-items: center;
				}
				.navheader__list {
					display: flex;
					width: 100%;
					height: 100%;
					justify-content: space-evenly;
					align-items: center;
					list-style: none;
				}
				.navheader__li {
          width: auto;
					color: #fff;
					font-size: 1.6rem;
					font-weight: 500;
					cursor: pointer;
				}
				.li_underline {
					display: block;
					width: 100%;
					height: 2px;
          padding-block-start: 2px;
					border-block-end: 2px solid #fff;
					transform: scaleX(0);
					transition: transform 200ms ease-out;
				}
				.navheader__li:hover .li_underline {
					transform: scaleX(1);
					transition: transform 300ms ease-in;
				}
        .ancor {
          text-decoration: none;
        }
			`}</style>
		</nav>
	)
}
