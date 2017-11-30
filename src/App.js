import React from 'react';
import Hero from "./components/Hero/Hero";

import FlexiblePlataform from "./components/FlexiblePlataform/FlexiblePlataform";

import BringYourOwnBusiness from "./components/BringYourOwnBusiness/BringYourOwnBusiness";

import FollowTwitter from "./components/FollowTwitter/FollowTwitter";

import Caixa from "./components/Mara/Caixa";

var empresa = {
  razaoSocial: "bla",
  endereco: "rua Logo ali"
};

var vendedor = "Jake M";

var veiculo = {
  ano: 2010,
  modelo: "Mini Cooper S",
  miles: 1000,
  vin: "8998HHHHH"
};

var services = {
  service1:  {
    description: "asdasd",
    qty: 1,
    price: 45
  },
  service2: {
    description: "asdasd",
    qty: 1,
    price: 45
  },
  service3: {
    description: "asdasd",
    qty: 1,
    price: 45
  },
  service4: {
    description: "asdasd",
    qty: 1,
    price: 45
  }
};

export default () => (
  <div className="App">
    <Hero />
    <Caixa empresa={empresa} vendedor={vendedor} veiculo={veiculo} services={services} />
  </div>
);


