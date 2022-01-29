import { Fragment } from 'react'
import Image from 'next/image'
import img1 from '@public/slider/1.webp'
import img2 from '@public/slider/1a.webp'
import img3 from '@public/slider/2.webp'
import img4 from '@public/slider/2a.webp'
import img5 from '@public/slider/3.webp'
import img6 from '@public/slider/3a.webp'
import img7 from '@public/slider/4.webp'
import img8 from '@public/slider/4a.webp'
import img9 from '@public/slider/5.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

// import Swiper core and required modules
import SwiperCore, { EffectCards, Keyboard, Autoplay, A11y } from 'swiper'

// install Swiper modules
SwiperCore.use([ EffectCards, Keyboard, Autoplay ])

export default function SliderLanding() {
	return (
		<Fragment>
			<Swiper
        effect={'cards'}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        speed={600}
        modules={[EffectCards, A11y]}
        a11y={{
          enabled: true,
        }}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className='mySwiper'
        >
				<SwiperSlide>
					<Image src={img1} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img2} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img3} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img4} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img5} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img6} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img7} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img8} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
				<SwiperSlide>
					<Image src={img9} width={540} height={540} placeholder='blur' alt='Dollar Symphony Group Publicity Image'/>
				</SwiperSlide>
			</Swiper>
		</Fragment>
	)
}
