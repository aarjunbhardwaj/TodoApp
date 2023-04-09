import React, { useState } from 'react';
import todo from "./images/todo.svg";
import style from '../style.css';

const Todo = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);
    const addItem = () =>{
        if(!inputData){

        } else {
            setItems([...items,inputData]);
            setInputData('');
               }
        }
     const deleteItem = (id) =>{
        console.log(id);
        const updateItems = items.filter((elem,ind)=>{
            return ind !== id;
        });
        setItems(updateItems);
     }
      
     const removeAll = () =>{
        setItems([]);
     }

  return (
    <>
    <div className='main-div'>
        <div className='child-div'>
        <figure>
            <img src={todo} alt='todologo'/>
            <figcaption> Add Your List  </figcaption>
        </figure>
        <div className='addItems'>
            <input type={Text} placeholder="Add items" 
            value = {inputData}
            onChange={(e)=>setInputData(e.target.value)}
            />
            <i className="fa fa-plus add-btn" title='add item' onClick={addItem}></i>
        </div>
        <div className='showItems'>
        {
            items.map((elem,ind)=>{
             return(
                <div className='eachItem' key={ind}>
                <h3> {elem} </h3>
                <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=>deleteItem(ind)}></i>
            </div>
             )
            })
        }
            
            <div className='showItems'>
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll} > <span> Check List </span> </button>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Todo