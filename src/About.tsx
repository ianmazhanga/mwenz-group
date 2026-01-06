


import { motion } from "framer-motion";
import type { JSX } from "react/jsx-dev-runtime";
import aboutImg from "./assets/mwenzgroup.co.za_ (1).png";
import "./styles/About.css";



export default function About(): JSX.Element {
	return (
		   <section className="about">
			   <motion.div
				   initial={{ opacity: 0, x: -40 }}
				   whileInView={{ opacity: 1, x: 0 }}
				   transition={{ duration: 0.8 }}
				   className="about-content"
			   >
				   <div className="about-label">About Mwenz Group</div>
				   <h2 className="about-title">
					   We have <span className="about-title-highlight">5 years of<br />experience,</span>
					   <br />
					   <span className="about-title-sub">in this industry</span>
				   </h2>
				   <div className="about-divider" />
				   <p className="about-desc">
					   Welcome to Mwenz Group, your reliable source for bulk fuel and gas supplies. We are a trusted supplier of high-quality fuel and gas products, serving customers across South Africa. Our team is committed to delivering excellent customer service, and we pride ourselves on our timely and efficient delivery services. With years of experience in the industry, we have built strong relationships with leading fuel and gas suppliers, allowing us to provide our customers with the best products at competitive prices. We offer flexible payment and delivery options to suit your needs, and our knowledgeable staff are always available to provide advice and assistance.
				   </p>
			   </motion.div>
			   <div className="about-img-container">
				   <img
					   src={aboutImg}
					   alt="Mwenz Group Plant"
					   className="about-img"
				   />
			   </div>
		   </section>
	);
}