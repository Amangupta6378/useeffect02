// import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
import {FilterData, apiUrl} from '../src/data';
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { useEffect, useState } from 'react';
import {toast} from "react-toastify";
import Spinner from './components/Spinner';


function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(FilterData[0].title)

  const fetchData = async()=>{
    setLoading(true)

    try{
      const response = await fetch(apiUrl);
      const output = await response.json();

      //save data into a variable
      setCourses(output.data);
      // console.log(output)
    }
    catch(error){
      toast.error("Something went wrong.")
    }
    setLoading(false)
  }

  useEffect(()=>{
    
    fetchData()
  },[])

  return (
    <div className="App">
      <Navbar/>
      <div className='bg-gray-400'>

      <Filter 
        FilterData ={FilterData}
        category={category}
        setCategory={setCategory}
      />
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h=[50vh]">
        {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
      </div>
      </div>
    </div>
  );
}

export default App;
