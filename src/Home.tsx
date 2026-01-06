import Hero from "./Hero";
import Services from "./service";
import About from "./About";
import Contact from "./contact";
import Footer from "./footer";
import StatsCounter from "./components/StatsCounter";
import IndustriesSection from "./components/IndustriesSection";
import FloatingCTA from "./components/FloatingCTA";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";
import type { JSX } from "react/jsx-dev-runtime";

function Testimonials() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { theme } = useTheme();
	const testimonials = [
		{ text: "Reliable fuel delivery service. Our fleet operations run smoothly thanks to their consistent quality and on-time deliveries.", author: "Thabo Mkhize", company: "Mkhize Transport & Logistics", avatar: "https://ui-avatars.com/api/?name=MT&background=1e40af&color=fff&size=128&bold=true" },
		{ text: "Professional team and excellent service. They understand the demands of the construction industry and always deliver on schedule.", author: "Sarah van der Merwe", company: "ProBuild Construction SA", avatar: "https://ui-avatars.com/api/?name=PB&background=dc2626&color=fff&size=128&bold=true" },
		{ text: "Quality fuel at competitive prices. Our farming operations depend on reliable suppliers like Mwenz Group.", author: "Pieter Botha", company: "Botha Agricultural Services", avatar: "https://ui-avatars.com/api/?name=BA&background=16a34a&color=fff&size=128&bold=true" },
		{ text: "Exceptional customer service and flexible delivery options. They've been our trusted fuel partner for over 3 years.", author: "Nomsa Dlamini", company: "Dlamini Mining Corporation", avatar: "https://ui-avatars.com/api/?name=DM&background=7c3aed&color=fff&size=128&bold=true" },
		{ text: "Their bulk fuel solutions have helped us reduce costs significantly while maintaining quality standards.", author: "Johan Pretorius", company: "Pretorius Haulage", avatar: "https://ui-avatars.com/api/?name=PH&background=ea580c&color=fff&size=128&bold=true" },
		{ text: "Outstanding service and transparency in pricing. Mwenz Group is our go-to fuel supplier for all our sites.", author: "Zanele Khumalo", company: "Khumalo Earthmoving", avatar: "https://ui-avatars.com/api/?name=KE&background=0891b2&color=fff&size=128&bold=true" },
		{ text: "Fast, reliable, and professional. They handle our emergency fuel needs with urgency and care.", author: "David van Niekerk", company: "Van Niekerk Industries", avatar: "https://ui-avatars.com/api/?name=VN&background=4f46e5&color=fff&size=128&bold=true" },
		{ text: "Great partnership with Mwenz Group. Their fuel quality has improved our equipment performance noticeably.", author: "Lerato Molefe", company: "Molefe Logistics Group", avatar: "https://ui-avatars.com/api/?name=ML&background=be123c&color=fff&size=128&bold=true" },
	];

	const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		let animationFrameId: number;
		let lastTime = 0;
		const fps = 30; // Limit to 30fps instead of 60fps for better performance
		const interval = 1000 / fps;

		const scroll = (currentTime: number) => {
			if (!container) return;

			const deltaTime = currentTime - lastTime;

			if (deltaTime >= interval) {
				if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
					container.scrollLeft = container.scrollWidth / 3;
				} else {
					container.scrollLeft += 0.5;
				}
				lastTime = currentTime - (deltaTime % interval);
			}

			animationFrameId = requestAnimationFrame(scroll);
		};
		animationFrameId = requestAnimationFrame(scroll);
		return () => cancelAnimationFrame(animationFrameId);
	}, []);

	return (
		<section className="testimonials py-12" style={{
			background: theme === 'dark' ? '#1f2937' : '#eff6ff'
		}}>
			<h2 className="text-2xl font-bold text-center mb-8" style={{
				color: theme === 'dark' ? '#ffffff' : '#111827'
			}}>What Our Clients Say</h2>
			<div
			className="testimonials-carousel flex gap-6 overflow-hidden px-4 no-scrollbar"
				ref={containerRef}
				style={{ scrollBehavior: "auto" }}
			>
						{infiniteTestimonials.map((t, i) => (
							<div
								key={i}
								className="testimonial p-6 rounded-lg shadow text-center min-w-[280px] max-w-xs flex-shrink-0"
								style={{
									background: theme === 'dark' ? '#374151' : '#ffffff'
								}}
							>
									<img
										src={t.avatar}
										alt={t.author}
										  className="mx-auto mb-3 rounded-full w-16 h-16 object-cover border-2 border-blue-300"
										loading="lazy"
									/>
							<p className="mb-4" style={{
								color: theme === 'dark' ? '#d1d5db' : '#374151'
							}}>"{t.text}"</p>
							<div>
								<span className="font-semibold block" style={{
									color: theme === 'dark' ? '#f3f4f6' : '#111827'
								}}>{t.author}</span>
								<span className="text-sm" style={{
									color: theme === 'dark' ? '#9ca3af' : '#6b7280'
								}}>{t.company}</span>
							</div>
						</div>
					))}
			</div>
		</section>
	);
}

export default function Home(): JSX.Element {
	return (
		<main className="flex-1">
			<section id="hero"><Hero /></section>
			<div style={{ marginBottom: '4rem' }}><StatsCounter /></div>
			<section id="services" style={{ marginBottom: '4rem' }}><Services /></section>
			<div style={{ marginBottom: '4rem' }}><IndustriesSection /></div>
			<section id="about" style={{ marginBottom: '4rem' }}><About /></section>
			<div style={{ marginBottom: '4rem' }}><Testimonials /></div>
			<section id="contact"><Contact /></section>
			<Footer />
			<FloatingCTA />
		</main>
	);
}
