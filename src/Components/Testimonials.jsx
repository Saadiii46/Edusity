import './Testimonials.css';
import { useState } from 'react';

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            name: "Emily Williams",
            school: "Edusity, USA",
            imgSrc: "/src/assets/images/student-one.png",
            feedback: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
        {
            name: "William Jack",
            school: "Edusity, USA",
            imgSrc: "/src/assets/images/student-two.png",
            feedback: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
        {
            name: "Emily Williams",
            school: "Edusity, USA",
            imgSrc: "/src/assets/images/student-three.png",
            feedback: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
        {
            name: "William Jack",
            school: "Edusity, USA",
            imgSrc: "/src/assets/images/student-four.png",
            feedback: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
        },
    ];

    const nextSlide = () => {
        // Check if currentIndex is less than the number of slides minus 2
        if (currentIndex < slides.length - 1) { // Allow clicking until the last slide
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        // Ensure we don't go below index 0
        if (currentIndex > 0) { 
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    return (
        <>
            <div className='title'>
                <p>TESTIMONIALS</p>
                <h2>What Student Says</h2>
            </div>

            <div className="testimonials" id='test'>
                <svg className='next-btn' onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
                <svg className='back-btn' onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
                </svg>

                <div className="slider">
                    <ul style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
                        {slides.map((slide, index) => (
                            <li key={index}>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src={slide.imgSrc} alt="" />
                                        <div>
                                            <h3>{slide.name}</h3>
                                            <span>{slide.school}</span>
                                        </div>
                                    </div>
                                    <p>{slide.feedback}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
