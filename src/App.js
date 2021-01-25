import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./view/home";
import NotFound from './view/notfound';
import Header from './component/header';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState]= useState({
    user: null,
  });

  useEffect (() => {
    getUser("https://api.github.com/users/ClaudiaVargasSilva")
    return() => {

    }
  },[])

  /* const getUser = (url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      setState({
        ...state,
        user:data
      })
    })
  } */
  const getUser = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setState({
        ...state,
        user: data,
      });
    }catch(error){
      console.error(error.message);
    }
  };
  
  
  return (
    <>
      <BrowserRouter>
        <Header user={state.user}/>
        <div className="main-wrapper">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
