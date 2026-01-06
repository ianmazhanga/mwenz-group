
import type { JSX } from "react/jsx-dev-runtime";



export default function Footer(): JSX.Element {
	return (
		<footer className="footer" style={{ background: '#035388', color: '#fff', padding: '3rem 0 1.5rem 0', marginTop: 40 }}>
			<div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between' }}>
				<div style={{ flex: 1, minWidth: 220 }}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>OUR COMMITMENT</div>
					<div style={{ width: 40, height: 4, background: '#F97316', borderRadius: 2, marginBottom: 16 }} />
					<div style={{ color: '#e0e0e0', fontSize: 15 }}>
						We are committed to operating sustainably and minimizing our impact on the environment. We adhere to strict safety and environmental standards, and work to reduce our carbon footprint through efficient logistics and responsible practices.
					</div>
				</div>
				<div style={{ flex: 1, minWidth: 180 }}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>IMPORTANT LINKS</div>
					<div style={{ width: 40, height: 4, background: '#F97316', borderRadius: 2, marginBottom: 16 }} />
					<ul style={{ listStyle: 'none', padding: 0, color: '#e0e0e0', fontSize: 15 }}>
						<li><a href="#about" style={{ color: '#7dd3fc', textDecoration: 'none' }}>About us</a></li>
						<li><a href="#services" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Our Services</a></li>
						<li><a href="#faq" style={{ color: '#7dd3fc', textDecoration: 'none' }}>FAQ</a></li>
						<li><a href="#contact" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Contact</a></li>
					</ul>
				</div>

				<div style={{ flex: 1, minWidth: 220 }}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>ADDRESS LOCATION</div>
					<div style={{ width: 40, height: 4, background: '#F97316', borderRadius: 2, marginBottom: 16 }} />
					<div style={{ color: '#7dd3fc', fontSize: 15, fontWeight: 500 }}>
						Unit 33 Witfield Ridge Complex 4<br />
						Biddulph Witfield, Boksburg, Gauteng 1459
					</div>
					<div style={{ color: '#e0e0e0', fontSize: 15, marginTop: 8 }}>
						<div><b>Phone:</b> +27785776161</div>
						<div>Office Time: 9am-5pm</div>
						<div>Email: info@mwenzgroup.co.za</div>
					</div>
				</div>
				<div style={{ flex: 1, minWidth: 220 }}>
					<div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>NEWSLETTER</div>
					<div style={{ width: 40, height: 4, background: '#F97316', borderRadius: 2, marginBottom: 16 }} />
					<div style={{ color: '#e0e0e0', fontSize: 15, marginBottom: 16 }}>
						You will be notified when somthing new will be appear.
					</div>
					<form style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<input type="email" placeholder="Email Address *" style={{ padding: '0.5rem 1rem', borderRadius: 4, border: 'none', fontSize: 15, minWidth: 0, flex: 1 }} />
						<button type="submit" style={{ background: '#222', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 0.8rem', cursor: 'pointer' }}>
							<span role="img" aria-label="send">✉️</span>
						</button>
					</form>
				</div>
			</div>
			<div style={{ textAlign: 'center', color: '#e0e0e0', fontSize: 14, marginTop: 32 }}>
				Copyright © {new Date().getFullYear()} Mwenz Group. All rights reserved.
				<span style={{ marginLeft: 16 }}>
					<a href="#privacy" style={{ color: '#7dd3fc', textDecoration: 'none', marginRight: 8 }}>Privacy Policy</a>
					·
					<a href="#terms" style={{ color: '#7dd3fc', textDecoration: 'none', marginLeft: 8 }}>Terms of Use</a>
				</span>
			</div>
		</footer>
	);
}