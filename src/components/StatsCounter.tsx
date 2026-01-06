import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { TruckIcon, UsersIcon, Award, Leaf } from 'lucide-react';

interface Stat {
  icon: typeof TruckIcon;
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  { icon: TruckIcon, end: 500, label: 'Deliveries Monthly', suffix: '+' },
  { icon: UsersIcon, end: 150, label: 'Happy Clients', suffix: '+' },
  { icon: Award, end: 5, label: 'Years Experience', suffix: '+' },
  { icon: Leaf, end: 30, label: 'CO₂ Reduction', suffix: '%' },
];

function Counter({ end, duration = 2, suffix = '', prefix = '' }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function StatsCounter() {
  return (
    <section className="stats-section" style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Animated background circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(75, 75, 75, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(75, 75, 75, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #a3a3a3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Our Impact in Numbers
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Delivering excellence across South Africa with proven results
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                y: -10,
                rotateY: 5,
              }}
              style={{
                background: 'linear-gradient(135deg, rgba(64, 64, 64, 0.4) 0%, rgba(32, 32, 32, 0.2) 100%)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1.5rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                border: '1px solid rgba(128, 128, 128, 0.3)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(135deg, #4b4b4b 0%, #1a1a1a 100%)',
                  borderRadius: '1rem',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 10px 30px rgba(75, 75, 75, 0.4)',
                }}
              >
                <stat.icon
                  size={40}
                  style={{
                    color: '#ffffff',
                  }}
                />
              </motion.div>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                marginBottom: '0.75rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #9ca3af 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
              }}>
                <Counter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                fontWeight: '500',
                letterSpacing: '0.025em',
              }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
