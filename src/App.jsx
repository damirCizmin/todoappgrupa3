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
//     setZadatci([...zadatci, { task: formData.zadatak, completed: false }]);
//     setFormData({ zadatak: "" });
//   };

//   const handleInputChange = (event) => {
//     setFormData({ ...formData, zadatak: event.target.value });
//   };

//   const handleDelete = (index) => {
//     const updatedTasks = [...zadatci];
//     updatedTasks.splice(index, 1);
//     setZadatci(updatedTasks);
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedTasks = [...zadatci];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setZadatci(updatedTasks);
//   };

//   return (
   
//     <div className="App">
//       <form onSubmit={handleSubmit} className="mt-10 form-container">
//         <label htmlFor="zadatci">Upiši zadatak</label>
//         <input
//           type="text"
//           id="zadatci"
//           name="zadatci"
//           onChange={handleInputChange}
//           value={formData.zadatak}
//         />
//         <Button />
//       </form>
//       <ul>
//         {zadatci.map((zadatak, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={zadatak.completed}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             <span
//               style={{
//                 textDecoration: zadatak.completed ? "line-through" : "none",
//               }}
//             >
//               {zadatak.task}
//             </span>
//             <button className="delete" onClick={() => handleDelete(index)}>
//               Izbriši zadatak
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
  
//   );
// }

// export default App;




// import "./App.css";
// import { useState } from "react";
// import Button from "./Components/addTodoButtonElement";
// import logo from './Components/logos/logo.png';


// function App() {
//   const [zadatci, setZadatci] = useState([]);
//   const [formData, setFormData] = useState({
//     zadatak: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (formData.zadatak.trim() !== "") {
//       setZadatci([...zadatci, { task: formData.zadatak, completed: false }]);
//       setFormData({ zadatak: "" });
//     } else {
//       const alertElement = document.createElement('div');
//       alertElement.classList.add('alert');
//       alertElement.textContent = 'ALOOOOO!! Nije ništa upisano u polje!! Što da spremim???';
//       document.querySelector('.form-container').appendChild(alertElement);
//       setTimeout(() => {
//         alertElement.remove();
//       }, 4000);
//     }
//   };
//   const handleInputChange = (event) => {
//     setFormData({ ...formData, zadatak: event.target.value });
//   };

//   const handleDelete = (index) => {
//     const updatedTasks = [...zadatci];
//     updatedTasks.splice(index, 1);
//     setZadatci(updatedTasks);
//   };

//   const handleCheckboxChange = (index) => {
//     const updatedTasks = [...zadatci];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setZadatci(updatedTasks);
//   };

//   return (
   
//     <div className="App">
//        <img className="logo" src={logo} alt="Logo" />
//       <form onSubmit={handleSubmit} className="mt-10 form-container">
//         <label htmlFor="zadatci">Upiši zadatak...</label>
//         <input
//           type="text"
//           id="zadatci"
//           name="zadatci"
//           onChange={handleInputChange}
//           value={formData.zadatak}
//           placeholder="... ovdje"
//         />
//         <Button />
//       </form>
//       <ul>
//         {zadatci.map((zadatak, index) => (
//           <li key={index}>
//             <input
//               type="checkbox"
//               checked={zadatak.completed}
//               onChange={() => handleCheckboxChange(index)}
//             />
//             <span
//               style={{
//                 textDecoration: zadatak.completed ? "line-through" : "none",
//               }}
//             >
//               {zadatak.task}
//             </span>
//             <button className="delete" onClick={() => handleDelete(index)}>
//               Izbriši zadatak
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
  
//   );
// }

// export default App;

import "./App.css";
import { useState, useEffect } from "react";
import Button from "./Components/addTodoButtonElement";
import logo from './Components/logos/logo.png';

function App() {
  // Inicijalno stanje za 'zadatci' koristi 'localStorage' ako postoje spremljeni zadatci
  const [zadatci, setZadatci] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem("zadatci"));
    return savedTasks || [];
  });

  const [formData, setFormData] = useState({
    zadatak: "",
  });

  // Funkcija za spremanje podataka u lokalno pohranjivanje kada se zadatak promijeni
  useEffect(() => {
    localStorage.setItem("zadatci", JSON.stringify(zadatci));
  }, [zadatci]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.zadatak.trim() !== "") {
      setZadatci([...zadatci, { task: formData.zadatak, completed: false }]);
      setFormData({ zadatak: "" });
    } else {
      const alertElement = document.createElement('div');
      alertElement.classList.add('alert'); // Vraćamo originalnu klasu 'alert'
      alertElement.textContent = 'ALOOOOO!! Nije ništa upisano u polje!! Što da spremim???';
      document.querySelector('.form-container').appendChild(alertElement);
      setTimeout(() => {
        alertElement.remove();
      }, 4000);
    }
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
      <img className="logo" src={logo} alt="Logo" />
      <form onSubmit={handleSubmit} className="mt-10 form-container">
        <label htmlFor="zadatci">Upiši zadatak...</label>
        <input
          type="text"
          id="zadatci"
          name="zadatci"
          onChange={handleInputChange}
          value={formData.zadatak}
          placeholder="... ovdje"
        />
        <Button />
      </form>
      <ul>
        {zadatci.map((zadatak, index) => (
          <li key={index}>
            <label className="task-label">
              <input
                type="checkbox"
                checked={zadatak.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span
                className="task-text"
                style={{
                  textDecoration: zadatak.completed ? "line-through" : "none",
                }}
              >
                {zadatak.task}
              </span>
            </label>
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

