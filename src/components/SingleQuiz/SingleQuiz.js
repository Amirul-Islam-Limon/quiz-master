import React, { useState } from 'react';
import './SingleQuiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import CorrectAnswerModal from '../CorrectAnswerModal/CorrectAnswerModal';
import QuizOption from '../QuizOption/QuizOption';

const SingleQuiz = ({question,quizNumber}) => {
    const [modalShow, setModalShow] = useState(false);
    // const [correctAnswer, setCorrectAnswer]=useState(null)
    
    const correctAnswer = question.correctAnswer;

    const handleTheAnswer=(option)=>{
        // console.log(option)
    }


    // }

    
    console.log(correctAnswer)

    return (
        <div className='container-lg'>
            <div className='d-flex align-items-center'>
                <h5>Quia {quizNumber} : {question.question}</h5>
                <FontAwesomeIcon onClick={()=> setModalShow(true)} className='ps-2' icon={faEyeSlash} />
            </div>
            <div className="quiz-options">
            {
                question.options.map(option=> <QuizOption 
                option={option}
                handleTheAnswer={handleTheAnswer}
                correctAnswer={correctAnswer}
                ></QuizOption> )
            }     
            </div> 
            <CorrectAnswerModal question={question.question} correctAnswer={question.correctAnswer} modalButton={[modalShow, setModalShow]}></CorrectAnswerModal>
        </div>
    );
};

export default SingleQuiz;