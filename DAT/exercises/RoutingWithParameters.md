# Problem 1: Routing- passing in parameters via Route Urls

In this exercise you should create two routes and their corresponding templates as sketched below:

​                 ![](../img/routingexample2.png)             

The first and default template, should show a table with users, built as a React component from a simple array in App.js The second column should be a link, which when pressed, should navigate to the second route with "details" for the person.

## Complete the exercise by following these steps:

1. Create a new project with [create-react-app](https://github.com/facebookincubator/create-react-app)
2. Remember to include the Router package using: npm install ```react-router@3 --save```
3. Add to new js files. One for each of the 2 components. Remember to import react and export the component. 
4. In App.js setup the routes to refer to each component. Let the main component be the root of the application url
5. Use props to add the person array to the PersonList component. Just use hardcoded values for this exercise, as sketched below:

```react
var persons = [
  {id: 1,name: "Jens",age : 18}
  ,{id: 2,name: "Peter",age : 23}
  ,{id: 3,name: "Hanne",age : 23}
];Create the routeprovider code to navigate the views[1]. 
```

5. Create the partials (templates) for the two routes

6.  Provide the App.js file with a menu as sketched here: 

   ​

   ![](../img/PersonList.png)

   ​

   1. When "All persons" is pressed, it should show the list as before. 
   2. When "New Person" is pressed it should show a Form that allows us to create new persons[2].

