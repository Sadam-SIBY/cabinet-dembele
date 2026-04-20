import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Process from '../components/sections/Process'
import Expertise from '../components/sections/Expertise'
import Actualites from '../components/sections/Actualites'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'
import Marquee from '../components/ui/Marquee'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Expertise />
      <Actualites />
      <Testimonials />
      <Contact />
    </>
  )
}
