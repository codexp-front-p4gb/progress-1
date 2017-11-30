import React from 'react';
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import BringYourOwnBusiness from  "./components/BringYourOwnBusiness/BringYourOwnBusiness";
import FlexiblePlataform from "./components/FlexiblePlataform/FlexiblePlataform";
import FollowTwitter from "./components/FollowTwitter/FollowTwitter";
import Footer from "./components/Footer/Footer";
import Marina from "./components/Marina/Marina";

export default () => (
  <div className="App">
    <Hero />
    <Features />
    <BringYourOwnBusiness />
    <FlexiblePlataform />
    <FollowTwitter />
    <Footer />
    <Marina empresa={empresa} vendedor={vendedor} servicos={servicos} taxa={taxa}/>
  </div>
);

var empresa = {
  razaoSocial: "jps social",
  endereco: "Rua dos maros, 821"
};


var vendedor = "JoCosta";

var veiculo = {
  ano: 2010,
  modelo: "Mini Couper",
  milhas: 1000,
  vin: "000000#####"
};

var servicos = {

  servico1: {
    descricao:"Tensioner",
    qty:1,
    preco:45 
  },

 servico2: {
    descricao:"Oil Filter",
    qty:1,
    preco:103 
  },

 servico3: {
    descricao:"Bilstein",
    qty:4,
    preco:200 
  },

  servico4: {
    descricao:"Labor",
    qty:14,
    preco:70 
  }

 
};

var taxa = 115.68;




