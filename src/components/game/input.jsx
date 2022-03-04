import React, { useState } from "react";
import { Link } from "react-router-dom";

const Input = props => {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState("")

  const handleChange = e => {
    setCity(e.target.value)
  }

  const submitCity = e => {
    e.preventDefault()
    setCities([...cities, city])
    setCity("")
  }

  return (
    <div id='inputwrap'>
      <Link to='/'><button>Home</button></Link>
      <h1>Citadle</h1>
      <form onSubmit={submitCity}>
        <input type="text" onChange={handleChange} value={city} />
      </form>
      {cities.map((city, i) => (
        <div key={i} className="citywrap">{city.toUpperCase().split('').map(
          (char, i) => {
            if (char === " "){return(
              <div key={`c${i}`} className="blank">{char}</div>
            )}
            return(
              <div key={`c${i}`} className="char">{char}</div>
            )
          }
          )}</div>
      ))}
    </div>
  )
}

export default Input