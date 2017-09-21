exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "question"; ALTER SEQUENCE question_id_seq RESTART WITH 3;')
    .then(function() {
      var questions = [{
        id: 1,
        category: 'JavaScript',
        question_title: 'what are primitive data types?',
        answer: 'boolean, number'
      }, {
        id: 2,
        category: 'CSS',
        question_title: 'what does CSS stand for?',
        answer: 'cascading style sheets'
      }, {
        id: 3,
        category: 'Agile',
        question_title: 'Give me 3 examples of Agile Concepts.',
        answer: 'Pair programming, Automated tests, Retrospectives'
      }, {
        id: 4,
        category: 'Design',
        question_title: 'What is the difference between User Interface and User Experience?',
        answer: 'User experience is focused on effective and enjoyable use and user interface is focused on the presentation and interactivity of a product'
      }, {
        id: 5,
        category: 'Design',
        question_title: 'What is the difference between a wireframe, a mockup, and a prototype?',
        answer: 'A wireframe is a sketch of the representation of the interface. A prototype uses user testing and is the reusable backbone of the interface. A mockup uses gathered feedback and is a static visualization of the interface.'
      }, {
        id: 6,
        category: 'HTTP',
        question_title: 'Describe 3 parts of an HTTP Request.',
        answer: 'Request Method tells the server the type of action that a client wants to perform. Headers can be used by the client to tell server extra information about request (e.g. Client software and content type that it understands). Body contains data sent by the client to the server'
      }, {
        id: 7,
        category: 'Middleware',
        question_title: 'What is CORS? How does it work?',
        answer: 'Cross-Origin Resource Sharing is a mechanism that enables many resources (e.g., JavaScript, fonts etc.) on a web page to be requested from another domain outside the domain from which the resource originated.'
      }, {
        id: 8,
        category: 'Database',
        question_title: 'Describe CRUD.',
        answer: 'In a database, you can create, read, update and delete information'
      }, {
        id: 9,
        category: 'Development',
        question_title: 'List 3 ways you can reduce page load time?',
        answer: 'Reduce image size, minimize redirects, caching'
      }, {
        id: 10,
        category: 'Database',
        question_title: 'Explain the difference between data and information.',
        answer: 'Data is simply facts or figures — bits of information, but not information itself.  Information provides context for data.'
      }, {
        id: 11,
        category: 'Database',
        question_title: 'Define and describe an DBMS and why you would use it.',
        answer: 'A database management system (DBMS) is system software for creating and managing databases. The DBMS provides users and programmers with a systematic way to create, retrieve, update and manage data.'
      }, {
        id: 12,
        category: 'Database',
        question_title: 'Describe a primary key and a foreign key',
        answer: 'A primary key is a column or group of columns that uniquely identify a row. Every table should have a primary key. A foreign key (FK) is a column or combination of columns that is used to establish and enforce a link between the data in two tables to control the data that can be stored in the foreign key table.'
      }, {
        id: 13,
        category: 'Auth',
        question_title: 'What is the difference between authentication and authorization?',
        answer: 'Authentication is the sign-up and sign-in process and Authorization is permission and access control.'
      }, {
        id: 14,
        category: 'Database',
        question_title: 'Describe why passwords need to be hashed in the database',
        answer: 'We hash passwords to prevent an attacker with read-only access from escalating to higher power levels. Password hashing will not make your Web site impervious to attacks; it will still be hacked. Password hashing is damage containment.'
      }, {
        id: 15,
        category: 'Front-end',
        question_title: 'Name the components of the box model.',
        answer: 'Content, padding, border, and margin.'
      }, {
        id: 16,
        category: 'Functions',
        question_title: 'What is the difference between null and undefined?',
        answer: 'Undefined means a variable has not been declared, or has been declared but has not yet been assigned a value. Null is an assignment value that means "no value"'
      }, {
        id: 17,
        category: 'Functions',
        question_title: 'Explain hoisting.',
        answer: 'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.'
      }, {
        id: 18,
        category: 'Front-end',
        question_title: "What is the difference between classes and ID's in CSS?",
        answer: "ID's are unique. Each element can have only one ID. Classes are NOT unique. You can use the same class on multiple elements. And you can use multiple classes on the same element."
      }, {
        id: 19,
        category: 'Front-end',
        question_title: 'Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>?',
        answer: 'You usually put the <link> tags in between the <head> to prevent flash of un-styled content which gives the user something to look at while the rest of the page is being parsed. Since Javascript blocks rendering by default, and the DOM and CSS object model construction can be also be delayed, it is usually best to keep scripts at the bottom of the page.'
      }, {
        id: 20,
        category: 'Development',
        question_title: 'What are data- attributes good for?',
        answer: 'Storing data in HTML for DOM parsing, or other ways of keeping track of information.'
      }];
      return knex('question').insert(questions);
    });
};
