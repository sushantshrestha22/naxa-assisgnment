import StickBanner from "./components/navigation/sticky-banner";
import HeroSection from "./components/pages/service/heroSection";
import ServicePage from "./pages/service/service";

export function App() {
  return (
    <div>
      <StickBanner />

      <HeroSection />
      <ServicePage />
    </div>
  );
}
