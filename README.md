# SNHU-CS465
Contains my final project for the term( Travel website with Mean Stack application)

## Functionality and Purpose
For this project, I added MEAN stack functionality to a static webpage and built a single-page application (SPA). Users of the static HTML/Handlebars frontend can view data provided by the backend, while users of the Angular SPA can both view and manage data dynamically. Angular handles frontend interactions, MongoDB stores the data, and Node.js/Express manage backend operations.  
- [Full-Stack MEAN Guide (SNHU)](FullStackGuide.pdf)

## Preview 👀
<img src="Preview/example1.mov" width="500"/>
<img src="Preview/example2.png" width="400"/>
<img src="Preview/example3.png" width="400"/>
<img src="Preview/example3.png" width="400"/>


## To get a local copy up and running follow these steps 🏃💨 

### Installation Steps
- Clone or download this repository
[here](https://github.com/JWiggins973/SNHU-CS465/archive/refs/heads/module7.zip)

- Install dependencies [Tools](#tools)
```bash
npm install
```

# Navigate to the the Angular client and install dependencies
```bash  
npm install
```
# Start backend server
```bash
npm start
```

# Start Angular application
```bash
npm serve
```

# Open a browser and navigate to
- Single page app: [http://localhost:4200](http://localhost:4200)  
- Travlr site: [http://localhost:3000](http://localhost:3000)

## Tools
- [MongoDB](https://www.mongodb.com/) – NoSQL database for storing application data  
- [Express.js](https://expressjs.com/) – backend web framework  
- [Angular](https://angular.io/) – frontend framework  
- [Node.js](https://nodejs.org/) – JavaScript runtime environment  
- [Postman](https://www.postman.com/) – API testing and debugging 

  

## Additional Resources 📚	
- [Mongoose](https://mongoosejs.com/) – schema-based MongoDB object modeling
- [RESTful APIs](https://restfulapi.net/) – structured client–server communication
- [Angular Services](https://angular.io/guide/architecture-services) – frontend data handling

## Journal 📝

### **Architecture**

* # Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

The front development two different client side applications, the travlr website used an express  to display JavaScript, html, and handlebar in the browser . While the admin page utilized angular and a single page application. For the travlr website it has each part of the site organized into routes, views, and static files instead of components, and it delivers full pages from the server or handlebar templates with the database data injected.  For the SPA the UI structured into smaller pieces called components and when combined renders the full webpage. On the initial visit the SPA loads all the data and updates dynamically without having to reload the webpage.

* # Why did the backend use a NoSQL MongoDB database?

MongoDB is a NoSQL database that stores data as flexible JSON-like documents, allowing each record to have its own structure and scalable making it easy to add or modify fields during development. It also provides faster, more efficient querying than reading data directly from system files. 

### **Functionality**

* # How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON (JavaScript Object Notation) is a way to represent data that can be used in many programming languages. JavaScript is a programming language used for web development. JSON makes it easy for the frontend and backend to communicate because it provides a consistent format for data. The backend stores data in MongoDB, and APIs handle sending this data back and forth. 

* # Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

During development I refactored Javascript code into handle bar template to allow the insertion of JSON files/backend data into HTML structures to display different content. Not only does this make the code easier to read but also scalable and easier to maintain in the future. This is important because when creating a full stack project there are many things that can go wrong, and working with easy-to-read code can make troubleshooting in the future much easier because the project structured and organized.

### **Testing**

* # Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

RESTful APIs use standard HTTP methods such as, POST, PUT, and DELETE to interact with defined endpoints that retrieve or modify data. Each endpoint must be tested to ensure it returns correct responses and handles errors properly. In full stack applications, added security layers such as JWT-based authentication increase testing complexity because valid tokens must be generated before accessing protected endpoints. Automated testing must verify not only that requests succeed with valid tokens, but also that unauthorized or expired tokens are correctly rejected and refreshed, ensuring both functionality and security are working as intended.

### **Reflection**

* # How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me develop a stronger understanding of how full stack applications are built and the steps required to ensure they function correctly. I learned how to use Angular to create single-page applications (SPAs) that update in real time, as well as how to implement routing and controllers to manage application flow. I also gained experience working with backend APIs and understanding how frontend and backend components interact. Since most companies maintain an online presence, having the ability to build dynamic, responsive web applications is a valuable skill that makes me a more marketable candidate in my career field.