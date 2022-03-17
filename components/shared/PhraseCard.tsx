import Avatar from './avatar'
import { FormattedMessage } from 'react-intl'

function PhraseCard () {
  return (
    <div className='flex flex-row m-5 p-2 border border-grey items-center rounded-sm shadow-md md:hidden'>
        <div className='w-12 sm:mx-2 mr-5 md:mx-5'>
            <Avatar alt={''} src={'/avatarNahuel.jpg'} width={14}/>
        </div>
        <p className='inline-block text-sm font-semibold lg:textlg'><FormattedMessage id='phrase'/></p>
    </div>
  )
}

export default PhraseCard
