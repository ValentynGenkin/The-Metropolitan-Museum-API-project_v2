import { Route, Routes } from 'react-router-dom';
import MainScreenComponent from './Pages/Main/MainScreenComponent';
import DepartmentExhibits from './Pages/Department/DepartmentExhibits';
import Layout from './Components/Layout';
import DepartmentsList from './Pages/ArtDepartments/DepartmentsList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainScreenComponent />} />
        <Route path="/categories" element={<DepartmentsList />} />
        <Route
          path="/categories/:category/:id"
          element={<DepartmentExhibits />}
        />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
