import Roots from './Roots'

const Coaching = () => {
  return (
    <>
      <div className="h-[calc(100vh-80px)] bg-[url('/haneen-1.png')] bg-cover bg-center bg-no-repeat flex items-end">
        <div className="max-w-[1200px] px-6 mx-auto w-full">
          <h1 className="font-serif md:text-[100px] text-5xl drop-shadow-lg text-white pb-32 border-r-2 border-solid border-white pl-12">
            Intimacy Coaching
          </h1>
        </div>
      </div>
      <div className="max-w-[1200px] px-6 mx-auto">
        <Roots />
      </div>
    </>
  )
}

export default Coaching
