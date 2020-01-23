import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
function App() {
  return(
    <main className="app">
      <Header/>
      <Main/>
      <Footer/>
    </main>
  )
}

export default App;
