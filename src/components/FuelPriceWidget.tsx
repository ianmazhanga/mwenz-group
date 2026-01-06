import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface OilPriceData {
  name: string;
  price: string;
  change: string;
  percentage: string;
  trend: 'up' | 'down';
}

export default function FuelPriceWidget() {
  const [currentDate, setCurrentDate] = useState('');
  const [oilPrice, setOilPrice] = useState<OilPriceData>({
    name: 'Brent Crude Oil',
    price: '$61.94',
    change: '+0.00',
    percentage: '0.00%',
    trend: 'up'
  });
  const [exchangeRate, setExchangeRate] = useState('16.48910');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch real oil prices from API
  useEffect(() => {
    const fetchOilPrice = async () => {
      try {
        // Using Twelve Data API (free tier: 800 requests/day)
        // You can also use Alpha Vantage, but Twelve Data has better free tier
        const API_KEY = 'demo'; // Replace with your API key from https://twelvedata.com/

        // Fetch Brent Crude Oil price
        const oilResponse = await fetch(
          `https://api.twelvedata.com/time_series?symbol=UKOIL&interval=1day&apikey=${API_KEY}&outputsize=2`
        );

        if (oilResponse.ok) {
          const oilData = await oilResponse.json();

          if (oilData.values && oilData.values.length >= 2) {
            const latestPrice = parseFloat(oilData.values[0].close);
            const previousPrice = parseFloat(oilData.values[1].close);
            const change = latestPrice - previousPrice;
            const percentage = ((change / previousPrice) * 100).toFixed(2);

            setOilPrice({
              name: 'Brent Crude Oil',
              price: `$${latestPrice.toFixed(2)}`,
              change: change >= 0 ? `+${change.toFixed(2)}` : change.toFixed(2),
              percentage: `${percentage}%`,
              trend: change >= 0 ? 'up' : 'down'
            });
          }
        }
      } catch (error) {
        console.error('Error fetching oil price:', error);
        // Keep default values if API fails
      }
    };

    const fetchExchangeRate = async () => {
      try {
        // Fetch USD/ZAR exchange rate
        const exchangeResponse = await fetch(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );

        if (exchangeResponse.ok) {
          const exchangeData = await exchangeResponse.json();
          const zarRate = exchangeData.rates.ZAR;
          setExchangeRate(zarRate.toFixed(5));
        }
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        // Keep default value if API fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchOilPrice();
    fetchExchangeRate();

    // Refresh every 5 minutes
    const interval = setInterval(() => {
      fetchOilPrice();
      fetchExchangeRate();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formatted = now.toLocaleDateString('en-ZA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }) + ' ' + now.toLocaleTimeString('en-ZA', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentDate(formatted);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  // Removed fuel indicators as they require special API access

  const currencyData = {
    pair: 'USD/ZAR',
    rate: exchangeRate,
    label: 'U.S. DOLLAR / SOUTH AFRICA'
  };

  if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          width: '280px',
          background: 'rgba(0, 0, 0, 0.9)',
          borderRadius: '12px',
          padding: '1.5rem',
          color: 'white',
          zIndex: 100,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Loading live prices...</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Please wait</div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: '100px',
        right: '30px',
        width: '350px',
        background: 'rgba(0, 0, 0, 0.85)',
        borderRadius: '16px',
        padding: '2rem',
        color: 'white',
        zIndex: 10,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5)',
        border: '2px solid rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Brent Crude Oil - Main Display */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#999', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {oilPrice.name}
        </h3>
        <div style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#fff' }}>
          {oilPrice.price}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.8rem',
          fontSize: '1.2rem',
          color: oilPrice.trend === 'up' ? '#22c55e' : '#ef4444'
        }}>
          {oilPrice.trend === 'up' ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
          <span style={{ fontWeight: '600' }}>{oilPrice.change}</span>
          <span style={{ fontWeight: '600' }}>({oilPrice.percentage})</span>
        </div>
        <div style={{ fontSize: '0.85rem', color: '#777', marginTop: '0.8rem' }}>
          {currentDate}
        </div>
      </div>

      {/* Currency Exchange - Larger Display */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.08)',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '1.5rem',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          {currencyData.pair}
        </div>
        <div style={{ fontSize: '0.8rem', color: '#777', marginBottom: '0.8rem' }}>
          {currencyData.label}
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>
          {currencyData.rate}
        </div>
      </div>

      {/* Info Note */}
      <div style={{
        fontSize: '0.75rem',
        color: '#777',
        textAlign: 'center',
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        fontStyle: 'italic'
      }}>
        <div>Live market prices</div>
        <div style={{ marginTop: '0.3rem', fontSize: '0.7rem' }}>Updates every 5 minutes</div>
      </div>
    </div>
  );
}
