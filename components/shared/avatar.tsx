import { getInitials } from '../../utils/utils'
interface Props {
  alt: string,
  src: string,
  width?: number,
}

function Avatar ({ alt, src, width = 12 }: Props) {
  return (
    <div className={'flex flex-row justify-items-center w-12 mr-12 items-center '}>
      <img className="mx-auto w-full mr-2 object-cover transition duration-300 delay-150 hover:scale-125 drop-shadow-md rounded-full cursor-pointer border-2 border-light-blue"
        src={src}
        alt={alt}
        title={alt}
      />
      {!!alt.length && <p className="font-medium text-sm mt-2 text-center sm:hidden">{getInitials(alt)}</p>}
      <p className="hidden sm:inline-flex font-medium mt-2 text-sm text-center">{alt}</p>
    </div>
  )
}

export default Avatar
