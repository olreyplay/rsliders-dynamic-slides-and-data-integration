import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const features = [
  {
    id: 1,
    title: "Fast Performance",
    description: "Optimized rendering and smooth animations.",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Responsive Design",
    description: "Looks great on mobile, tablet, and desktop.",
    color: "#22c55e",
  },
  {
    id: 3,
    title: "Easy Integration",
    description: "Works seamlessly with modern React apps.",
    color: "#0ea5e9",
  },
  {
    id: 4,
    title: "Customizable",
    description: "Fully flexible styling and configuration.",
    color: "#f97316",
  },
];

function FeatureSlider() {
  return (
    <div style={{ maxWidth: "900px", margin: "60px auto" }}>
      <h2 style={headingStyle}>Why Developers Love Our Product</h2>

      <Swiper spaceBetween={24} slidesPerView={3}>
        {features.map((feature) => (
          <SwiperSlide key={feature.id}>
            <div
              style={{
                ...cardStyle,
                background: feature.color,
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const headingStyle = {
  textAlign: "center",
  marginBottom: "32px",
  fontSize: "28px",
};

const cardStyle = {
  height: "220px",
  borderRadius: "16px",
  padding: "24px",
  color: "#ffffff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
};

export default FeatureSlider;
