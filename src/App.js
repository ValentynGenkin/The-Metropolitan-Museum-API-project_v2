import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import MainScreenComponent from './Components/MainScreenComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainScreenComponent />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
