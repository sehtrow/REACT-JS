import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharactersContextProvider from './contexts/CharactersContext';
import DeathsContextProvider from './contexts/DeathsContext';
import Header from './components/Common/Header';
import BBCharacters from './components/Characters';
import Deaths from './components/Deaths';
import NotFound from './components/NotFound';
import "./assets/css/styles.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <CharactersContextProvider>
          <BBCharacters />
        </CharactersContextProvider>
      </Route>
      <Route path="/death/character/:name">
        <DeathsContextProvider>
          <Deaths />
        </DeathsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)


export default App;
