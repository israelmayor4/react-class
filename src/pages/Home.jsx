// src/pages/Home.jsx
import { useState } from "react"
import { Card } from "../Card" // Adjust paths to go up one folder level
import ToDo from "../ToDo"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../Component/Navbar"
import { Sidebar } from "../Component/Sidebar"

export const Home = () => {
  const [count, setCount] = useState(0)
  const name = "ayo"
  const age = 8
  const user = {
    name: "Tayo",
    age: 41,
    country: "Canada",
    gender: "female",
    active: true
  }

  const [email, setEmail] = useState("")
  const [showEmail, setShowEmail] = useState('')
  const navigate = useNavigate() // 🧭 Hook to handle page routing programmatically

  const handleIncrement = () => {
    setCount(count + 1)
    console.log(count)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    console.log(count)
  }

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handleShowEmail = () => {
    setShowEmail(email)
  }

  const product = [
    { id: 1, title: "Bag", price: 1000, description: "This is a bag", rating: 5 },
    { id: 2, title: "Book", price: 1000, description: "This is a Book", rating: 4 },
    { id: 3, title: "Jug", price: 1000, description: "This is a Jug", rating: 2 },
    { id: 4, title: "Phone", price: 3000, description: "This is a Phone", rating: 5 },
    { id: 5, title: "laptop", price: 5000, description: "This is a laptop", rating: 5 }
  ]

  return (
    <div className="home">
      

      <Navbar style={{}} />


      <div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {/* Navigates directly to /design when clicked */}
        <button 
          onClick={() => navigate('/design')}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Go to SQI Page →
        </button>
      </div>

      <label htmlFor="">email
        <input className="emailInput" onChange={handleInputChange} value={email} type="email"/>
        <button onClick={handleShowEmail}>Show</button>
        <p>User email: {showEmail}</p>
      </label>
      
      <h1>count: {count}</h1>
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
        <ToDo />
      </main>
    </div>

    </div>
  )
}
