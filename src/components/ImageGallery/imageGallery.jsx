import { useState } from 'react';
import './imageGallery.css';
import imageGalleryData from './imageGalleryData';
const ImageGalleryComponent=()=>{
    let [showAll, setShowAll]=useState(false)
    function toggleShowAll(){
        setShowAll(!showAll);
    }
    return(
      <div className='image-gallery'>
        <h2  id="port">Portfolio</h2>
        <div className='gallery-row'>
            {imageGalleryData.slice(0,showAll ? imageGalleryData.length:3).map((item,index)=>(
              <div className='gallery-item' key={index}>
                <img src={item.img} alt='Image'/>
                <div className='image-info'>
                    <span className='p1'>{item.p1}</span>
                    <span className='p2'>{item.p2}</span>
                </div>
              </div>
            ))}
        </div>
        <button className='gallery-button' onClick={toggleShowAll}>
            {showAll ? 'Show Less':'View All'}
        </button>
      </div>
    )
}
export default ImageGalleryComponent;