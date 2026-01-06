import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Link } from 'react-router-dom';
import './styles/AboutPage.css';
import aboutImage from './assets/about page.jpg';

export default function AboutPage() {
	const { theme } = useTheme();
	const [openSection, setOpenSection] = useState<string | null>('mission');

	const toggleSection = (section: string) => {
		setOpenSection(openSection === section ? null : section);
	};

	return (
		<div
			style={{
				minHeight: '100vh',
				background: theme === 'dark' ? '#111827' : '#ffffff',
				transition: 'background 0.3s ease'
			}}
		>
			<div style={{ maxWidth: '1400px', margin: '0 auto', padding: '5rem 2rem' }}>
				{/* Main Content Grid */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginBottom: '5rem' }}>
					{/* Left Side - Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1
							style={{
								fontSize: '3rem',
								fontWeight: 'bold',
								color: theme === 'dark' ? '#ffffff' : '#111827',
								marginBottom: '0.5rem',
								lineHeight: '1.1'
							}}
						>
							The Most Reliable
						</h1>
						<h2
							style={{
								fontSize: '2.5rem',
								fontWeight: '300',
								color: theme === 'dark' ? '#d1d5db' : '#4b5563',
								marginBottom: '1.5rem',
								lineHeight: '1.2'
							}}
						>
							Bulk Fuel Supplier In South Africa
						</h2>
						<div
							style={{
								width: '100px',
								height: '4px',
								background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
								marginBottom: '2.5rem'
							}}
						/>

						<div style={{ marginBottom: '2.5rem' }}>
							<p
								style={{
									color: theme === 'dark' ? '#9ca3af' : '#6b7280',
									fontSize: '1rem',
									lineHeight: '1.8',
									marginBottom: '1.5rem'
								}}
							>
								Welcome to Mwenz Group, your reliable source for bulk fuel and gas supplies. We are a trusted supplier of high-quality fuel and gas products, serving customers across [location/region]. Our team is committed to delivering excellent customer service, and we pride ourselves on our timely and efficient delivery services.
							</p>

							<p
								style={{
									color: theme === 'dark' ? '#9ca3af' : '#6b7280',
									fontSize: '1rem',
									lineHeight: '1.8',
									marginBottom: '1.5rem'
								}}
							>
								With years of experience in the industry, we have built strong relationships with leading fuel and gas suppliers, allowing us to provide our customers with the best products at competitive prices. We offer flexible payment and delivery options to suit your needs, and our knowledgeable staff are always available to provide advice and assistance.
							</p>

							<p
								style={{
									color: theme === 'dark' ? '#9ca3af' : '#6b7280',
									fontSize: '1rem',
									lineHeight: '1.8',
									marginBottom: '1.5rem'
								}}
							>
								At Mwenz Group, we are committed to operating sustainably and minimizing our impact on the environment. We adhere to strict safety and environmental standards, and work to reduce our carbon footprint through efficient logistics and responsible practices.
							</p>

							<p
								style={{
									color: theme === 'dark' ? '#9ca3af' : '#6b7280',
									fontSize: '1rem',
									lineHeight: '1.8'
								}}
							>
								Whether you need fuel and gas supplies for your home, business or organization, Mwenz Group is here to help. Contact us today to learn more about our products and services, and how we can meet your fuel and gas needs.
							</p>
						</div>
					</motion.div>

					{/* Right Side - Fuel Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<img
							src={aboutImage}
							alt="Fuel and Oil"
							style={{
								width: '100%',
								maxWidth: '500px',
								height: '500px',
								borderRadius: '20px',
								boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
								objectFit: 'cover'
							}}
						/>
					</motion.div>
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '3rem',
						marginBottom: '5rem'
					}}
				>
					<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
						<Phone
							size={48}
							color="#ef4444"
							style={{
								padding: '0.8rem',
								background: 'rgba(239, 68, 68, 0.1)',
								borderRadius: '12px'
							}}
						/>
						<div>
							<h3
								style={{
									fontSize: '1.3rem',
									fontWeight: 'bold',
									color: theme === 'dark' ? '#ffffff' : '#111827',
									marginBottom: '0.3rem'
								}}
							>
								Call us now
							</h3>
							<a
								href="tel:+27785776161"
								style={{
									color: theme === 'dark' ? '#9ca3af' : '#6b7280',
									textDecoration: 'none',
									fontSize: '1.1rem'
								}}
							>
								+27785776161
							</a>
						</div>
					</div>

					<Link
						to="/contact"
						style={{
							display: 'flex',
							alignItems: 'center',
							gap: '0.5rem',
							padding: '1rem 2.5rem',
							background: '#dc2626',
							color: '#ffffff',
							textDecoration: 'none',
							borderRadius: '8px',
							fontSize: '1.1rem',
							fontWeight: '600',
							transition: 'all 0.3s ease',
							boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = '#b91c1c';
							e.currentTarget.style.transform = 'translateY(-2px)';
							e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.4)';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = '#dc2626';
							e.currentTarget.style.transform = 'translateY(0)';
							e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.3)';
						}}
					>
						CONTACT US
						<ArrowRight size={20} />
					</Link>
				</motion.div>

				{/* Mission and Vision */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					style={{ marginBottom: '3rem' }}
				>
					{/* Our Mission */}
					<div
						style={{
							marginBottom: '1.5rem',
							border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
							borderRadius: '12px',
							overflow: 'hidden',
							background: theme === 'dark' ? '#1f2937' : '#ffffff',
							boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
						}}
					>
						<button
							onClick={() => toggleSection('mission')}
							style={{
								width: '100%',
								padding: '1.5rem 2rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								background: 'transparent',
								border: 'none',
								cursor: 'pointer',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#374151' : '#f9fafb';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = 'transparent';
							}}
						>
							<h3
								style={{
									fontSize: '1.3rem',
									fontWeight: '600',
									color: '#ef4444',
									margin: 0
								}}
							>
								Our mission
							</h3>
							<ChevronDown
								size={24}
								color="#ef4444"
								style={{
									transform: openSection === 'mission' ? 'rotate(180deg)' : 'rotate(0deg)',
									transition: 'transform 0.3s ease'
								}}
							/>
						</button>

						<div
							style={{
								maxHeight: openSection === 'mission' ? '500px' : '0',
								overflow: 'hidden',
								transition: 'max-height 0.3s ease'
							}}
						>
							<div
								style={{
									padding: '0 2rem 2rem 2rem',
									color: theme === 'dark' ? '#d1d5db' : '#4b5563',
									lineHeight: '1.8',
									fontSize: '1rem'
								}}
							>
								Our mission is to provide our customers with reliable, cost-effective, and sustainable fuel and gas solutions. We are committed to delivering exceptional service, and building long-term relationships with our customers based on trust and mutual respect. We strive to operate with integrity and transparency, and to make a positive impact on the communities we serve. Our goal is to be a leader in the fuel and gas industry, driving innovation and excellence through continuous improvement and a dedication to quality.
							</div>
						</div>
					</div>

					{/* Our Vision */}
					<div
						style={{
							border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
							borderRadius: '12px',
							overflow: 'hidden',
							background: theme === 'dark' ? '#1f2937' : '#ffffff',
							boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
						}}
					>
						<button
							onClick={() => toggleSection('vision')}
							style={{
								width: '100%',
								padding: '1.5rem 2rem',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								background: 'transparent',
								border: 'none',
								cursor: 'pointer',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#374151' : '#f9fafb';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = 'transparent';
							}}
						>
							<h3
								style={{
									fontSize: '1.3rem',
									fontWeight: '600',
									color: '#ef4444',
									margin: 0
								}}
							>
								Our vision
							</h3>
							<ChevronDown
								size={24}
								color="#ef4444"
								style={{
									transform: openSection === 'vision' ? 'rotate(180deg)' : 'rotate(0deg)',
									transition: 'transform 0.3s ease'
								}}
							/>
						</button>

						<div
							style={{
								maxHeight: openSection === 'vision' ? '500px' : '0',
								overflow: 'hidden',
								transition: 'max-height 0.3s ease'
							}}
						>
							<div
								style={{
									padding: '0 2rem 2rem 2rem',
									color: theme === 'dark' ? '#d1d5db' : '#4b5563',
									lineHeight: '1.8',
									fontSize: '1rem'
								}}
							>
								Our vision is to be the leading provider of bulk fuel and gas solutions in South Africa, recognized for our commitment to quality, reliability, and sustainability. We aim to set the standard for excellence in the industry through innovative practices, exceptional customer service, and responsible environmental stewardship.
							</div>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Orange Footer Bar */}
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
