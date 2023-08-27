import Header from "./components/Header";
import './App.css';
import MainBody from "./components/MainBody";
import {useState} from 'react';
const App=()=>{
  const foodItems = [
    {
        name: "BOILED EGGS",
        price: 10,
        text: "Lorem ipsum dolor ",
        image: "/image/Ellipse 1.png",
        type: "breakfast",
    },
    {
        name: "RAMEN",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/image/Ellipse 2.png",
        type: "lunch",
    },
    {
        name: "GRILLED CHICKEN",
        price: 45,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/image/Ellipse 3.png",
        type: "dinner",
    },
    {
        name: "CAKE",
        price: 18,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/image/Ellipse 4.png",
        type: "breakfast",
    },
    {
        name: "BURGER",
        price: 23,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/image/Ellipse 5.png",
        type: "lunch",
    },
    {
        name: "PANCAKE",
        price: 25,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        image: "/image/Ellipse 6.png",
        type: "dinner",
    },
];
const [filterFood,setFilter]=useState(foodItems);
  
  const search=(e)=>{
    let a=e.target.value;
        if(a==="")
        {
        setFilter(foodItems);
        }
        else{
          setFilter(foodItems.filter(foodItems=>foodItems.name.toLowerCase().includes(a.toLowerCase())));
        }
    }
  const all=()=>{
    setFilter(foodItems);
  }
  const dinner=()=>{
    setFilter(foodItems.filter(foodItems=>foodItems.type.toLowerCase().includes("dinner")));
  }
  const breakfast=()=>{
    setFilter(foodItems.filter(foodItems=>foodItems.type.toLowerCase().includes("breakfast")));
  }
  const lunch=()=>{
    setFilter(foodItems.filter(foodItems=>foodItems.type.toLowerCase().includes("lunch")));
  }
  return(
    <>
    <Header onChange={search} all={all} dinner={dinner} lunch={lunch} breakfast={breakfast}/>
    <MainBody  foodItems={filterFood} />
    </>
  );
}
export default App;