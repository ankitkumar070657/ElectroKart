import React,{useState} from 'react'

 const ImageDisplay = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <>
      <div className='max-w-[1500px] m-auto'>
      <div className="flex  m-auto justify-between md:max-w-[950px]  mx-4 lg:max-w-[1520px] ">
      <div className="flex-col  ">
      {imgs.map((curElm, index) => {
        return (
          <figure key={index}>
            <img

              src={curElm.url}
              alt={curElm.filename}
              className=" rounded-xl cursor-pointer sm:max-h-[100px] sm:max-w-[100px] md:max-h-[120px] md:max-w-[120px]  lg:max-h-[200px] lg:max-w-[200px] py-2  "
              
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        );
      })}
        </div>
    
    <div className="main-screen sm:m-4 md:m-4 lg: flex-col  ">
    <img className="rounded-xl sm::max-h-[300px] md::max-h-[700px]  lg::max-h-[700px] " src={mainImage.url} alt={mainImage.filename} />
  </div>
  </div>
  </div>
  </>
    
  )
}
export default ImageDisplay;