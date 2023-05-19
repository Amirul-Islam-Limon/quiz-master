import React from 'react';
import { useRouteError } from "react-router-dom";
import './ErrorPage.css'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error.data);
    return (
        <div id="error-page" className='error-page'>
            <div>
                <h1>Oops!</h1>
                <h6>{error.data}</h6>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;