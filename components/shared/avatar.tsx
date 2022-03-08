
function Avatar ({ alt, src }) {
  return (
   <div className="flex-col justify-items-center">
      <img className="w-12 h-12 mx-auto transition duration-300 delay-150 hover:scale-125
        drop-shadow-md rounded-full cursor-pointer"
        src={src}
        alt={alt}
        title={alt}
      />
      <p className=" font-medium text-sm mt-2 sm:text-sm  " >{alt}</p>
   </div>
  )
}

export default Avatar
