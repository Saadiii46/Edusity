import './Gallery.css'

export const Gallery = () => {
    return <>
    
    <div className="title" id='campus'>
        <p>GALLERY</p>
        <h2>Campus Photos</h2>
    </div>

    <div className="campus-content">
        <div className="gallery">
            <img src="/src/assets/images/gallery-image-one.png" alt="" />
            <img src="/src/assets/images/gallery-image-two.png" alt="" />
            <img src="/src/assets/images/gallery-image-three.png" alt="" />
            <img src="/src/assets/images/gallery-image-four.png" alt="" />
        </div>
        <button className='btn dark-btn'>See more here  <svg className='arrow-icon-blue' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg></button>
    </div>
    
    </>
}