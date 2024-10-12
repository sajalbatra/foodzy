import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Menu from "./components/Menu/Menu";
import SeasonalSpecials from "./components/SeasonalSpecials";
import Testimonals from "./components/Testimonals";
export default function Home() {
  return (
    <>
    <Hero/>
    <Menu/>
    <SeasonalSpecials />
    <Testimonals/>
    <Blogs/>
    </>
  )
}