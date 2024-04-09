import "./App.css";
import { useState } from "react";

function App() {
  const [zadatci, setZadatci] = useState([]);
  const [formData, setFormData] = useState({
    zadatak: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setZadatci([...zadatci, formData]);
    setFormData({ zadatci: "" });
  };

  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };
  // console.log(zadatak);

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="mt-10 form-container">
        <label htmlFor="zadatci">Upiši zadatak</label>
        <input
          type="text"
          id="zadatci"
          name="zadatci"
          onChange={handleInputChange}
          value={formData.zadatci}
        />
        <input type="submit" name="submit" value={"dodaj zadatak"} />
      </form>
      <ul>
        {zadatci.map((zadatak, index) => (
          <li key={index}>{zadatak}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
