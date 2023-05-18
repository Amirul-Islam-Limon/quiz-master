import React from 'react';
import { Link } from 'react-router-dom';
import './QuizTopic.css'

const QuizTopic = ({quiz}) => {
    const {name, logo, total, id} = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <h3>{name}</h3>
            <h6>Total Quiz : {total}</h6>
            <div>
            <button className='btn btn-primary'><Link to={`/quiz/${name.toLowerCase()}/${id}`}>Start Practice {">"}</Link> </button>
            </div>
        </div>
    );
};

export default QuizTopic;