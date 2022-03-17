import { monthsShort } from '../../utils/utils'
import { FormattedMessage } from 'react-intl'

interface ThumbnailCardProps{
  rol: string,
  startDate: any,
  duration: {
    years: number,
    months: number
  }
  id:string,
  onJobClick: Function
}

function ThumbnailCard ({ rol, startDate, duration, id, onJobClick }: ThumbnailCardProps) {
  const { years, months } = duration
  const jobStartDate = startDate.toDate()
  return (
    <div onClick={() => onJobClick(id)} className='flex text-left h-[120px] justify-around justify-self-start items-center transition duration-300 delay-100 hover:scale-110'>
      <div className='flex w-44 flex-wrap justify-center'>
        <img className="p-1 max-w-12 " src={`/${id}.jpg`} />
      </div>
      <div className='max-w-[50%] border-l border-grey pl-5 text-sm font-semibold justify-center sm:place-content-evenly font-bold'>
        <div className="text-grey"><FormattedMessage id='startDate'/> {`${monthsShort[jobStartDate.getMonth()]} - ${jobStartDate.getFullYear()}`}</div>
        {
          months > 0
            ? <div className="text-grey"><FormattedMessage id='endDate'/> {`${monthsShort[jobStartDate.getMonth() + months]} - ${jobStartDate.getFullYear() + years}`}</div>
            : <div className="text-grey"><FormattedMessage id='endDateActual'/></div>

        }
        <div>{rol}</div>
      </div>
    </div>
  )
}

export default ThumbnailCard
