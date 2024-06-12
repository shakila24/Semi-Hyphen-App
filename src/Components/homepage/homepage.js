import '@fortawesome/fontawesome-free/css/all.min.css';


import React, { useEffect, useState } from 'react';
import Footerpage from '../Footer/footer';
import RotatingCircle from '../rotating-circle/circle';

import './homepage.css';
const HomepageOne=()=>{
    const [slideIndex, setSlideIndex] = useState(0);
    const [activeBoxIndex, setActiveBoxIndex] = useState(0);
    const [expandedQuestions, setExpandedQuestions] = useState({});

    const nextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBoxIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        // Update activeBoxIndex based on slideIndex and slide text
        if (slideIndex === 0) {
            setActiveBoxIndex(0); // Waitlist
        } else if (slideIndex === 1) {
            setActiveBoxIndex(1); // Stake
        } else if (slideIndex === 2) {
            setActiveBoxIndex(2); // NFT Acquisition
        }
    }, [slideIndex]);
    const getActiveText = () => {
        switch (activeBoxIndex) {
            case 0: return <i className="fas fa-calendar-alt fa-5x"></i>;
            case 1: return <i className="fas fa-bullseye fa-5x"></i>
            case 2: return <i className="fas fa-dollar-sign fa-5x"></i>;
            case 3: return <i className="fas fa-chart-line fa-5x"></i>;
            default: return '';
        }
    };
    const getTextForIcon = () => {
        switch (activeBoxIndex) {
            case 0:
                return {
                    heading: "Task Completion",
                    text: "Join the waitlist now to secure your spot and gain early access to the innovative features and benefits of the Semi Hyphen ecosystem."
                };
            case 1:
                return {
                    heading: "Get Whitelisted",
                    text: "Get whitelisted to start exchanging and trading on the Blazeswap platform, gaining early access to exclusive features and benifits."
                };
            case 2:
                return {
                    heading: "Score Points",
                    text: "Complete tasks and score points to unlock reward and exclusive features on the platform."
                };
            case 3:
                return {
                    heading: "Lead the Board",
                    text: "Climb the top of the leaderboard to win exciting rewards and exclusive prizes."
                };
            default:
                return {
                    heading: "",
                    text: ""
                };
        }
    };

    const toggleQuestion = (id) => {
        setExpandedQuestions((prev) => {
            const newExpandedQuestions = {};
            const isCurrentlyOpen = prev[id];
    
            // Close all other expanded questions
            Object.keys(prev).forEach((questionId) => {
                if (questionId !== id) {
                    newExpandedQuestions[questionId] = false;
                }
            });
    
            // Toggle the clicked question only if it wasn't already open
            newExpandedQuestions[id] = !isCurrentlyOpen;
    
            return newExpandedQuestions;
        });
    };
    const circleSizes = {
        big: 100,   // Adjust size as needed
        medium: 70, // Adjust size as needed
        small: 30,  // Adjust size as needed
    };

    const circleSizesForSecond={
        big:60,
        medium:40,
        small:15
    };
    const circleSizesForThird={
        big:30,
        medium:18,
        small:8
    };
    
        return(
            <body className="back">
                <div className="first-frame">
                    <div className="first-inner-frame">
                        <p className="title">Our Solutions</p>
                            <div className="inner-frame-one">
                                <p className="inner-text">
                                    Our Waitlist Program-
                                </p>
                                <p className="inner-text-two">
                                    The following options for <br /> whitelist capturing.
                                </p>
                                <button className="start">Start Building<i className="fas fa-arrow-up"></i></button>
                                <button className="join">Join Waitlist<i className="fas fa-arrow-up"></i></button>
                            </div>
                    </div>
                    <div className="second-frame">
                        <div className="second-inner-frame-one">
                            <div className="slide-bar">
                                <div className="slide-text-bar">
                                    {slideIndex === 0 && 'JOIN US'}
                                    {slideIndex === 1 && 'STAKE'}
                                    {slideIndex === 2 && 'NFT'}
                                </div>
                            </div>
                            <div className="text-container">
                                <div className="heading-one">
                                    <p>Join Waitlist</p>
                                </div>
                                <div className="text-one">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. 
                                    </p>
                                </div>
                            </div>
                            <div className="slide-lines">
                                <div className="slide-line" style={{ transform: `translateX(${slideIndex * 33.33}%)`}}></div>
                                <div className="slide-line" style={{ transform: `translateX(${slideIndex * 33.33}%)` }}></div>
                                <div className="slide-line" style={{ transform: `translateX(${slideIndex * 33.33}%)` }}></div>
                            </div>
                        </div>
                        <div className="second-inner-frame-two">
                        {[0, 1, 2].map((index) => (
                    <div key={index} className={`box-bar  ${activeBoxIndex === index ? 'active' : ''}`}>
                        <div className="box-slide">
                            <div className="circle-container">
                                <div className="circle">
                                    <p>{index + 1}.</p>
                                </div>
                            </div>
                            <div className="box-text">
                                {index === 0 && 'Waitlist'}
                                {index === 1 && 'Stake'}
                                {index === 2 && 'NFT Acquisition'}
                            </div>
                        </div>
                    </div>
                ))}
                        </div>
                    </div>
                </div>
                <div className='bottom-frame'>
                    <div className='sub-frame-one'>
                        <div className='sub-frame-heading'>
                            <p>Discover the <span>Waitlist</span></p>
                        </div>
                    <div className='sub-frame-two'>
                        <div className='about-frame'>
                            <p>About <span>Waitlist</span></p>
                        </div>
                        <div className='text-area'>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere.<br /> 

                            <div className='span'>Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.</div>
                            </p>
                        </div>
                        <button className="join join-btn">Join Waitlist<i className="fas fa-arrow-up"></i></button>
                    </div>
                    <div className='animation-container'>
                        <div className='first'>
                            <RotatingCircle sizes={circleSizes} />
                            </div>
                    
                        <div className='circle-box-1'>
                        </div>
                        <div className='second'>
                            <RotatingCircle sizes={circleSizesForSecond}/></div>
                        
                        <div className='circle-box-2'>
                        </div>
                        <div className='third'>
                            <RotatingCircle sizes={circleSizesForThird} />
                        </div>
                        <div className='circle-box-3'></div>
                        
                    </div>
                    </div>
                </div>
                <div className='sub-frame-two-cont'>
                    <div className='working'>
                        How it <span>Works?</span>
                        </div>
                </div>
                <div className='sub-frame-three'>
                    <div className='sliding-frame'>
                        <div className='sliding-frame-one'>
                            <div className='sliding-box'>
                                <div className='slide-icon'>
                                    <p>{getActiveText()}</p>
                                    <div className='vertical-line'>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                        <div className='dot'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sliding-frame-two'>
                            <div className='horizontal-line'>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                                <div className='horizontal-box'>
                                <div className={`horizontal-box ${activeBoxIndex === 0 ? 'active' : 'inactive'}`}>
                                <p>#1</p>
                            </div>
                                </div>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                                <div className='horizontal-box'>
                                <div className={`horizontal-box ${activeBoxIndex === 1 ? 'active' : 'inactive'}`}>
                                <p>#2</p>
                            </div>
                                </div>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                                <div className='horizontal-box'>
                                <div className={`horizontal-box ${activeBoxIndex === 2 ? 'active' : 'inactive'}`}>
                                <p>#3</p>
                            </div>
                                </div>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                                <div className='horizontal-box'>
                                <div className={`horizontal-box ${activeBoxIndex === 3 ? 'active' : 'inactive'}`}>
                                <p>#4</p>
                            </div>
                                </div>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                                <div className='dot-horizontal'></div>
                            </div>
                        </div>
                        <div className='sub-frame-four'>
                            <div className='task-completion'>
                            {getTextForIcon().heading}
                            </div>
                            <div className='completion-text'>
                            {getTextForIcon().text}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='final-frame'>
                    <div className='faq-frame'>
                        <p>FA<span className='q'>Q</span></p>
                    </div>
                </div>
                <div className='final-sub-frame'>
    {[
        {
            id: 1,
            question: "Who is the CEO of Semi Hyphen?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere."
        },
        {
            id: 2,
            question: "What are the features and options on Semi Hyphen?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere."
        },
        {
            id: 3,
            question: "This year growth in Semi Hyphen?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere."
        }
    ].map(({ id, question, answer }) => (
        <div key={id} className={`faq-question ${expandedQuestions[id] ? 'expanded' : ''}`}>
            <div className='sub-faq'>
                <div className='bullet' onClick={() => toggleQuestion(id)}>
                    <i className={`fas fa-question-circle custom-icon`}></i>
                </div>
                {!expandedQuestions[id] && (
                    <div className='question-text'>
                        {question}
                    </div>

                )}
                {expandedQuestions[id] && (
                <div className='answer'>
                    {answer}
                </div>
            )}
            </div>
            
        </div>
    ))}
</div>
        <Footerpage />      
            </body>
        );
    };

export default HomepageOne