import { motion } from 'framer-motion';

export default function FuelBanner() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(220, 38, 38, 0.85) 0%, rgba(220, 38, 38, 0.6) 50%, rgba(220, 38, 38, 0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 2rem',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          We Supply Bulk Fuel to Various Business Sectors
        </h2>
        <div
          style={{
            width: '100px',
            height: '4px',
            background: 'white',
            marginTop: '1rem',
          }}
        />
      </motion.div>
    </section>
  );
}
