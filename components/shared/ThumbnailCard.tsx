
function ThumbnailCard ({ rol, startDate, duration, id }) {
  const { years, months } = duration
  return (
    <div className='flex h-[120px] justify-around justify-self-start items-center'>
      <div className='flex w-44 flex-wrap justify-center'>
        <img className="p-1 max-w-12" src={`/${id}.jpg`} />
      </div>
      <div className='max-w-[50%] border-l border-grey pl-5 text-sm font-semibold justify-center sm:place-content-evenly font-bold'>
        <div className='hidden xs:flex sm:hidden md:flex'>
          {
            years > 0 && (
              <p className='mr-2'>
                { `${years} Years and`}
              </p>
            )
          }
          <p>
            {months > 0 ? `${months} Months,` : 'Actual'}
          </p>
        </div>
        <div>{rol}</div>
        <div>Join Company Date: {startDate.toDate().toLocaleDateString('en-US')}</div>
      </div>
    </div>
  )
}

export default ThumbnailCard
