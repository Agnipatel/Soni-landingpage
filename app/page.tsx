import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroFeatures from "@/components/HeroFeatures";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import KeyFeatures from "@/components/KeyFeatures";
import Applications from "@/components/Applications";
import Specifications from "@/components/Specifications";
import ProductGallery from "@/components/ProductGallery";
import WorkingProcess from "@/components/WorkingProcess";
import IndustriesServed from "@/components/IndustriesServed";
import CustomerBenefits from "@/components/CustomerBenefits";
import WhyBuyFromUs from "@/components/WhyBuyFromUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HeroFeatures />
      <About />
      <WhyChooseUs />
      <KeyFeatures />
      <Applications />
      <Specifications />
      <ProductGallery />
      <WorkingProcess />
      <IndustriesServed />
      <CustomerBenefits />
      <WhyBuyFromUs />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <StickyButtons />
      <QuoteModal />
    </main>
  );
}
