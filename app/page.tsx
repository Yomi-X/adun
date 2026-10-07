import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import MenuSection from "@/components/MenuSection";
import Experience from "@/components/Experience";
import Gallery from "@/components/GalleryPreview"
import Testimonials from "@/components/Testimonials"
import Reservations from "@/components/ReservationCTA"
import LocationHours from "@/components/LocationHours"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <MenuSection />
      <Experience />
      <Gallery />
      <Testimonials />
      <Reservations />
      <LocationHours />
      <Footer />
    </main>
  );
}