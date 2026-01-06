import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { Truck, Tractor, Hammer, Building, Factory } from 'lucide-react';
import trucksImg from './assets/trucks.jpg';
import farmingImg from './assets/farming.jpg';
import miningImg from './assets/mining.jpg';
import constructionImg from './assets/construction pic.jpg';
import manufacturingImg from './assets/manufacturing.jpg';

const industries = [
	{
		icon: Truck,
		name: 'Transport and Logistics',
		description: 'Our fuel solutions ensure your transport operations perform with maximum efficiency thanks to our policy of NO COMPROMISE on fuel quality. We understand the critical role that reliable fuel supply plays in keeping your fleet on the road. With our bulk diesel and petrol delivery services, competitive pricing, and flexible payment options, we are the preferred partner for transport companies across South Africa.',
		image: trucksImg,
		benefits: [
			'On-time bulk fuel delivery',
			'Premium quality diesel and petrol',
			'Flexible payment terms',
			'24/7 emergency supply'
		]
	},
	{
		icon: Tractor,
		name: 'Agriculture',
		description: 'We\'ve been fuelling the growth of the agriculture sector with quality fuels that improve performance and extend the operational life of equipment. Our agricultural fuel solutions are designed to meet the demanding requirements of modern farming operations, ensuring your machinery runs efficiently during critical planting and harvesting seasons.',
		image: farmingImg,
		benefits: [
			'Farm equipment optimization',
			'Seasonal bulk supply contracts',
			'Reduced equipment downtime',
			'Cost-effective fuel solutions'
		]
	},
	{
		icon: Hammer,
		name: 'Mining',
		description: 'With our on-site delivery systems and uncompromising service levels, we deliver maximum efficiency for the mining sector\'s energy requirements. We understand that mining operations require continuous fuel supply to maintain productivity. Our dedicated mining fuel services ensure your operations never experience fuel-related delays.',
		image: miningImg,
		benefits: [
			'On-site fuel storage solutions',
			'High-volume supply capacity',
			'Strict safety compliance',
			'Remote location delivery'
		]
	},
	{
		icon: Building,
		name: 'Construction',
		description: 'Our strict delivery timelines allow the construction sector to deliver on theirs with efficient service and top quality fuel products. Construction projects operate on tight schedules, and we ensure your heavy machinery and equipment have the fuel they need, when they need it, to keep projects on track.',
		image: constructionImg,
		benefits: [
			'Project-based fuel planning',
			'Heavy machinery fuel supply',
			'Site delivery coordination',
			'Flexible scheduling options'
		]
	},
	{
		icon: Factory,
		name: 'Manufacturing',
		description: 'Our premium fuels ensure that the manufacturing industry are able to distribute their goods efficiently in order to meet their own delivery schedules. We provide consistent, high-quality fuel supply to power your manufacturing operations and support your logistics fleet, ensuring seamless production and distribution.',
		image: manufacturingImg,
		benefits: [
			'Consistent fuel quality',
			'Large volume capacity',
			'Just-in-time delivery',
			'Long-term supply contracts'
		]
	}
];

export default function IndustriesPage() {
	const { theme } = useTheme();

	return (
		<div
			style={{
				minHeight: '100vh',
				background: theme === 'dark' ? '#111827' : '#ffffff',
				transition: 'background 0.3s ease'
			}}
		>
			{/* Hero Section */}
			<div style={{
				background: theme === 'dark'
					? 'linear-gradient(135deg, #1e3a8a 0%, #111827 100%)'
					: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
				padding: '4rem 2rem',
				textAlign: 'center',
				color: '#ffffff'
			}}>
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					style={{
						fontSize: 'clamp(2rem, 5vw, 3.5rem)',
						fontWeight: 'bold',
						marginBottom: '1rem'
					}}
				>
					Industries We Serve
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					style={{
						fontSize: 'clamp(1rem, 2vw, 1.25rem)',
						maxWidth: '800px',
						margin: '0 auto',
						opacity: 0.95
					}}
				>
					Powering South Africa's key industries with reliable, quality fuel supply
				</motion.p>
			</div>

			{/* Industries Content */}
			<div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
				{industries.map((industry, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: index * 0.1 }}
						viewport={{ once: true }}
						style={{
							display: 'grid',
							gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
							gap: '3rem',
							marginBottom: '5rem',
							alignItems: 'center'
						}}
						className="industry-section"
					>
						{/* Image */}
						<div
							style={{
								order: index % 2 === 0 ? 1 : 2,
								borderRadius: '20px',
								overflow: 'hidden',
								boxShadow: theme === 'dark' ? '0 20px 50px rgba(0,0,0,0.5)' : '0 20px 50px rgba(0,0,0,0.15)'
							}}
						>
							<img
								src={industry.image}
								alt={industry.name}
								style={{
									width: '100%',
									height: '400px',
									objectFit: 'cover',
									display: 'block',
									transition: 'transform 0.3s ease'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'scale(1.05)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'scale(1)';
								}}
							/>
						</div>

						{/* Content */}
						<div style={{ order: index % 2 === 0 ? 2 : 1 }}>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								marginBottom: '1.5rem'
							}}>
								<div style={{
									background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
									borderRadius: '12px',
									padding: '1rem',
									display: 'inline-flex'
								}}>
									<industry.icon size={32} color="#ffffff" />
								</div>
								<h2 style={{
									fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
									fontWeight: 'bold',
									color: theme === 'dark' ? '#ffffff' : '#111827',
									margin: 0
								}}>
									{industry.name}
								</h2>
							</div>

							<p style={{
								color: theme === 'dark' ? '#d1d5db' : '#4b5563',
								fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
								lineHeight: '1.8',
								marginBottom: '2rem'
							}}>
								{industry.description}
							</p>

							<h3 style={{
								color: theme === 'dark' ? '#60a5fa' : '#1e40af',
								fontSize: 'clamp(1rem, 2vw, 1.25rem)',
								fontWeight: '600',
								marginBottom: '1rem'
							}}>
								Key Benefits:
							</h3>

							<ul style={{
								listStyle: 'none',
								padding: 0,
								margin: 0
							}}>
								{industry.benefits.map((benefit, i) => (
									<li
										key={i}
										style={{
											display: 'flex',
											alignItems: 'center',
											gap: '0.75rem',
											marginBottom: '0.75rem',
											color: theme === 'dark' ? '#d1d5db' : '#374151',
											fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
										}}
									>
										<div style={{
											width: '8px',
											height: '8px',
											borderRadius: '50%',
											background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
											flexShrink: 0
										}} />
										{benefit}
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				))}
			</div>

			{/* Contact CTA */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				style={{
					background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
					padding: '4rem 2rem',
					textAlign: 'center',
					color: '#ffffff'
				}}
			>
				<h2 style={{
					fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
					fontWeight: 'bold',
					marginBottom: '1rem'
				}}>
					Ready to Partner With Us?
				</h2>
				<p style={{
					fontSize: 'clamp(1rem, 2vw, 1.25rem)',
					marginBottom: '2rem',
					opacity: 0.95
				}}>
					Contact us today to discuss your fuel supply needs
				</p>
				<a
					href="/mwenz-group/contact"
					style={{
						display: 'inline-block',
						background: '#ffffff',
						color: '#ef4444',
						padding: '1rem 2.5rem',
						borderRadius: '12px',
						fontWeight: '600',
						fontSize: 'clamp(1rem, 2vw, 1.1rem)',
						textDecoration: 'none',
						transition: 'all 0.3s ease',
						boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
					}}
					onMouseEnter={(e) => {
						e.currentTarget.style.transform = 'translateY(-3px)';
						e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
					}}
					onMouseLeave={(e) => {
						e.currentTarget.style.transform = 'translateY(0)';
						e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
					}}
				>
					Get In Touch
				</a>
			</motion.div>

			{/* Footer Bar */}
			<div
				style={{
					background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
					height: '8px',
					width: '100%'
				}}
			/>
		</div>
	);
}
