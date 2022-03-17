import { FormattedMessage } from 'react-intl'

function Banner () {
  return (
        <div className='bg-light-blue border-b border-black pt-10'>
            <div className="hidden md:flex text-xl max-w-7xl mt-10 p-5 mx-auto items-center space-x-5 text-white font-bold ">
                <h3><FormattedMessage id='jobs' /></h3>
                <h3><FormattedMessage id='skills' /></h3>
                <h3><FormattedMessage id='aboutMe' /></h3>
            </div>
            <div className='flex max-h-[480px] items-center box-content bg-light-blue p-5 h-fit max-w-7xl mx-auto lg:justify-between'>
                <div className='flex-row xs:mr-5 space-y-5 max-w-[70%] lg:max-w-[45%]'>
                    <h1 className='text-2xl mt-10 xs:text-4xl font-serif sm:text-5xl font-serif md:hidden lg:text-7xl'><FormattedMessage id='rol' /></h1>
                    <h1 className='hidden md:flex text-6xl font-serif lg:pb-5'><FormattedMessage id='rolExtended' /></h1>
                    <p className="md:text-lg">React-redux-hooks-webpack</p>
                </div>
                <img className='pt-10 object-contains max-w-[45%] lg:max-w-[30%] z-1' src="/quote.png" alt="" />
            </div>
        </div>
  )
}

export default Banner
