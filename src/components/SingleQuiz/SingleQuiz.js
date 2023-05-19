import React, { useState } from 'react';
import './SingleQuiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import CorrectAnswerModal from '../CorrectAnswerModal/CorrectAnswerModal';

const SingleQuiz = ({question,quizNumber}) => {
    const [modalShow, setModalShow] = useState(false);
    const [correctAnswer, setCorrectAnswer]=useState(null)

    const handleTheAnswer=(option, correctAnswer)=>{
        if(option === correctAnswer){
            setCorrectAnswer("yes")
        }
        else{
            setCorrectAnswer("no")
        }
    }

    // const handleAnswerError=()=>{
        let answerStyle;
        if(correctAnswer === "yes"){
            answerStyle = "quiz-option-true-style"
        }
        else if(correctAnswer === "no"){
            answerStyle = "quiz-option-false-style"
        }

    // }

    
    console.log(question.correctAnswer)

    return (
        <div className='container-lg'>
            <div className='d-flex align-items-center'>
                <h5>Quia {quizNumber} : {question.question}</h5>
                <FontAwesomeIcon onClick={()=> setModalShow(true)} className='ps-2' icon={faEyeSlash} />
            </div>
            <div className="quiz-options">
            {
                question.options.map(option => <div onClick={()=>handleTheAnswer(option,question.correctAnswer)} className={`quiz-option ${answerStyle}`}>
                <input type="radio" id={option} name="fav_language" value={option}></input>
                <label for={option}>{option}</label><br />
                </div>)
            }     
            </div> 
            <CorrectAnswerModal question={question.question} correctAnswer={question.correctAnswer} modalButton={[modalShow, setModalShow]}></CorrectAnswerModal>
        </div>
    );
};

export default SingleQuiz;