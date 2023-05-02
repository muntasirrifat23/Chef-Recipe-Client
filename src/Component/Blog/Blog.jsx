import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css'
const Blog = () => {
    return (
        <Container className='blog'>
            <div className='q1'>
                <h3>Differences between uncontrolled and controlled components.</h3>
                <p>Ans: Uncontrolled components are components where the value of the form element like as input, textarea are handled by the DOM itself rather than by React. This means that the value of the form element is determined by the users interaction with the element rather than being explicitly set by React. Uncontrolled components are often used when you don't need to manipulate the value of the form element in real-time. Controlled components on the other hand are components where the value of the form element is controlled by React. This means that the value of the form element is stored in the components state and is updated in response to the users interaction with the element. Controlled components are often used when you need to manipulate the value of the form element in real-time, such as when you need to validate user input or implement conditional rendering based on the users input.</p>
            </div>

            <div className='q2'>
                <h3>How to validate React props using PropTypes?</h3>
                <p>Ans: In React we can use PropTypes to validate the props passed to your components. PropTypes is a type-checking library that helps you ensure that the props passed to a component are of the expected type. If a prop of the wrong type is passed to the component, PropTypes will generate a warning in the console. This can help you catch errors early in the development process and ensure that your components are used correctly.</p>
            </div>

            <div className='q3'>
                <h3>Difference between nodejs and express js.</h3>
                <p>Ans: Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine, which allows developers to run JavaScript code outside of the web browser on the server-side. With Node.js we can build server-side applications in JavaScript and take advantage of the benefits of a non-blocking, event-driven I/O model, which allows for fast and scalable applications. Node.js provides a set of built-in modules for handling file system, networking, and other low-level tasks. Express.js, on the other hand, is a lightweight, flexible, and minimalistic web framework built on top of Node.js. Express.js provides a set of features and middleware that make it easier to build web applications and APIs. With Express.js, you can easily handle HTTP requests and responses, create server-side routes, and manage sessions and cookies. Express.js also provides support for various templating engines and integrates with other libraries and frameworks.</p>
            </div>

            <div className='q4'>
                <h3>What is a custom hook, and why will you create a custom hook?</h3>
                <p>Ans: In React, a custom hook is a JavaScript function that starts with the prefix use and allows you to reuse stateful logic between components. Custom hooks are a way to abstract away complex logic and create reusable and composable hooks that can be shared across different components. This custom hook, useFetch, takes a URL as a parameter and uses the useState and useEffect hooks to fetch the data and update the state when the data is loaded. It returns an object with the data and loading state values, which can be used in the component that uses the hook.</p>
            </div>
        </Container>
    );
};

export default Blog;