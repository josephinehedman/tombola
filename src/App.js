import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './pages/About';
import Activity from './pages/Activity';
import Home from './pages/Home';

const App = () => {
  const [activity, setActivity] = useState('');
  const path = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : process.env.HEROKU_PATH;

  const getData = () => {
    fetch(path)
      .then(res => res.json())
      .then(data => setActivity(data))
      .catch(error => setActivity({ error }));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/tombola' exact>
            <Home getData={getData} />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Route path='/activity' exact>
            <Activity activity={activity} getData={getData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
