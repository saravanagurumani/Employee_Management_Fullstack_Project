import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmployeeForm from './components/users/AddEmployeeForm';
import ViewAllEmployee from './components/users/ViewAllEmployee';
import Updateemployee from './components/users/Updateemployee';
import ViewEmployeeByid from './components/users/ViewEmployeeByid';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-employee" element={<AddEmployeeForm />} />
          <Route exact path="/view-allemployee" element={<ViewAllEmployee />} />
          <Route exact path="/update-employee/:id" element={<Updateemployee />} />
          <Route exact path="/View-employee/:id" element={<ViewEmployeeByid />} />
        </Routes>
      </Router>
      {/* <Navbar />
      <Home /> */}

    </div>
  );
}

export default App;
