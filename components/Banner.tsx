
function Banner () {
  return (
        <div className='bg-light-blue border-b border-black pt-10'>
            <div className='flex max-h-[480px] items-center box-content bg-light-blue p-5 h-fit  max-w-7xl mx-auto lg:justify-between'>
                <div className='flex-row xs:mr-5 space-y-5 max-w-[70%] lg:max-w-[45%]'>
                    <h1 className='text-2xl mt-10 xs:text-3xl font-serif sm:text-5xl font-serif md:hidden lg:text-7xl  '>Sr Front-end developer</h1>
                    <h1 className='hidden md:flex text-6xl font-serif'>Sr Front-end developer with 7 years experience</h1>
                    <p className="md:hidden">React-redux-hooks-webpack</p>
                    {/* <h2 className='text-black my-10 inline-block border border-black bg-white px-4 py-3 rounded-full'>Contact Me</h2> */}
                    <p className="hidden md:inline-flex">React-redux-hooks-webpack</p>
                </div>
                <img className='pt-10 object-contains max-w-[45%] lg:max-w-[30%] z-1' src="/quote.png" alt="" />
            </div>
        </div>
  )
}

export default Banner
