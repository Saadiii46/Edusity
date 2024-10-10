import './Program.css'

export const Program = () => {
    return <>
    
    <div className="container" id='program' >
        <div className='title' >
            <p>OUR PROGRAM</p>
            <h2>What We Offer</h2>
        </div>


        <div className='programs-content' >
            <div className='program' >
                <img src="/src/assets/images/program-image-one.png" alt="" />
            </div>
            

            <div className="program">
                <img src="/src/assets/images/program-image-two.png" alt="" />
            </div>


            <div className="program">
                <img src="/src/assets/images/program-image-three.png" alt="" />
            </div>
        </div>
    </div>
    
    </>
}