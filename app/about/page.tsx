import Books from './Books'
import Podcasts from './Podcasts'
import Schools from './Schools'
import Testimonials from './Testimonials'

const About = () => {
  return (
    <div className="max-w-[1200px] px-6 mx-auto">
      <Testimonials />
      <Schools />
      <Podcasts />
      <Books />
    </div>
  )
}

export default About
