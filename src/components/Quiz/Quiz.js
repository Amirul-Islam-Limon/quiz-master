import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const topicData= useLoaderData().data;
    console.log(topicData)
    return (
        <div>
            <h1>This is quiz</h1>
        </div>
    );
};

export default Quiz;