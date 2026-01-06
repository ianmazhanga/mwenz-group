import { motion } from 'framer-motion';
import { Tractor, Truck, Factory, Building, Hammer } from 'lucide-react';
import trucksImg from '../assets/trucks.jpg';
import farmingImg from '../assets/farming.jpg';
import miningImg from '../assets/mining.jpg';
import constructionImg from '../assets/construction pic.jpg';
import manufacturingImg from '../assets/manufacturing.jpg';

const industries = [
  {
    icon: Truck,
    name: 'Transport and Logistics',
    description: 'Our fuel solutions ensure your transport operations perform with maximum efficiency thanks to our policy of NO COMPROMISE on fuel quality.',
    image: trucksImg
  },
  {
    icon: Tractor,
    name: 'Agriculture',
    description: 'We\'ve been fuelling the growth of the agriculture sector with quality fuels that improve performance and extend the operational life of equipment.',
    image: farmingImg
  },
  {
    icon: Hammer,
    name: 'Mining',
    description: 'With our on-site delivery systems and uncompromising service levels, we deliver maximum efficiency for the mining sector\'s energy requirements.',
    image: miningImg
  },
  {
    icon: Building,
    name: 'Construction',
    description: 'Our strict delivery timelines allow the construction sector to deliver on their\'s with efficient service and top quality fuel products.',
    image: constructionImg
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Our premium fuels ensure that the manufacturing industry are able to distribute their goods efficiently in order to meet their own delivery schedules.',
    image: manufacturingImg
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      style={{
        padding: '5rem 2rem',
        background: '#1a1a1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              style={{
                display: 'grid',
                gridTemplateColumns: '400px 1fr',
                height: '250px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '0',
              }}
            >
              {/* Image Section */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${industry.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease',
                    borderRadius: '12px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Content Section */}
              <div
                style={{
                  background: '#2a2a2a',
                  padding: '2.5rem 3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    color: '#dc2626',
                    marginBottom: '1rem',
                    textTransform: 'capitalize',
                  }}
                >
                  {industry.name}
                </h3>
                <p
                  style={{
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                  }}
                >
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
