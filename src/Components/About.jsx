
import './About.css'

export const About = () => {
    return <>
    
    <div className="about" id='about'>
        <div className="about-left-side">
            <img src="/src/assets/images/video-poster.png" alt="" className='about-img' />
            <img src="/src/assets/images/play-icon.png" alt="" className='play-icon' />
        </div>
        <div className="about-right-side">
            <div>
                <h3>ABOUT UNIVERSITY</h3>
            </div>
            <div>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
            </div>
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
            </p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
    
    </>
}