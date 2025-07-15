import './App.css';
import AddEmployees from './Componet/AddEmployees';
import ListEmployee from './Componet/ListEmployee';
import Header from './Componet/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element={<ListEmployee />} />
        
        {/* http://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<AddEmployees />} />

        {/* http://localhost:3000/edit-employee/1 */}
        <Route path='/edit-employee/:id' element={<AddEmployees />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
