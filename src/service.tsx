
import "./styles/Services.css";


import { Fuel, Clock, Truck } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";
import { useTheme } from "./ThemeContext";
import shield from "./assets/safety.jpg";
import fuel from "./assets/fuel.jpg";

type Service = {
	icon: FC<{ className?: string }>;
	title: string;
	desc: string;
	img: string;
};


export default function Services() {
		const { theme } = useTheme();
		const services: Service[] = [
			{
				icon: Fuel,
				title: "Bulk Fuel Delivery",
				desc: "Reliable diesel and petrol delivery to your location, any time you need it.",
				   img: fuel
			},
			{
				icon: Clock,
				title: "24/7 Emergency Supply",
				desc: "Round-the-clock emergency fuel delivery service for urgent requirements.",
				   img: shield
			},
			{
				icon: Truck,
				title: "Fleet Fuel Management",
				desc: "Comprehensive fuel supply solutions for commercial fleets and industrial operations.",
				   img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200'
			}
		];

		const [hovered, setHovered] = useState<number | null>(null);
		const [lastHovered, setLastHovered] = useState<number>(0);

		const handleMouseEnter = (idx: number) => {
			setHovered(idx);
			setLastHovered(idx);
		};

		   return (
			   <section
				   className="services"
				   style={{
					   position: "relative",
					   background: `url(${services[hovered !== null ? hovered : lastHovered].img}) center/cover no-repeat`,
					   transition: "background 0.3s"
				   }}
			   >

				{hovered !== null && (
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							background: "rgba(0,0,0,0.35)",
							zIndex: 1,
							pointerEvents: "none",
							transition: "background 0.3s"
						}}
					/>
				)}
				<h2 style={{
					position: "relative",
					zIndex: 2,
					color: theme === 'dark' ? '#ffffff' : '#111827'
				}}>Our Services</h2>
				<div className="services-grid" style={{ position: "relative", zIndex: 2 }}>
					{services.map((service, idx) => (
						<div
							key={idx}
							className="service-card"
							onMouseEnter={() => handleMouseEnter(idx)}
							onMouseLeave={() => setHovered(null)}
							style={{
								position: "relative",
								overflow: "hidden"
							}}
						>
							<div
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									backgroundImage: `url(${service.img})`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									opacity: hovered === idx ? 0.5 : 0.15,
									transform: hovered === idx ? 'scale(1.1)' : 'scale(1)',
									transition: "all 0.4s ease",
									zIndex: 0
								}}
								className="service-card-bg"
							/>
							<div className="service-content">
								<service.icon className="service-icon" />
								<h3 style={{
									color: theme === 'dark' ? '#ffffff' : '#111827'
								}}>{service.title}</h3>
								<p style={{
									color: theme === 'dark' ? '#d1d5db' : '#374151'
								}}>{service.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		);
}