import React, { useState } from 'react';
import './QuizOption.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faXmarkSquare,faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const QuizOption = ({option,handleTheAnswer,correctAnswer}) => {
    const [onClickStyle, setOnClickStyle]=useState("")
    const [onClickTicMark, setOnClickTicMark]=useState(null)

    const handleTheTicMark=(option)=>{
        if(option === correctAnswer){
            setOnClickStyle("the-option-true");
            setOnClickTicMark(<FontAwesomeIcon icon={faCheckCircle} />)
        }
        else if(option !== correctAnswer){
            setOnClickStyle("the-option-false");
            setOnClickTicMark(<FontAwesomeIcon icon={faXmarkSquare} />)
        }
    }

    return (
        <div className='d-flex align-items-center'>
            <div onClick={()=>handleTheTicMark(option)} className={`quiz-option ${onClickStyle}`}>
                <input type="radio" id={option} name="fav_language" value={option}></input>
                <label for={option}>{option}</label><br />
            </div>
            <div className={`${onClickStyle}`}>{onClickTicMark}</div>
        </div>
    );
};

export default QuizOption;