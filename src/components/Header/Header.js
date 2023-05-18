import React from 'react';
import quizImage from '../../photos/quiz-image.jpeg';
import './Header.css'
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='header container'>
            <div>
                <img src={quizImage} alt="" />
            </div>
            <div>
                <h2>Why You Should Take Part In Quize?</h2>
                <p>Taking part in quizzes offers several benefits. Firstly, quizzes provide an opportunity for knowledge enrichment, exposing participants to new information and expanding their knowledge base. Secondly, quizzes stimulate cognitive abilities by challenging the brain, enhancing memory, attention, and reasoning skills. Moreover, quizzes promote learning retention by reinforcing information and improving long-term memory. They also serve as a means of self-assessment, helping individuals identify their strengths and areas for improvement. Additionally, quizzes can be fun and engaging, fostering motivation to learn and promoting social interaction. Lastly, participating in quizzes contributes to personal growth, building confidence and enhancing problem-solving abilities.</p>
            </div>
        </div>
        <div>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default Header;