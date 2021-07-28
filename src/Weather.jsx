import React,{useState} from "react"

function Weather(props){
  const [query,setQuery] = useState("")



  function handleChange(e){
    setQuery(e.target.value)

  }


return (  <div className="note">

    <form>
    <h1>{props.weatherType}</h1>
    <p>{props.weatherTemp}</p>
    <input placeholder="Input Location" onChange={handleChange} value={query}></input>
    <button type="submit" onClick={(e) => {props.onQuery(query); e.preventDefault()}}>Enter</button>
    </form>
  </div>)
}

export default Weather
