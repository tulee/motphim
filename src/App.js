import './App.css';
// import { useState } from "react";
import ThemeContextProvider from './context/ThemeContext';
// import SearchBar from './components/SearchBar/SearchBar';
// import FilmList from './components/FilmList/FilmList';
import { Route, Routes } from 'react-router-dom';
// import FilmSeachList from './components/FilmSearchList/FilmSearchList';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

return (
    <div className="App">
     <Routes>
      <Route path='/vn' element = {<Home></Home>}></Route>
      <Route path='/login' element= {<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
