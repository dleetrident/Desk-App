import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Weather from "./Weather"

function App() {
  const [notes, setNotes] = useState([]);
  const [query,setQuery] = useState("")
  const [weather,setWeather] = useState({})
  const [weatherReturn,setWeatherReturn] = useState({
    type: "Weather Type",
    temp: "Temperature"
  })
  const [api,setApi] = useState("")
    const apiKey = "8802d4272ab9bfc1d6221ad1eb6895ee"
    const unit = "metric"
  const getWeather = () => {
    fetch(api)
      .then(response => response.json())
      .then(data => {setWeather(data)});
  }

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function handleClick(q){
    setQuery(q)
    setApi("https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units="+ unit + "&appid=" + apiKey)
    getWeather();
    setWeatherReturn({
      type: weather.weather[0].description,
      temp: weather.main.temp + "°C"
    });

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Weather weatherType={weatherReturn.type} weatherTemp={weatherReturn.temp} onQuery={handleClick}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
