import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeContext';
import './styles/FAQ.css';
import faqBackground from './assets/FAQ page.jpg';

interface FAQItem {
	question: string;
	answer: string;
}

export default function FAQ() {
	const { theme } = useTheme();
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const faqs: FAQItem[] = [
		{
			question: "What products and services does Mwenz Group offer?",
			answer: "Mwenz Group supplies bulk fuel and gas to customers and provides delivery services."
		},
		{
			question: "How do I place an order?",
			answer: "You can place an order by contacting us via phone at +27 78 577 6161, WhatsApp, or email at info@mwenzgroup.co.za. Our team will assist you with your requirements and arrange delivery."
		},
		{
			question: "What are your delivery options?",
			answer: "We offer flexible delivery options including scheduled bulk deliveries, on-demand delivery, and 24/7 emergency fuel supply services. We deliver directly to your location across South Africa."
		},
		{
			question: "What are your payment options?",
			answer: "We accept various payment methods including bank transfers, credit facilities for registered business customers, and other secure payment options. Contact our team to discuss payment arrangements."
		},
		{
			question: "How do you ensure the quality and safety of your products?",
			answer: "We maintain strict quality control standards and source our fuel from certified suppliers. All products meet industry safety and quality standards. Our delivery vehicles are regularly maintained and comply with all safety regulations."
		},
		{
			question: "What is your return policy?",
			answer: "Due to the nature of fuel products, returns are handled on a case-by-case basis. If you experience any quality issues, please contact our customer support team immediately and we will work to resolve the matter."
		},
		{
			question: "How do I track my order?",
			answer: "Once your order is confirmed, our team will provide you with delivery updates. You can also contact us at any time to check on your order status via phone or WhatsApp."
		},
		{
			question: "Do you offer bulk discounts?",
			answer: "Yes, we offer competitive pricing for bulk orders and regular customers. Contact our sales team to discuss volume discounts and long-term supply agreements tailored to your needs."
		},
		{
			question: "What is your customer support policy?",
			answer: "We provide 24/7 customer support for emergency fuel requirements. Our team is committed to responding promptly to all inquiries and ensuring customer satisfaction with every delivery."
		},
		{
			question: "What is your environmental policy?",
			answer: "Mwenz Group is committed to environmental responsibility. We follow all environmental regulations, maintain proper handling procedures, and continuously work to minimize our environmental impact through efficient operations and sustainable practices."
		}
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div
			style={{
				minHeight: '100vh',
				position: 'relative',
				padding: '5rem 1rem',
				transition: 'background 0.3s ease'
			}}
		>
			{/* Background Image with Filter */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage: `url(${faqBackground})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundAttachment: 'fixed',
					filter: theme === 'dark' ? 'brightness(0.6) blur(0.5px)' : 'brightness(1) blur(0.5px)',
					zIndex: 0,
					transition: 'filter 0.3s ease'
				}}
			/>
			{/* Dark overlay for better text readability */}
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: theme === 'dark'
						? 'rgba(17, 24, 39, 0.3)'
						: 'rgba(255, 255, 255, 0.3)',
					zIndex: 1,
					transition: 'background 0.3s ease'
				}}
			/>
			<div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					style={{ textAlign: 'center', marginBottom: '3rem' }}
				>
					<h1
						style={{
							fontSize: '3rem',
							fontWeight: 'bold',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							marginBottom: '0.5rem'
						}}
					>
						FAQ
					</h1>
					<p
						style={{
							fontSize: '1.2rem',
							color: theme === 'dark' ? '#9ca3af' : '#6b7280'
						}}
					>
						Important questions, asked by our clients
					</p>
				</motion.div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.05 }}
							style={{
								background: theme === 'dark'
									? 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
									: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
								borderRadius: '12px',
								overflow: 'hidden',
								boxShadow: theme === 'dark'
									? '0 4px 15px rgba(0,0,0,0.3)'
									: '0 4px 15px rgba(0,0,0,0.08)',
								border: theme === 'dark'
									? '1px solid rgba(59, 130, 246, 0.2)'
									: '1px solid rgba(59, 130, 246, 0.1)',
								transition: 'all 0.3s ease'
							}}
						>
							<button
								onClick={() => toggleFAQ(index)}
								style={{
									width: '100%',
									padding: '1.5rem',
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									background: 'transparent',
									border: 'none',
									cursor: 'pointer',
									textAlign: 'left',
									transition: 'all 0.3s ease'
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.background = theme === 'dark' ? '#374151' : '#f0f9ff';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.background = 'transparent';
								}}
							>
								<h3
									style={{
										fontSize: '1.1rem',
										fontWeight: '600',
										color: theme === 'dark' ? '#f3f4f6' : '#111827',
										margin: 0,
										paddingRight: '1rem'
									}}
								>
									{faq.question}
								</h3>
								<ChevronDown
									size={24}
									color={theme === 'dark' ? '#60a5fa' : '#3b82f6'}
									style={{
										transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
										transition: 'transform 0.3s ease',
										flexShrink: 0
									}}
								/>
							</button>

							<div
								style={{
									maxHeight: openIndex === index ? '500px' : '0',
									overflow: 'hidden',
									transition: 'max-height 0.3s ease'
								}}
							>
								<div
									style={{
										padding: '0 1.5rem 1.5rem 1.5rem',
										color: theme === 'dark' ? '#d1d5db' : '#4b5563',
										lineHeight: '1.7',
										fontSize: '1rem'
									}}
								>
									{faq.answer}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
