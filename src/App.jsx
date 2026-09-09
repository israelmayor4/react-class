// function App() {
//   return (
//     <div>hello Word</div>
//   )
// }

import { Card } from "./Card"
import  ToDo  from "./ToDo"
import './App.css'
import { useState } from "react"





export const App = () => {

  const [count, setCount] = useState(0)
  // let count = 0
  const name = "ayo"
  const age = 8
  const user = {
    name: "Tayo",
    age: 41,
    country: "Canada",
    gender: "female",
    active: true
  }


  // const handleIncrement = () => {
  //   count++
  //   console.log(count);

  // }

  const handleIncrement = () => {
    setCount(count + 1)
    console.log(count);

  }

  const handleDecrement = () => {

    if (count > 0) {
      setCount(count - 1)
    }
    
    console.log(count);

  }
  // console.log(count);
  const product = [
    {
      id: 1,
      title: "Bag",
      price: 1000,
      description: "This is a bag",
      rating: 5
    },
    {
      id: 2,
      title: "Book",
      price: 1000,
      description: "This is a Book",
      rating: 4
    }
    ,
    {
      id: 3,
      title: "Jug",
      price: 1000,
      description: "This is a Jug",
      rating: 2
    }
    ,
    {
      id: 4,
      title: "Phone",
      price: 3000,
      description: "This is a Phone",
      rating: 5
    },
    {
      id: 5,
      title: "laptop",
      price: 5000,
      description: "This is a laptop",
      rating: 5
    }
  ]

  const [email, setEmail] = useState("");
  const [showEmail, setShowEmail] = useState('');
  
  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }



  const handleShowEmail = () => {
    setShowEmail(email);
  
  }


  return (
    <div>


    <label htmlFor="">email
      <input className="emailInput" onChange={handleInputChange} value= {email} type="email"/>
      <button onClick={handleShowEmail}>Show</button>

      <p>User email: {showEmail}</p>
    </label>
      


      <h1>count: {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <h1>Hello world</h1>
      <p className="p">Here is a p tag</p>
      <p>{name}</p>
      <p>Age {age}</p>

      <h1>{user.name} Profile</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}, {user.name} is a {user.age < 18 ? "child" : user.age >= 18 && user.age <=40 ? "Adult": "Old man"}</li>


        <li>Country: {user.country}</li>
        <li>Gender: {user.gender}</li>
        <li>{user.name} is {user.active ? "active" : "not active"}</li>
      </ul>


      {product.map((prod, i) => (
        <ul key={i}>
          <li>{prod.title.toUpperCase()}</li>
          <li>{prod.description}</li>
          <li>${prod.price}</li>
          <li>{prod.rating}</li>
        </ul>
      ))}



      <Card />

      
        <main>
        {/* 2. Place your new ToDo component wherever you want it to appear */}
        <ToDo />
      </main>
  



    </div>


  )
}

// export default App