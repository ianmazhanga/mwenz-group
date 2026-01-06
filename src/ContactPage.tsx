import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';
import './styles/ContactPage.css';

export default function ContactPage() {
	const { theme } = useTheme();
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Form submitted:', formData);
		// You can add your form submission logic here
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div
			style={{
				minHeight: '100vh',
				background: theme === 'dark' ? '#111827' : '#f9fafb',
				padding: '5rem 1rem',
				transition: 'background 0.3s ease'
			}}
		>
			<div style={{ maxWidth: '1400px', margin: '0 auto' }}>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					style={{ marginBottom: '3rem' }}
				>
					<p
						style={{
							color: '#ef4444',
							fontWeight: '600',
							fontSize: '0.9rem',
							letterSpacing: '0.1em',
							marginBottom: '0.5rem',
							textTransform: 'uppercase'
						}}
					>
						GET IN TOUCH WITH US
					</p>
					<h1
						style={{
							fontSize: '3rem',
							fontWeight: 'bold',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							marginBottom: '0.5rem'
						}}
					>
						You can contact us
					</h1>
					<p
						style={{
							fontSize: '2rem',
							color: theme === 'dark' ? '#9ca3af' : '#4b5563',
							fontWeight: '300'
						}}
					>
						if you have any queries
					</p>
					<div
						style={{
							width: '100px',
							height: '4px',
							background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
							marginTop: '1rem'
						}}
					/>
				</motion.div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
								<input
									type="text"
									name="name"
									placeholder="Name"
									value={formData.name}
									onChange={handleChange}
									required
									style={{
										padding: '1rem 1.5rem',
										borderRadius: '8px',
										border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
										background: theme === 'dark' ? '#1f2937' : '#ffffff',
										color: theme === 'dark' ? '#f3f4f6' : '#111827',
										fontSize: '1rem',
										outline: 'none',
										transition: 'all 0.3s ease'
									}}
									onFocus={(e) => {
										e.target.style.borderColor = '#3b82f6';
										e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
									}}
									onBlur={(e) => {
										e.target.style.borderColor = theme === 'dark' ? '#374151' : '#e5e7eb';
										e.target.style.boxShadow = 'none';
									}}
								/>
								<input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleChange}
									required
									style={{
										padding: '1rem 1.5rem',
										borderRadius: '8px',
										border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
										background: theme === 'dark' ? '#1f2937' : '#ffffff',
										color: theme === 'dark' ? '#f3f4f6' : '#111827',
										fontSize: '1rem',
										outline: 'none',
										transition: 'all 0.3s ease'
									}}
									onFocus={(e) => {
										e.target.style.borderColor = '#3b82f6';
										e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
									}}
									onBlur={(e) => {
										e.target.style.borderColor = theme === 'dark' ? '#374151' : '#e5e7eb';
										e.target.style.boxShadow = 'none';
									}}
								/>
							</div>

							<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
								<input
									type="tel"
									name="phone"
									placeholder="Phone"
									value={formData.phone}
									onChange={handleChange}
									style={{
										padding: '1rem 1.5rem',
										borderRadius: '8px',
										border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
										background: theme === 'dark' ? '#1f2937' : '#ffffff',
										color: theme === 'dark' ? '#f3f4f6' : '#111827',
										fontSize: '1rem',
										outline: 'none',
										transition: 'all 0.3s ease'
									}}
									onFocus={(e) => {
										e.target.style.borderColor = '#3b82f6';
										e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
									}}
									onBlur={(e) => {
										e.target.style.borderColor = theme === 'dark' ? '#374151' : '#e5e7eb';
										e.target.style.boxShadow = 'none';
									}}
								/>
								<select
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									style={{
										padding: '1rem 1.5rem',
										borderRadius: '8px',
										border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
										background: theme === 'dark' ? '#1f2937' : '#ffffff',
										color: theme === 'dark' ? '#f3f4f6' : '#6b7280',
										fontSize: '1rem',
										outline: 'none',
										transition: 'all 0.3s ease',
										cursor: 'pointer'
									}}
									onFocus={(e) => {
										e.target.style.borderColor = '#3b82f6';
										e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
									}}
									onBlur={(e) => {
										e.target.style.borderColor = theme === 'dark' ? '#374151' : '#e5e7eb';
										e.target.style.boxShadow = 'none';
									}}
								>
									<option value="">Contact subject</option>
									<option value="general">General Inquiry</option>
									<option value="quote">Request a Quote</option>
									<option value="delivery">Delivery Information</option>
									<option value="support">Customer Support</option>
									<option value="partnership">Partnership Opportunity</option>
								</select>
							</div>

							<textarea
								name="message"
								placeholder="Case Description..."
								value={formData.message}
								onChange={handleChange}
								required
								rows={8}
								style={{
									padding: '1rem 1.5rem',
									borderRadius: '8px',
									border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
									background: theme === 'dark' ? '#1f2937' : '#ffffff',
									color: theme === 'dark' ? '#f3f4f6' : '#111827',
									fontSize: '1rem',
									outline: 'none',
									transition: 'all 0.3s ease',
									resize: 'vertical',
									fontFamily: 'inherit'
								}}
								onFocus={(e) => {
									e.target.style.borderColor = '#3b82f6';
									e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
								}}
								onBlur={(e) => {
									e.target.style.borderColor = theme === 'dark' ? '#374151' : '#e5e7eb';
									e.target.style.boxShadow = 'none';
								}}
							/>

							<button
								type="submit"
								style={{
									padding: '1rem 3rem',
									background: 'linear-gradient(90deg, #ef4444 0%, #f97316 100%)',
									color: '#ffffff',
									border: 'none',
									borderRadius: '8px',
									fontSize: '1.1rem',
									fontWeight: '600',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
									boxShadow: '0 4px 15px rgba(239, 68, 68, 0.3)',
									alignSelf: 'flex-start'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-2px)';
									e.currentTarget.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 4px 15px rgba(239, 68, 68, 0.3)';
								}}
							>
								Submit Now
							</button>
						</form>
					</motion.div>

					{/* Contact Information Card */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						style={{
							background: 'linear-gradient(135deg, #ef4444 0%, #f97316 100%)',
							borderRadius: '20px',
							padding: '3rem',
							color: '#ffffff',
							boxShadow: '0 10px 40px rgba(239, 68, 68, 0.3)',
							minHeight: '500px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							gap: '2.5rem'
						}}
					>
						<div>
							<h2
								style={{
									fontSize: '2rem',
									fontWeight: 'bold',
									marginBottom: '2.5rem'
								}}
							>
								South Africa
							</h2>

							<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
								<div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
									<MapPin size={24} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
									<div>
										<p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
											Unit 33 Witfield Ridge Complex 4, Biddulph<br />
											Witfield, Boksburg, Gauteng 1459
										</p>
									</div>
								</div>

								<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
									<Phone size={24} style={{ flexShrink: 0 }} />
									<a
										href="tel:+27785776161"
										style={{
											color: '#ffffff',
											textDecoration: 'none',
											fontSize: '1.1rem',
											fontWeight: '500'
										}}
									>
										+27785776161
									</a>
								</div>

								<div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
									<Mail size={24} style={{ flexShrink: 0 }} />
									<a
										href="mailto:info@mwenzgroup.co.za"
										style={{
											color: '#ffffff',
											textDecoration: 'none',
											fontSize: '1.1rem',
											fontWeight: '500'
										}}
									>
										info@mwenzgroup.co.za
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
