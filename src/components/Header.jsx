
import { useState } from 'react';
import '../components/Header.css';
import data from '../data.js'
const Header=({filter,setFilter,search})=>{
    console.log(setFilter,filter,data)
    const lists = [
        { id: 1, title: "all" },
        { id: 2, title: "breakfast" },
        { id: 3, title: "lunch" },
        { id: 4, title: "dinner" }
      ];
      const [selected, setSelected] = useState(0);
   
      const click=(row)=>{
        setSelected(row.id)
        console.log(row.id)
        if(row.id==1){
        setFilter(data);
        }else if(row.id==2){
      setFilter(data.filter(foodItems=>foodItems.type.toLowerCase().includes("breakfast")));
        }else if(row.id==3){
     setFilter(data.filter(foodItems=>foodItems.type.toLowerCase().includes("lunch")));
        }else{
      setFilter(data.filter(foodItems=>foodItems.type.toLowerCase().includes("dinner")));
        }
        }
      
    return(
        <main className='header'>
            <div className='topDiv'>
                <h2>F<span className='o'>oo</span>dy Z<span className='o'>o</span>ne</h2>
                <input type="search" name="" id="search" placeholder='Search Food....' onChange={search}/>
            </div>
            <div className='foodOption'>
            {lists.map((list) => (
        <button
          key={list.id}
          name={list.title}
         onClick={()=>click(list)}
          style={
            { backgroundColor: list.id === selected ? "green" : "red" }
        }
        className='button'
        >
          {list.title}
        </button>))}
            </div>
            
        </main>
    );
}
export default Header;