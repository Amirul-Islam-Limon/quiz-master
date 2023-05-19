import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './QuizTopics.css'

const QuizTopics = () => {
    const quizTopics = useLoaderData().data;
    // console.log(quizData)
    return (
        <div className='container'>
            <div className="quiz-topic-header">
                <h2>Chose Your <span id='quiz-topic-header-style'>Topic</span></h2>
            </div>
            <div className='quizTopics'>
                {
                    quizTopics.map(quizTopic=> <QuizTopic
                    key={quizTopic.id}
                    quiz={quizTopic}
                    ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default QuizTopics;