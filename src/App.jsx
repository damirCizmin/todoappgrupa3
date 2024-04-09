// import "./App.css";
// import { useState } from "react";
// import Button from "./Components/addTodoButtonElement";

// function App() {
//   const [zadatci, setZadatci] = useState([]);
//   const [formData, setFormData] = useState({
//     zadatak: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setZadatci([...zadatci, formData]);
//     setFormData({ zadatci: "" });
//   };

//   const handleInputChange = (event) => {
//     setFormData(event.target.value);
//   };
//   // console.log(zadatak);

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit} className="mt-10 form-container">
//         <label htmlFor="zadatci">Upiši zadatak</label>
//         <input
//           type="text"
//           id="zadatci"
//           name="zadatci"
//           onChange={handleInputChange}
//           value={formData.zadatci}
//         />
//         <Button />
//         {/* <input type="submit" name="submit" value={"dodaj zadatak"} /> */}
//       </form>
//       <ul>
//         {zadatci.map((zadatak, index) => (
//           <li key={index}>{zadatak}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useState } from "react";
import Button from "./Components/addTodoButtonElement";

function App() {
  const [zadatci, setZadatci] = useState([]);
  const [formData, setFormData] = useState({
    zadatak: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setZadatci([...zadatci, { task: formData.zadatak, completed: false }]);
    setFormData({ zadatak: "" });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, zadatak: event.target.value });
  };

  const handleDelete = (index) => {
    const updatedTasks = [...zadatci];
    updatedTasks.splice(index, 1);
    setZadatci(updatedTasks);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...zadatci];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setZadatci(updatedTasks);
  };

  return (
   
    <div className="App">
      <form onSubmit={handleSubmit} className="mt-10 form-container">
        <label htmlFor="zadatci">Upiši zadatak</label>
        <input
          type="text"
          id="zadatci"
          name="zadatci"
          onChange={handleInputChange}
          value={formData.zadatak}
        />
        <Button />
      </form>
      <ul>
        {zadatci.map((zadatak, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={zadatak.completed}
              onChange={() => handleCheckboxChange(index)}
            />
            <span
              style={{
                textDecoration: zadatak.completed ? "line-through" : "none",
              }}
            >
              {zadatak.task}
            </span>
            <button className="delete" onClick={() => handleDelete(index)}>
              Izbriši zadatak
            </button>
          </li>
        ))}
      </ul>
    </div>
  
  );
}

export default App;
