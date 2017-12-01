import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

import FlexiblePlataform from "./components/FlexiblePlataform/FlexiblePlataform";

import BringYourOwnBusiness from "./components/BringYourOwnBusiness/BringYourOwnBusiness";
import Teste from "./components/Features/Teste"
import FollowTwitter from "./components/FollowTwitter/FollowTwitter";


var empresa={
  razaoSocial:"Eurotech Motors, LLC",
  enderecoRua:"555, Water Towers Court",
  enderecoPais: "Holland, MT42942"
}

var vendedor={
  nome: "Jake Montgomery"
}

var veiculo={
  ano:2010,
  modelo:"ML Mini Cooper 5",
  milhas: 31209,
  vin: "0000000HHAA313131"
}

var servicos={
  servico1:{
    descricao: "Tensioner",
    qtde: 1,
    price: 45,    
  },

  servico2:{
    descricao: "Oil Filter",
    qtde: 1,
    price: 103.00,    
  },

  servico3:{
    descricao: "Bilstein 5100 Shocks",
    qtde: 4,
    price: 200.00,    
  },

  servico4:{
    descricao: "Labour (per hour)",
    qtde: 14,
    price: 70.00    
  }
  
}

var taxa={
  valor:115.68
} 

var subtotal= (servicos.servico4.qtde)*(servicos.servico4.price)+
(servicos.servico3.qtde)*(servicos.servico3.price)+
(servicos.servico2.qtde)*(servicos.servico2.price)+
(servicos.servico1.qtde)*(servicos.servico1.price) + taxa.valor


export default () => (
  <div className="App">
    <Hero />
    <Teste empresa={empresa} vendedor={vendedor} veiculo={veiculo} taxa={taxa}  servicos={servicos} subtotal={subtotal}/>

  </div>
);


