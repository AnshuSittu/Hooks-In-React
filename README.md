# Hooks-In-React
Namste React Episode 5 Lets get hooked 


#Foor Ordering app
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 Why React is FAST ???
read full article 

>Make a separate file for Every Component 

<b>There are two types of Export/import</b>
 >Default Export
   export default Component
   import Component from "path";
   
 >Named Export 
    export const Component;
	import {Component} from "path";

Never keep hard-coded string in a components file	
the common practice is to keep in a separate file in constent.js or Utils.js
 
>when you have to  export used named export 

 
 
**can we use named default export at the same time in react.

>You can combine default and named exports in a single file. Importing is the same, named exports are in curly brackets, default is plaintext. React is a great example 
 of a library that exports both default and named components.

<b> How to Handle OnClick Event IN JSX</b>

>SO in react if you have to add event handler 
>so on the button you have do some even on Click
>here you have to pass an attribute OnClick
>and this OnClick takes a call back function
>this is the function which is called OnClick

 <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Top Rated Restaurant
        </button>

>on clicked of this button only high rating list should displayed 

<b>How to give logic for filter </b>

>whenever there is react app there is two layers one is data layer and another is UI layer
 UI layer will display whatever data layer Data sent
 
>in data layer we have two Restaurant Object and UI display two card 


<b>TypeError: Assignment to constant variable.</b>
>this is caused due to variable is assigned as const and we are changing is so throwing error
>so change this variable to "Let"
 
 
<b>So if we have to keep data layer and UI layer consistence with each other that is where React comes in picture</b>
>so here we want to change the UI along with data as data chnages the UI should change 
>so for this we have to use State Variable 

STATE is a Key word 

 
<b>React Hooks</b>

>A React Hook is normal JS function which is given to us by react 
>we will have to import this utility function 
>it is written inside the react which we import
>its a normal JS utility function 

How to use this
>we have to import this function 
>there are multiple react hooks

 

>There are TWO very Important Hooks

  <b> I> useState():</b>
   >it is use to create state variable in react
   >it is called as state variable because it maintain the state of components
   
   > A local state variable scope that components

How to create State Variable

const [ListOfRestaurant] = useState();

>when you call the useState() it will give a state variable

How Do you receive that state variable
   const [] = useState();
   inside an array
   
   State Variable
   const [ListOfRestaurant] = useState();
   
   Normal JS variable
   let ListOfRestro = [];
   
 >so we gave the empty array as default value similarly we pass 
  default value over useState([]) over here in state variable.

>So whatever we pass here useState([]) over here become the
 default value of [ListOfRestaurant]this variable
    
	const [ListOfRestaurant] = useState([{null}]);
	so if we pass null value over useState then ListOfRestaurant value become null 
	
 const [ListOfRestaurant] = useState([{
 data:{
 
 }
 }]);
 so if we pass data of one Restaurant here it become default value of ListOfRestaurant likewise
 This how we pass default value to our list variable.
 
How you use this variable.
>Now we use this variable normally 

Now How to modify this list of Restaurant.
>Now to modify this, it will be modify by a function 
 and this function comes as second parameter in array as [setListOfRestaurant]
 
     const [ListOfRestaurant,setListOfRestaurant] = useState([{ data:{}]);
	 
>you can name whatever but as per the best practice we put set before name of variable
>its not mandatory
>so setListOfRestaurant is used to update the list

** Now onClick of the btn we want to update with new list so for that we can not give =
    
	you have to call setListOfRestaurant and pass the new data which I wanted to push inside it 
     	
1:36:30 video 

<b>whenever a state variable update react re-render the components</b>
<b>whenever a state variable changes react will re-render the components</b>

		

>if it is normal JS then the UI will not update but with help of hooks now UI will update as well
<b>as soon as I change my state variable react automatically refresh that components </b>
 



   
   > we have to import useState from react
   >it have to be import as named import 
     import {useState} from "react";
   > it is called as state variable because it maintain the state of variable   
	Local State Variable 
      > const {ListOfRestro] = useState();  
   Local Normal JS variable   
     >Let ListOfRestro = null;  
> when ever a state variable update react will re-render my components   
>React make this DOM operation super fast      
 <b> II> useEffect(): </b>
  
  
<b> React uses Reconciliation algorithm it is also know as "REACT FIBER"</b>

 

Actual DOM are the tags 
   <div>
       <div>
	         <div>
			        <img/>
			 </div>
	   </div>
   </div>
  
>Virtual DOM is the representation of Actual DOM  
>virtual DOM is those react element

>React Virtual is nothing but normal JS object 


> React do Efficient DOM Manipulation is one of the region of being FAST
> as it has virtual DOM


** Diff algorithm
> find out the difference between two virtual DOM i.e from
  updated virtual DOM and previous Virtual DOM
> it will calculate the difference and update the DOM on every render cycle   
> IN react 16 Reconciliation Algorithm comes
>whenever there is change in any state variable then React will find the difference 
 between the virtual DOM and it will re-render our components and update the DOM
 > study this link
     https://github.com/acdlite/react-fiber-architecture
	 
	 
Why React is FAST
> Because react is doing efficient DOM manipulation as it has virtual DOM
> it has Diff Algorithm
> it can find out the difference and update UI 
>  
 