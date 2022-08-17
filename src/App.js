import "./App.css";
import CommonSection from "./components/CommonSection/CommonSection";
import Header from "./components/Header/Header";
import PeopleSection from "./components/PeopleSection/PeopleSection";
import PricingSection from "./components/PricingSection/PricingSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import StudioSection from "./components/StudioSection/StudioSection";
import Testimonials from "./components/Testimonials/Testimonials";
import BlogSection from "./components/BlogSection/BlogSection";
import GetInTouchSection from "./components/GetInTouchSection/GetInTouchSection";
import ContactInfosSection from "./components/ContactInfosSection/ContactInfosSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App" id="home">
      <Header />
      <ServicesSection />
      <StudioSection />
      <CommonSection
        title="Build your dream website today"
        text="But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her."
        btnText="View Plan & Pricing"
        src="assets/dream.jpg"
      />
      <PricingSection />
      <PeopleSection />
      <Testimonials />
      <CommonSection
        title="Let's Get Started"
        text="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        btnText="Get Started"
        src="assets/common2.jpg"
      />
      <BlogSection />
      <GetInTouchSection />
      <ContactInfosSection />
      <Footer />
    </div>
  );
}

export default App;
