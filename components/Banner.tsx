
function Banner () {
  return (
        <div className='bg-light-blue border-b border-black '>
            <div className='flex box-content bg-light-blue p-5 h-fit max-h-[400px] max-w-7xl mx-auto lg:justify-between'>
                <div className='flex-row space-y-5 max-w-[70%] lg:max-w-[45%]'>
                    <h1 className='text-6xl font-serif md:hidden lg:text-7xl  '>Write, read, and connect</h1>
                    <h1 className='hidden md:inline-flex text-6xl font-serif'>Medium is a place to write, read, and connect</h1>
                    <p>It&apos;s easy and free to post your thinking on any topic and connect with millions of readers.</p>
                    <h2 className='text-black my-10 inline-block border border-black bg-white px-4 py-3 rounded-full'>Start Writing</h2>
                </div>
                <img className='pt-10 object-contains max-w-[40%] lg:max-w-[30%]' src="/quote.png" alt="" />
            </div>
        </div>
  )
}

export default Banner
