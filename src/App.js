import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import MainScreenComponent from './Pages/Main/MainScreenComponent';
import DepartmentsList from './Components/DepartmentsList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainScreenComponent />} />
        <Route path="/categories" element={<DepartmentsList />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
