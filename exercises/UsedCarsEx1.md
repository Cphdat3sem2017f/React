# Exercise part 1: create a used cars app

This exercise will guide you through creating an app as a simple page, for a site selling used cars.

Note: It isimportant for this exercise to follow and read the links given as hints. The goal is not to complete the exercise as quickly as possible but to learn as much as possible ;-)

1.  Create a new project with `create-react-app usedCarsApp `
2.  Open App.js file and paste in this javascript array (right after the import statements);

```javascript
var cars = [
 { year:1997,registered: 867621600000, make: 'Ford',model: 'E350', description: 'ac,abs, moon', price: 3000 }
 ,{ year:1999,registered: 945212400000, make: 'Chevy', model: 'Venture', description:'None', price: 4900 }
 ,{ year:2000,registered: 953766000000, make: 'Chevy', model: 'Venture', description:'', price: 5000 }
 ,{ year:1996,registered: 844380000000, make: 'Jeep', model: 'GrandCherokee',description: 'Air, moon roof,   loaded',price: 4799 }
 ];

```



3. The App.js file is our containing component. This is where the rest of our web application will be rendered inside. Now change the document title from inside the App components render() method like this: 

   ```javascript
   document.title = "Used Cars App";
   ```

4. Change the content of the h2 tag in the App component to: "Used cars" and add an h3 tag below the title with the text "Number of cars: " Add the actual number of cars like this: 

   ```react
   <h3>Number of cars in the list: {cars.length}</h3>
   ```

5. Use javascript `array.map()` function to create a table with a row for each car, and 6 columns. The table row should hold the key: `<tr key={index}>`  This is done to help reacts virtual DOM to keep track of the individual nodes, so we can have them updated in the browser whenever they change values.

   **Hint**: See the example here: https://facebook.github.io/react/docs/lists-and-keys.html

6. Style your table by adding to App.css something like:

   ```css
   th, td{
     text-align: center;
     width: 200px;
   }
   ```

7. Format the 'registered' date so it can be understood by humans. Something like:

```
const registered = (new Date(car.registered)).toISOString().slice(0, 10);
```

8. Using a **currency** Filter
   1. create a new javascript file: currency.js containing this function:

```javascrip
export default function(value, decimalPosition = 2) {
    return '$' + value
        .toFixed(decimalPosition)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}
```

​	2. In App.js import the new component like this

```javascript
import currency from './currency';
```

​	3. Now use the currency method on the price values

```react
<td>{currency(car.price)}</td>
```

9. Later we will see how to add filter and sort to each column

If you have come this far you are allready far into the react way of work. Congratulation!!