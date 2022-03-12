import { monthsShort } from '../../utils/utils'
interface ThumbnailCardProps{
  rol: string,
  startDate: any,
  duration: {
    years: number,
    months: number
  }
  id:string
}

function ThumbnailCard ({ rol, startDate, duration, id }: ThumbnailCardProps) {
  const { years, months } = duration
  const jobStartDate = startDate.toDate()
  return (
    <div className='flex text-left h-[120px] justify-around justify-self-start items-center transition duration-300 delay-100 hover:scale-110'>
      <div className='flex w-44 flex-wrap justify-center'>
        <img className="p-1 max-w-12 " src={`/${id}.jpg`} />
      </div>
      <div className='max-w-[50%] border-l border-grey pl-5 text-sm font-semibold justify-center sm:place-content-evenly font-bold'>
        <div className="text-grey">Start date: {`${monthsShort[jobStartDate.getMonth()]} - ${jobStartDate.getFullYear()}`}</div>
        {
          months > 0
            ? <div className="text-grey">End date: {`${monthsShort[jobStartDate.getMonth() + months]} - ${jobStartDate.getFullYear() + years}`}</div>
            : <div className="text-grey">End date: Actual</div>

        }
        <div>{rol}</div>
      </div>
    </div>
  )
}

export default ThumbnailCard
