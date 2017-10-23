# Tutorial on React Router4

1. First create a new js file: RoutingDemo.js and setup for react component. create a class and extend React.Component

2. Install React Router4 into the project: `npm install --save react-router-dom`

3. We will use BrowserRouter for now (as opposed to HashRouter). Inside the index.js put: 

   ```
   ReactDOM.render((
     <BrowserRouter>
       <RoutingDemo />
     </BrowserRouter>
   ), document.getElementById('root'))
   ```

4. Now import the router and our RoutingDemo class

   ```
   import { BrowserRouter } from 'react-router-dom'
   import RoutingDemo from './RoutingDemo';
   ```

5. The `<Route>` component is the main building block of React Router. Anywhere that you want to only render something if it matches the location’s pathname, you should create a `<Route>` element. In RoutindDemo we add a Menu and a Main component:  

   ```
   export default RoutingDemo = () => (
       <div>
           <Header />
           <Main />
       </div>
   );
   ```

6. The path attribute is used to tell the router what component to render `<Route path='/somewhere'/>` will render a component if the URL of the browser has 'somewhere' at the beginning of its path. If the path doesn´t match anything. Nothing will be rendered. Use `switch` to group routes:  

   ```
   <Switch>
     <Route exact path='/' component={Home}/>
     {/* both /roster and /roster/:number begin with /roster */}
     <Route path='/roster' component={Roster}/>
     <Route path='/schedule' component={Schedule}/>
   </Switch>
   ```

7. component attribute is where we tell what component to render, when the path matches. (Alternatively us the `render={ somefunction that returns a component}`  

8. Follow this tutorial/exercise in class: [Quick start tutorial](https://docs.google.com/document/d/1o-VeUXFtrMHvkQ6HfuwHHgefiviFk1Uu_5BcpSsPWFg/edit#heading=h.iy6zb3ymcj3u)  

9. See what should be working for the comming friday: [Here](http://articlesviewer.surge.sh/)  

10. Example code from class [here](https://github.com/HartmannDemoCode/Sem3/tree/master/routerDemo)



See full example code in this [github gist](https://gist.github.com/Thomas-Hartmann/64624cf718f290e3cd6e699443d719d8)  