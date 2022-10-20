import React, { useState,useEffect } from 'react';


import logo from './logo.svg';
import './App.css';


function App() {

  const [count, setCount] = useState(0);



  useEffect(() => {

        getCount();    
      

  },[]);


  // calling API using fetch

  /* get count */
  const getCount = ()=>{
  const url = 'http://localhost:3000/count';
  const requestOptions = {
        method: 'GET',
    };

  fetch(url,requestOptions).then((response) => response.json())
    .then((data) => setCount(data.count)  );

  }


  /* set count*/

  const setCountAPI = (count)=>{

  console.log('count',count)

  const url = 'http://localhost:3000/count/';
  const requestOptions = {
        method: 'PUT',
        headers: {'Accept': 'application/json','Content-Type': 'application/json' },
        body: JSON.stringify({count: count})
    };

  fetch(url,requestOptions).then((response) => response.json())
    .then((data) => setCount(data.count) ).catch(error => (console.log(error)));;

  }





  const setCounter =()=>{

      const newCounterValue = count + 1;
      setCountAPI(newCounterValue)
  }


  return (

    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCounter() }>  
        Click me
      </button>
    </div>



  );
}

export default App;


