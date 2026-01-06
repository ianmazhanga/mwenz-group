
import "./styles/Contact.css";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTheme } from "./ThemeContext";
import type { JSX } from "react/jsx-dev-runtime";


export default function Contact(): JSX.Element {
	const { theme } = useTheme();

return (
	<section
		className="contact"
		style={{
			position: 'relative',
			minHeight: '90vh',
			padding: '5rem 1rem',
			background: theme === 'dark' ? '#111827' : '#ffffff',
			transition: 'background 0.3s ease'
		}}
	>
		<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				style={{
					background: theme === 'dark' ? '#1f2937' : '#f9fafb',
					padding: '3rem 2rem',
					borderRadius: '20px',
					marginBottom: '3rem',
					transition: 'background 0.3s ease'
				}}
			>
				<h2 style={{
					textAlign: 'center',
					color: theme === 'dark' ? '#ffffff' : '#111827',
					fontSize: '3rem',
					fontWeight: 'bold',
					marginBottom: '1rem'
				}}>
					Get in Touch
				</h2>
				<p style={{ textAlign: 'center', color: theme === 'dark' ? '#d1d5db' : '#6b7280', fontSize: '1.1rem', marginBottom: '0' }}>
					We're here to help with all your fuel delivery needs
				</p>
			</motion.div>

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'stretch' }}>
				{/* Contact Info */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					style={{
						background: theme === 'dark' ? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
						borderRadius: '20px',
						padding: '2.5rem',
						boxShadow: theme === 'dark' ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.1)',
						border: theme === 'dark' ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(59, 130, 246, 0.1)',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
				>
					<div>
						<h3 style={{
							color: theme === 'dark' ? '#60a5fa' : '#1e3a8a',
							marginBottom: '2rem',
							fontSize: '1.8rem',
							fontWeight: 'bold'
						}}>
							Contact Information
						</h3>

						<div style={{ marginBottom: '2rem' }}>
							<div style={{
								display: 'flex',
								alignItems: 'flex-start',
								gap: '1rem',
								padding: '1rem',
								background: theme === 'dark' ? '#374151' : '#f0f9ff',
								borderRadius: '12px',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#4b5563' : '#dbeafe';
								e.currentTarget.style.transform = 'translateX(5px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#374151' : '#f0f9ff';
								e.currentTarget.style.transform = 'translateX(0)';
							}}
							>
								<div style={{
									background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
									<MapPin size={24} color="#ffffff" />
								</div>
								<div>
									<h4 style={{ color: theme === 'dark' ? '#60a5fa' : '#1e3a8a', fontSize: '1rem', marginBottom: '0.3rem', fontWeight: '600' }}>Address</h4>
									<p style={{ color: theme === 'dark' ? '#d1d5db' : '#4b5563', lineHeight: '1.6' }}>
										Unit 33 Witfield Ridge Complex<br/>
										4 Biddulph St, Witfield<br/>
										Boksburg, Gauteng 1459
									</p>
								</div>
							</div>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								padding: '1rem',
								background: theme === 'dark' ? '#374151' : '#f0f9ff',
								borderRadius: '12px',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#4b5563' : '#dbeafe';
								e.currentTarget.style.transform = 'translateX(5px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#374151' : '#f0f9ff';
								e.currentTarget.style.transform = 'translateX(0)';
							}}
							>
								<div style={{
									background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
									<Phone size={24} color="#ffffff" />
								</div>
								<div>
									<h4 style={{ color: theme === 'dark' ? '#60a5fa' : '#1e3a8a', fontSize: '1rem', marginBottom: '0.3rem', fontWeight: '600' }}>Phone</h4>
									<a href="tel:+27785776161" style={{ color: theme === 'dark' ? '#d1d5db' : '#4b5563', textDecoration: 'none', fontSize: '1.1rem' }}>
										+27 78 577 6161
									</a>
								</div>
							</div>
						</div>

						<div style={{ marginBottom: '2rem' }}>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								gap: '1rem',
								padding: '1rem',
								background: theme === 'dark' ? '#374151' : '#f0f9ff',
								borderRadius: '12px',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#4b5563' : '#dbeafe';
								e.currentTarget.style.transform = 'translateX(5px)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = theme === 'dark' ? '#374151' : '#f0f9ff';
								e.currentTarget.style.transform = 'translateX(0)';
							}}
							>
								<div style={{
									background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}>
									<Mail size={24} color="#ffffff" />
								</div>
								<div>
									<h4 style={{ color: theme === 'dark' ? '#60a5fa' : '#1e3a8a', fontSize: '1rem', marginBottom: '0.3rem', fontWeight: '600' }}>Email</h4>
									<a href="mailto:info@mwenzgroup.co.za" style={{ color: theme === 'dark' ? '#d1d5db' : '#4b5563', textDecoration: 'none', fontSize: '1.1rem' }}>
										info@mwenzgroup.co.za
									</a>
								</div>
							</div>
						</div>
					</div>

					<div>
						<a
							href="https://wa.me/27785776161"
							target="_blank"
							rel="noopener noreferrer"
							className="contact-button"
							style={{
								marginTop: '1.5rem',
								display: 'block',
								textAlign: 'center',
								padding: '1rem 2rem',
								background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
								color: '#fff',
								borderRadius: '12px',
								fontSize: '1.1rem',
								fontWeight: '600',
								textDecoration: 'none',
								boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
								transition: 'all 0.3s ease'
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'translateY(-3px)';
								e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'translateY(0)';
								e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
							}}
						>
							Contact Us on WhatsApp
						</a>

						<div className="contact-socials" style={{
							marginTop: '2rem',
							display: 'flex',
							gap: '1rem',
							justifyContent: 'center'
						}}>
							<a
								href="https://facebook.com/profile.php?id=61562082740036"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
								style={{
									background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									transition: 'all 0.3s ease',
									boxShadow: '0 2px 10px rgba(59, 130, 246, 0.3)'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-5px)';
									e.currentTarget.style.boxShadow = '0 5px 20px rgba(59, 130, 246, 0.5)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 2px 10px rgba(59, 130, 246, 0.3)';
								}}
							>
								<Facebook size={24} color="#ffffff" />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
								style={{
									background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									transition: 'all 0.3s ease',
									boxShadow: '0 2px 10px rgba(59, 130, 246, 0.3)'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-5px)';
									e.currentTarget.style.boxShadow = '0 5px 20px rgba(59, 130, 246, 0.5)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 2px 10px rgba(59, 130, 246, 0.3)';
								}}
							>
								<Twitter size={24} color="#ffffff" />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								style={{
									background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									transition: 'all 0.3s ease',
									boxShadow: '0 2px 10px rgba(59, 130, 246, 0.3)'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-5px)';
									e.currentTarget.style.boxShadow = '0 5px 20px rgba(59, 130, 246, 0.5)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 2px 10px rgba(59, 130, 246, 0.3)';
								}}
							>
								<Linkedin size={24} color="#ffffff" />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
								style={{
									background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
									borderRadius: '10px',
									padding: '0.8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									transition: 'all 0.3s ease',
									boxShadow: '0 2px 10px rgba(245, 158, 11, 0.3)'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-5px)';
									e.currentTarget.style.boxShadow = '0 5px 20px rgba(245, 158, 11, 0.5)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 2px 10px rgba(245, 158, 11, 0.3)';
								}}
							>
								<Instagram size={24} color="#ffffff" />
							</a>
						</div>
					</div>
				</motion.div>

				{/* Google Map */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					style={{
						background: theme === 'dark' ? '#1f2937' : '#fff',
						borderRadius: '20px',
						overflow: 'hidden',
						boxShadow: theme === 'dark' ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.1)',
						border: theme === 'dark' ? '1px solid rgba(59, 130, 246, 0.2)' : '1px solid rgba(59, 130, 246, 0.1)',
						display: 'flex',
						alignItems: 'stretch'
					}}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.0346578595987!2d28.232562!3d-26.178849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512bc64e0e58d%3A0x5f3b0e0e0e0e0e0e!2s4%20Biddulph%20St%2C%20Witfield%2C%20Boksburg%2C%201459!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
						width="100%"
						height="100%"
						style={{ border: 0, minHeight: '600px' }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Mwenz Group Location"
					></iframe>
				</motion.div>
			</div>
		</div>
</section>
);
}
