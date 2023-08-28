import Header from "./components/Header";
import './App.css';
import MainBody from "./components/MainBody";
import {useState} from 'react';
import data from './data.js'
const App=()=>{
  console.log(data);
const [filterFood,setFilter]=useState(data);
  
  const search=(e)=>{
    let a=e.target.value;
        if(a==="")
        {
        setFilter(data);
        }
        else{
          setFilter(data.filter(foodItems=>foodItems.name.toLowerCase().includes(a.toLowerCase())));
        }
    }
  return(
    <>
    <Header filter={filterFood} setFilter={setFilter} search={search}/>
    <MainBody  foodItems={filterFood} />
    </>
  );
}
export default App;