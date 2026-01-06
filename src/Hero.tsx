import "./styles/Hero.css";


import "./styles/SlideshowBg.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import type { JSX } from "react/jsx-dev-runtime";
import ParticleBackground from "./components/ParticleBackground";
import FuelPriceWidget from "./components/FuelPriceWidget";



const FUEL_IMAGES = [
	"https://www.shutterstock.com/image-photo/processed-collage-golden-yellow-oil-600nw-2465957583.jpg",
	"https://92ec91f37c.clvaw-cdnwnd.com/3271786f218810ac4b3af074df2a0f99/200000054-07fe907fea/360_F_625624229_qyMzWnLnu0LeLtelBiMUcIHZwQvQK0FK.jpeg?ph=92ec91f37c",
	"https://www.supplychainbrain.com/ext/resources/2025/01/27/FUEL-OIL-DELIVERY-iStock-gilaxia-694912788.jpg?height=635&t=1738195169&width=1200",
	"https://mwenzgroup.co.za/wp-content/uploads/2023/04/Gas-Tank-860x493-1.jpeg"
];

function BgSlideshow() {
	const [idx, setIdx] = useState(0);
	React.useEffect(() => {
		const interval = setInterval(() => {
			setIdx(i => (i + 1) % FUEL_IMAGES.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="bg-slideshow">
			{FUEL_IMAGES.map((src, i) => (
				<img
					key={src}
					src={src}
					className={i === idx ? "active" : ""}
					alt="fuel background"
					aria-hidden={i !== idx}
				/>
			))}
		</div>
	);
}

export default function Hero(): JSX.Element {
	return (
		<section className="hero" style={{ position: "relative", overflow: "hidden" }}>
			<BgSlideshow />
			<div className="hero-overlay" />
			<ParticleBackground />
			<FuelPriceWidget />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="hero-content"
				style={{ position: 'relative', zIndex: 10 }}
			>
				<h1>Reliable Bulk Fuel & Gas Delivery</h1>
				<p>Trusted nationwide delivery with top safety standards.</p>
								<div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
									<a
										className="hero-button"
										href="https://wa.me/27785776161"
										target="_blank"
										rel="noopener noreferrer"
										style={{ display: 'inline-block', textDecoration: 'none' }}
									>
										Request a Quote
									</a>
									<a
										className="hero-button hero-contact"
										href="#contact"
										style={{ display: 'inline-block', textDecoration: 'none' }}
									>
										Contact Us
									</a>
								</div>
			</motion.div>
		</section>
	);
}