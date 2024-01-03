import About from "./components/About";
import { CarouselComponent } from "./components/Carousel";
import Features from "./components/Features";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
    <CarouselComponent/>
    <Services/>
    <About/>
    <Features/>
    </>
  )
}
