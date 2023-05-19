import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='blogs-header'>Our Awesome <span className='blogs-header-style'>Blogs</span></h1>
            <div className='blogs'>
                <div className='blog'>
                    <h2> 1. What Is The Purpose Of React Router?</h2>
                    <p>The purpose of React Router is to provide routing capabilities to React applications. React Router is a popular library in the React ecosystem that allows developers to handle navigation and routing within a React application.
                    Routing refers to the process of determining which components to render based on the current URL or location of the application. React Router enables developers to create single-page applications (SPAs) where different components are rendered based on the URL without the need to refresh the entire page.React Router provides a declarative way to define routes and associate them with specific components. It allows you to define different routes that correspond to different URLs or paths in your application and specify the components that should be rendered when those routes are matched. It also provides features like nested routes, route parameters, query parameters, and redirects. By using React Router, you can create a more structured and organized application with separate components for different pages or views. It helps manage the state of the application's UI based on the current route, enabling a better user experience by providing seamless navigation between different parts of the application. In summary, the purpose of React Router is to handle navigation and routing in React applications, making it easier to build dynamic and interactive user interfaces.</p>
                </div>
                <div className='blog'>
                    <h2>2. How Does Context API Works?</h2>
                    <p>The Context API in React allows you to create a global state that can be accessed by any component in your application. It involves creating a Context using the createContext function, providing the data using the Provider component, and consuming the data using the Consumer component. The Provider wraps the parent component and passes the data through the value prop, while the Consumer accesses the data through a render prop pattern. This enables components at different levels of the component tree to access and utilize the shared data without the need for explicit prop passing.</p>
                </div>
                <div className="blogs">
                    <h2>3. Tell Me Something About use Ref?</h2>
                    <p>The useRef hook in React allows you to create a reference to a value that persists across re-renders of a functional component. It is commonly used to access and manipulate DOM elements by assigning the ref to the ref attribute of a JSX element. The current property of the ref holds the reference to the DOM element, enabling direct interaction. Additionally, useRef can be used to store mutable values that don't trigger re-renders when updated. However, it's important to note that changing the ref's current property doesn't cause a re-render, so it's not suitable for triggering re-renders based on ref changes without additional mechanisms.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;