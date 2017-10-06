
#Exercise Day 3: 
State and props, Events, List and Keys, Forms, lifecycle methods

###Create a Kilo2Pound converter
1. Create a new react class component with 2 input fields and 2 relevant labels: Kilo and Pound
2. When we write numbers inside one of these input fields the other will update with the converted numbers. This because the 2 components share state.
3. Initiate state in the constructor
4. Create a method: convert() that can update the state of the component (both for kilo and pound)
5. Make the value of each input field so that it is updated when state changes.
6. Add a onChange attribute to the input fields so that the convert() method is run whenever a value changes.

###Make the converter generic
Change the converter component so that it can be used to convert anything (e.g fahrenheit to celcius, inch to centimeter or what ever you can think of.
1. Use props to pass 2 things to the component
2. first is the name (what does it convert)
3. second is the function (how does it convert)
4. Use the prop value to set the title of the component.
5. Now change the components behavior so that the passed-in function gets called instead of the internal convert() method.
6. Create an app with 2 converters using the same component with different props
   1. First converter is for kilo to pound
   2. Second converter is for ounce to kilograms
7. Place both converters on the same page.
[See here for inspiration](http://codepen.io/valscion/pen/jBNjja?editors=0010)  



