import Testimonials from './Testimonials'

export default function Home() {
  return (
    <>
      <div className="h-[calc(100vh-72px)] bg-[url('/haneen-0.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="max-w-[1200px] px-6 mx-auto">
        <Testimonials />
      </div>
    </>
  )
}
