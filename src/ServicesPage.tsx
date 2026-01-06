import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import './styles/ServicesPage.css';

export default function ServicesPage() {
	const { theme } = useTheme();

	return (
		<div
			style={{
				minHeight: '100vh',
				background: theme === 'dark' ? '#111827' : '#ffffff',
				transition: 'background 0.3s ease'
			}}
		>
			{/* Services Content */}
			<div style={{ maxWidth: '1400px', margin: '0 auto', padding: '5rem 2rem' }}>
				{/* Two Column Layout */}
				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
					{/* Bulk Fuel Service */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div
							style={{
								background: '#3b82f6',
								color: '#ffffff',
								padding: '0.5rem 1rem',
								display: 'inline-block',
								marginBottom: '1.5rem',
								fontWeight: '600',
								fontSize: '0.9rem',
								letterSpacing: '0.05em'
							}}
						>
							BULK FUEL SERVICE
						</div>
						<h2
							style={{
								fontSize: '2.5rem',
								fontWeight: 'bold',
								color: theme === 'dark' ? '#ffffff' : '#111827',
								marginBottom: '1rem',
								lineHeight: '1.2'
							}}
						>
							Designed to<br />
							meet the needs of our<br />
							customers
						</h2>
						<div
							style={{
								width: '80px',
								height: '4px',
								background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
								marginBottom: '2rem'
							}}
						/>
						<p
							style={{
								color: theme === 'dark' ? '#d1d5db' : '#4b5563',
								fontSize: '1rem',
								lineHeight: '1.8'
							}}
						>
							Our bulk fuel service is designed to meet the needs of customers who require large quantities of fuel. We offer a wide range of fuel types, including diesel, gasoline, and aviation fuel, and our team of experts will work with you to determine the best fuel solution for your specific needs. Our state-of-the-art storage facilities and delivery infrastructure ensure that your fuel supply is always available when you need it, and our competitive pricing and flexible payment options make us the preferred fuel supplier for businesses across various industries. Choose Mwenz Group for reliable, cost-effective, and safe bulk fuel solutions.
						</p>
					</motion.div>

					{/* Delivery Service */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div
							style={{
								background: '#3b82f6',
								color: '#ffffff',
								padding: '0.5rem 1rem',
								display: 'inline-block',
								marginBottom: '1.5rem',
								fontWeight: '600',
								fontSize: '0.9rem',
								letterSpacing: '0.05em'
							}}
						>
							A DELIVERY SERVICE
						</div>
						<h2
							style={{
								fontSize: '2.5rem',
								fontWeight: 'bold',
								color: theme === 'dark' ? '#ffffff' : '#111827',
								marginBottom: '1rem',
								lineHeight: '1.2'
							}}
						>
							Efficient,<br />
							dependable, and safe
						</h2>
						<div
							style={{
								width: '80px',
								height: '4px',
								background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
								marginBottom: '2rem'
							}}
						/>
						<p
							style={{
								color: theme === 'dark' ? '#d1d5db' : '#4b5563',
								fontSize: '1rem',
								lineHeight: '1.8'
							}}
						>
							Mwenz Group's reliable delivery service ensures that our customers receive their bulk fuel and gas on time, every time. We offer both scheduled and on-demand delivery options, and our team of experienced drivers and support staff work together to ensure that your delivery is smooth and hassle-free. We understand the importance of timely deliveries for our customers' operations, which is why we use advanced logistics technology and monitoring systems to track our deliveries and ensure that we meet our commitments. Trust Mwenz Group for efficient, dependable, and safe delivery of your bulk fuel and gas needs.
						</p>
					</motion.div>
				</div>

				{/* Contact Information Bar */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					style={{
						background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
						padding: '3rem 2rem',
						borderRadius: '12px',
						display: 'grid',
						gridTemplateColumns: '1fr 1fr 1fr',
						gap: '2rem',
						color: '#ffffff'
					}}
				>
					<div>
						<h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
							Our Address
						</h3>
						<p style={{ fontSize: '1rem', opacity: 0.95, lineHeight: '1.6' }}>
							Unit 33 Witfield Ridge Complex<br />
							4 Biddulph St, Witfield<br />
							Boksburg, Gauteng 1459
						</p>
					</div>
					<div>
						<h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
							Phone us
						</h3>
						<a
							href="tel:+27785776161"
							style={{
								color: '#ffffff',
								textDecoration: 'none',
								fontSize: '1rem',
								opacity: 0.95,
								display: 'block'
							}}
						>
							+27 78 577 6161
						</a>
					</div>
					<div>
						<h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
							Mail us
						</h3>
						<a
							href="mailto:info@mwenzgroup.co.za"
							style={{
								color: '#ffffff',
								textDecoration: 'none',
								fontSize: '1rem',
								opacity: 0.95,
								display: 'block'
							}}
						>
							info@mwenzgroup.co.za
						</a>
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
