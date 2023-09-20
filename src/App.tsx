import React from 'react';

import 'bulma/css/bulma.css';
import './styles/main.css';

import { UnitList } from './components/units';
import { About } from './components/about';
import { ProfessionalList } from './components/professionals';
import { Header } from './components/header';
import { Products } from './components/Products/products';

function App() {
  return (
    <>
      <Header />
      <About />
      <UnitList />
      <ProfessionalList />
      <Products />
    </>
  );
}

export default App;
