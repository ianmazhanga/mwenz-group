import { useState, useEffect, lazy, Suspense, memo } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/ColorfulTheme.css";
import "./styles/Navbar.css";
import "./styles/Testimonials.css";
import "./styles/DarkMode.css";

import { useTheme } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";
import type { JSX } from "react/jsx-dev-runtime";
import logo from "./assets/logo.png";

// Lazy load pages for better performance
const Home = lazy(() => import("./Home"));
const FAQ = lazy(() => import("./FAQ"));
const ContactPage = lazy(() => import("./ContactPage"));
const AboutPage = lazy(() => import("./AboutPage"));
const ServicesPage = lazy(() => import("./ServicesPage"));

const Navbar = memo(function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className="navbar sticky top-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300"
			style={{
				background: theme === 'dark'
					? (scrolled ? 'rgba(17, 24, 39, 0.8)' : 'rgba(17, 24, 39, 1)')
					: (scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 1)'),
				backdropFilter: scrolled ? 'blur(12px)' : 'none',
				boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
			}}
		>
			<Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
				<img
					src={logo}
					alt="Mwenz Group Logo"
					style={{
						height: '45px',
						width: 'auto',
						objectFit: 'contain',
						display: 'block'
					}}
				/>
			</Link>
			<ul className="flex gap-2">
				<li>
					<Link
						to="/"
						style={{
							padding: '0.5rem 1rem',
							borderRadius: '8px',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							display: 'inline-block',
							fontWeight: '500'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)';
							e.currentTarget.style.color = '#3b82f6';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#111827';
						}}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/services"
						style={{
							padding: '0.5rem 1rem',
							borderRadius: '8px',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							display: 'inline-block',
							fontWeight: '500'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)';
							e.currentTarget.style.color = '#3b82f6';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#111827';
						}}
					>
						Services
					</Link>
				</li>
				<li>
					<a
						href="/#industries"
						style={{
							padding: '0.5rem 1rem',
							borderRadius: '8px',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							display: 'inline-block',
							fontWeight: '500'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)';
							e.currentTarget.style.color = '#3b82f6';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#111827';
						}}
					>
						Industries
					</a>
				</li>
				<li>
					<Link
						to="/about"
						style={{
							padding: '0.5rem 1rem',
							borderRadius: '8px',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							display: 'inline-block',
							fontWeight: '500'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)';
							e.currentTarget.style.color = '#3b82f6';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#111827';
						}}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						style={{
							padding: '0.5rem 1rem',
							borderRadius: '8px',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							display: 'inline-block',
							fontWeight: '500'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)';
							e.currentTarget.style.color = '#3b82f6';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#111827';
						}}
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						to="/faq"
						style={{
							padding: '0.5rem 1rem',
							borderRadius: '8px',
							color: theme === 'dark' ? '#ffffff' : '#111827',
							textDecoration: 'none',
							transition: 'all 0.3s ease',
							display: 'inline-block',
							fontWeight: '500'
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)';
							e.currentTarget.style.color = '#3b82f6';
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = 'transparent';
							e.currentTarget.style.color = theme === 'dark' ? '#ffffff' : '#111827';
						}}
					>
						FAQ
					</Link>
				</li>
			</ul>
			<button
				onClick={toggleTheme}
				className="theme-toggle"
				style={{
					position: 'relative',
					width: '60px',
					height: '32px',
					borderRadius: '16px',
					background: theme === 'dark'
						? 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)'
						: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
					border: 'none',
					cursor: 'pointer',
					boxShadow: theme === 'dark'
						? '0 4px 12px rgba(59, 130, 246, 0.3), inset 0 1px 2px rgba(0, 0, 0, 0.3)'
						: '0 4px 12px rgba(251, 191, 36, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
					transition: 'all 0.3s ease',
					overflow: 'hidden'
				}}
				aria-label="Toggle theme"
			>
				<div
					style={{
						position: 'absolute',
						top: '4px',
						left: theme === 'dark' ? '32px' : '4px',
						width: '24px',
						height: '24px',
						borderRadius: '50%',
						background: '#ffffff',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
						transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					{theme === 'dark' ? (
						<Moon size={14} color="#1e3a8a" style={{ marginLeft: '1px' }} />
					) : (
						<Sun size={14} color="#f59e0b" />
					)}
				</div>
				<div
					style={{
						position: 'absolute',
						top: '8px',
						left: theme === 'dark' ? '8px' : '36px',
						opacity: theme === 'dark' ? 1 : 0,
						transition: 'all 0.3s ease'
					}}
				>
					<Sun size={16} color="rgba(251, 191, 36, 0.5)" />
				</div>
				<div
					style={{
						position: 'absolute',
						top: '8px',
						right: theme === 'dark' ? '36px' : '8px',
						opacity: theme === 'dark' ? 0 : 1,
						transition: 'all 0.3s ease'
					}}
				>
					<Moon size={16} color="rgba(30, 58, 138, 0.5)" />
				</div>
			</button>
		</nav>
	);
});

export default function App(): JSX.Element {
	const { theme } = useTheme();

	return (
		<div
			className="min-h-screen flex flex-col transition-colors duration-300"
			style={{
				position: "relative",
				background: theme === 'dark' ? '#111827' : '#f9fafb',
				color: theme === 'dark' ? '#f3f4f6' : '#111827'
			}}
		>
			<Navbar />
			<Suspense fallback={
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '80vh',
					color: theme === 'dark' ? '#ffffff' : '#111827'
				}}>
					<div style={{ textAlign: 'center' }}>
						<div style={{
							width: '50px',
							height: '50px',
							border: '4px solid rgba(59, 130, 246, 0.2)',
							borderTop: '4px solid #3b82f6',
							borderRadius: '50%',
							margin: '0 auto 1rem',
							animation: 'spin 1s linear infinite'
						}} />
						<p>Loading...</p>
					</div>
				</div>
			}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/faq" element={<FAQ />} />
				</Routes>
			</Suspense>
		</div>
	);
}
