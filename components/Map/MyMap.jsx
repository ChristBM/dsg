import { useState } from 'react'
import Image from 'next/image'
import { Map, Marker, ZoomControl, Overlay } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import overlay from '@public/overlay.png'

export default function MyMap() {
	const [ center, setCenter ] = useState([ 36.14464220380252, -115.13412456626513 ])
	const [ zoom, setZoom ] = useState(11)
	return (
		<div className='map_cont'>
			<Map
				provider={osm}
				height={300}
				center={center}
				zoom={zoom}
				onBoundsChanged={({ center, zoom }) => {
					setCenter(center)
					setZoom(zoom)
				}}
			>
				<Overlay anchor={[ 36.14464220380252, -115.13412456626513 ]} offset={[ 20, 10 ]}>
					<Image
						src={overlay}
						width={50}
						height={50}
						alt='1380 E Sahara Ave Suite B Las Vegas NV 89104'
						title='1380 E Sahara Ave Suite B Las Vegas NV 89104'
					/>
				</Overlay>
				<ZoomControl />
			</Map>
			<style jsx>{`
				.map_cont {
					display: flex;
					width: 100%;
					height: auto;
					padding-inline: 30px;
					justify-content: center;
					align-items: center;
				}
				@media screen and (min-width: 1050px) {
					.map_cont {
						display: flex;
						width: 800px;
						height: auto;
						padding-inline: 30px;
						justify-content: center;
						align-items: center;
					}
				}
			`}</style>
		</div>
	)
}
