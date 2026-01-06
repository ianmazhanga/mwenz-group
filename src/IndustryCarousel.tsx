
import CardSwap, { Card } from "./CardSwap";

const IndustryCarousel = () => {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={4000}
        pauseOnHover={true}
        width={300}
        height={200}
      >
        <Card>
          <h3>Transport & Logistics</h3>
          <p>Fuel solutions for large fleets.</p>
        </Card>

        <Card>
          <h3>Agriculture</h3>
          <p>Reliable diesel for farming machinery.</p>
        </Card>

        <Card>
          <h3>Mining</h3>
          <p>Premium fuel for mining operations.</p>
        </Card>

        <Card>
          <h3>Construction</h3>
          <p>High-quality fuel for heavy machinery.</p>
        </Card>

        <Card>
          <h3>Manufacturing</h3>
          <p>Efficient energy for industrial systems.</p>
        </Card>
      </CardSwap>
    </div>
  );
};

export default IndustryCarousel;

