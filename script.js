const questions = [
    "What does the <!DOCTYPE> declaration do in HTML?",
    "How do you create a hyperlink in HTML?",
    "What is the purpose of the <head> tag in HTML?",
    "What is the difference between <section> and <div> in HTML?",
    "How can you add a favicon to a webpage?",
    "What is the difference between inline, inline-block, and block elements in CSS?",
    "How do you create a CSS class and apply it to an HTML element?",
    "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
    "What is the CSS box model?",
    "How can you create a responsive layout using CSS?",
    "What is the difference between ID and class selectors in CSS?",
    "How do you link an external CSS file to an HTML document?",
    "What is the purpose of media queries in CSS?",
    "How do you create a grid layout using CSS Grid?",
    "What is the difference between flexbox and CSS Grid?",
    "How do you create a simple animation using CSS?",
    "What are pseudo-classes in CSS, and how do you use them?",
    "What is the difference between em, rem, %, and px units in CSS?",
    "How do you change the background color of an element using CSS?",
    "What is the difference between transitions and animations in CSS?",
    "How can you create a simple form in HTML?",
    "What are semantic HTML tags, and why are they important?",
    "How do you embed a video in HTML?",
    "What is the purpose of the <meta> tag in HTML?",
    "What is the difference between <ul>, <ol>, and <li> tags?",
    "How do you add alt text to an image in HTML?",
    "What is the purpose of the <canvas> element in HTML?",
    "How do you include a JavaScript file in an HTML document?",
    "What is the difference between <script> tags in the <head> and <body>?",
    "How do you create a button that performs an action using JavaScript?",
    "What is the DOM, and how do you interact with it using JavaScript?",
    "How do you change the text of an HTML element using JavaScript?",
    "What is the difference between let, const, and var in JavaScript?",
    "How do you add an event listener to an element in JavaScript?",
    "What is the difference between == and === in JavaScript?",
    "How do you create a function in JavaScript?",
    "What is a callback function in JavaScript?",
    "What is the difference between synchronous and asynchronous JavaScript?",
    "How do you create a promise in JavaScript?",
    "What is the purpose of async and await in JavaScript?",
    "How do you use the fetch API to make an HTTP request?",
    "What is localStorage, and how do you use it in JavaScript?",
    "How do you manipulate CSS styles using JavaScript?",
    "What is the purpose of the `this` keyword in JavaScript?",
    "What are arrow functions, and how do they differ from regular functions?",
    "What is the difference between for, for...in, and for...of loops in JavaScript?",
    "How do you handle errors using try-catch in JavaScript?",
    "What is the difference between null and undefined in JavaScript?",
    "How do you create and use an object in JavaScript?",
    "What is the difference between a shallow copy and a deep copy in JavaScript?",
    "How do you use the map() method on an array in JavaScript?",
    "What is the difference between filter() and reduce() methods in JavaScript?",
    "How do you debounce a function in JavaScript?",
    "What is the event loop in JavaScript?",
    "How do you use JavaScript to validate form input?",
    "What is the difference between innerHTML and textContent in JavaScript?",
    "How do you create a custom event in JavaScript?",
    "What are template literals in JavaScript, and how do you use them?",
    "What is the difference between sessionStorage and localStorage?",
    "How do you use JavaScript to dynamically add an element to the DOM?",
    "What are JavaScript modules, and how do you use them?",
    "How do you create a class in JavaScript?",
    "What is the prototype chain in JavaScript?",
    "How do you use the new keyword in JavaScript?",
    "What is the difference between call, apply, and bind in JavaScript?",
    "How do you create and handle custom errors in JavaScript?",
    "What is JSON, and how do you parse and stringify it in JavaScript?",
    "How do you use regular expressions in JavaScript?",
    "What is the difference between function declarations and function expressions?",
    "How do you use destructuring assignment in JavaScript?",
    "What is the difference between default parameters and rest parameters in JavaScript?",
    "How do you use the spread operator in JavaScript?",
    "What is a closure in JavaScript, and how does it work?",
    "What is the difference between event delegation and direct event binding?",
    "How do you create a simple web app using HTML, CSS, and JavaScript?",
    "What is the difference between synchronous and asynchronous HTTP requests?",
    "How do you use fetch with async/await in JavaScript?",
    "What are ES6 modules, and how do they differ from CommonJS?",
    "How do you make a webpage accessible using HTML and CSS?",
    "What are ARIA roles, and how do you use them?",
    "What is progressive enhancement in web development?",
    "How do you create a responsive navigation bar using HTML and CSS?",
    "What is the difference between relative and absolute URLs in HTML?",
    "How do you optimize images for web performance?",
    "What is the difference between inline and external JavaScript?",
    "How do you use querySelector and querySelectorAll in JavaScript?",
    "What is a shadow DOM, and how do you use it?",
    "How do you use custom properties (CSS variables) in a stylesheet?",
    "What is lazy loading, and how do you implement it in JavaScript?",
    "How do you make a draggable element using JavaScript?",
    "What is the difference between input and textarea elements in HTML?",
    "How do you create a dropdown menu using HTML, CSS, and JavaScript?",
    "What is the purpose of the <template> element in HTML?",
    "How do you create a modal popup using HTML, CSS, and JavaScript?",
    "What is the difference between the load and DOMContentLoaded events in JavaScript?"
  ];
  
  
  let currentQuestionIndex = 0;
  
  const questionElement = document.getElementById("question");
  const changeQuestionButton = document.getElementById("changeQuestionButton");
  
  changeQuestionButton.addEventListener("click", () => {
    // Increment the question index
    currentQuestionIndex++;
    
    // Loop back to the start if we reach the end
    if (currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0;
    }
  
    // Update the question text
    questionElement.textContent = questions[currentQuestionIndex];
  });
  