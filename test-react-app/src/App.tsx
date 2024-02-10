import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List';
import axios from 'axios';
function App() {
  const [count, setCount] = useState("");
  const [result,setResult] = useState<(string | number)[]>([])

  const calculate = async() =>{
    try{
      await axios.post(`http://localhost:3000/fizzbuzz/${count}`)
      setCount("");
      setResult([]);
    }catch(err){
      console.log(err)
    }
  }


  const fetchList = async () =>{
     try{
      const sam = await axios.get(`http://localhost:3000/fizzbuzz`);
      setResult(sam.data)
     } catch(err){
      console.log(err)
     }
  }

  useEffect(()=>{

     fetchList()

  },[count,result])

  return (
    <>
     <Input count={count} setCount={setCount} />
      <Button calculate={calculate}/>
      <List result={result} />
    </>
  )
}

export default App
