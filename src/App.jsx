import './App.css';
import { useState } from 'react';

function App() {
  const [zadatak, setZadatak] = useState([]);
  const [formData, setFormData] = useState({
    zadatak: ""
  });
  

  const handleSubmit = (event) => {
    event.preventDefault();

    setZadatak([...zadatak, { ...formData, id: 1 }]);
    setFormData({ zadatak: ""});
  };

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.zadatak]: event.target.value,
    }));
  };
  
  
  
  return (
    <div className="App">
    <form onSubmit={handleSubmit} className="mt-10 form-container">
      <label htmlFor="zadatak">Upiši zadatak</label>
      <input
        type="text"
        id="zadatak"
        name="zadatak"
        onChange={handleInputChange}
        value={formData.zadatak}
      />
    </form>
  </div>
  );
}

export default App;