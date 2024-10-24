import BlogBGImage from '../../public/assets/images/BlogBGImage.png'


function BlogComp({Image, Title,  Description}) {

  return (
    <div className='h-80 rounded-lg bg-white shadow-xl'>
      <div className="h-[70%] overflow-hidden rounded-lg" style={{backgroundImage : `url(${BlogBGImage})`, backgroundSize : 'cover'}}></div>
      <div className="p-4">
        <h4 className='text-xl font-bold text-[#3C3C3C]'>First Aid Tips for Road Safety</h4>
        <p className='text-[#787878]'>Victims  |  Medanta</p>
      </div>
    </div>
  )
}

export default BlogComp
