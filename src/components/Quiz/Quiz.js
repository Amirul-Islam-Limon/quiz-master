import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './Quiz.css'

const Quiz = () => {
    const topicData= useLoaderData().data;
    const questions=topicData.questions;
    console.log(topicData.questions)
    return (
        <div className='quiz'>
            <div className='all-quiz-container '>
                <h2 className='text-center pt-5 pb-4'>Quiz of <span className='quiz-headline-style'>{topicData.name}</span></h2>
                    {
                        questions.map((question,xid)=> <SingleQuiz
                        key={question.id}
                        question={question}
                        quizNumber={xid + 1}
                        ></SingleQuiz>)
                    }
            </div>
            <div className='quiz-result-container'>
                {/* <h3>Quiz Result:</h3> */}
            </div>
        </div>
    );
};

export default Quiz;