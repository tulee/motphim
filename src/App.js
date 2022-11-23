import './App.css';
import { useState } from "react";
import ThemeContextProvider from './context/ThemeContext';
import SearchBar from './components/SearchBar/SearchBar';
import FilmList from './components/FilmList/FilmList';
import { Route, Routes } from 'react-router-dom';
import FilmSeachList from './components/FilmSearchList/FilmSearchList';


function App() {

  return (
    <ThemeContextProvider>
        <div className="container">
        </div>
    </ThemeContextProvider>
  );
}

export default App;
