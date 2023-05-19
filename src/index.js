import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import Header from './components/Header/Header';
import QuizTopics from './components/QuizTopics/QuizTopics';
import Quiz from './components/Quiz/Quiz';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Header></Header>,
        children:[
          {
            path:"/",
            loader:()=>{
              return fetch("https://openapi.programming-hero.com/api/quiz")
            },
            element:<QuizTopics></QuizTopics>
          }
        ]
      },
      {
        path:"/topics",
        loader:()=>{
          return fetch("https://openapi.programming-hero.com/api/quiz")
        },
        element:<QuizTopics></QuizTopics>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/quiz/:topicName/:topicId",
        loader:(props)=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${props.params.topicId}`)
        },
        element:<Quiz></Quiz>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
