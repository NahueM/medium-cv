
function Avatar ({ alt, src }) {
  return (
   <>
    <img className="w-14 h-14 object-contain rounded-full cursor-pointer" src={src} alt={alt} title={alt} />
   </>
  )
}

export default Avatar
