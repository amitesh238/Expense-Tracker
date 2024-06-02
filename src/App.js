import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Form from './components/Form'
import { useState } from 'react';

function App() {

  const [isActiveForm, setIsActiveForm] = useState(false)

  const openForm = () => {
    setIsActiveForm(!isActiveForm)
  }

  return (
    <div className="App">
      <NavBar toggleForm={openForm} />
      <HomePage />

      <Form isVisible={isActiveForm} toggleForm={openForm} />
    </div>
  );
}

export default App;