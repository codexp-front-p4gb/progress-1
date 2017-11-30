import React from "react";
import "./Caixa.css";


export default (props) => (
    <div>
        {/* {<p>{props.vendedor}</p>}  */}

        <table className="tabela-de-precos">
            <tr className="tabela-de-precos__linha-titulo">
                <th className="item-tabela-de-precos item-titulo-tabela-de-precos">Description</th>
                <th className="item-tabela-de-precos item-titulo-tabela-de-precos">Qty</th>
                <th className="item-tabela-de-precos item-titulo-tabela-de-precos" >Price</th>
                <th className="item-tabela-de-precos item-titulo-tabela-de-precos" >Amount</th>
            </tr>
            <tr className="tabela-de-precos__linha" >
                <td className="item-tabela-de-precos">{props.services.service1.description}</td>
                <td className="item-tabela-de-precos" >{props.services.service1.qty}</td>
                <td className="item-tabela-de-precos">{props.services.service1.price}</td>
                <td className="item-tabela-de-precos">{props.services.service1.qty * props.services.service1.price}</td>
            </tr>
            <tr className="tabela-de-precos__linha">
                <td className="item-tabela-de-precos">{props.services.service2.description}</td>
                <td className="item-tabela-de-precos">{props.services.service2.qty}</td>
                <td className="item-tabela-de-precos">{props.services.service2.price}</td>
                <td className="item-tabela-de-precos">{props.services.service2.qty * props.services.service2.price}</td>
            </tr>
            <tr className="tabela-de-precos__linha">
                <td className="item-tabela-de-precos">{props.services.service3.description}</td>
                <td className="item-tabela-de-precos">{props.services.service3.qty}</td>
                <td className="item-tabela-de-precos">{props.services.service3.price}</td>
                <td className="item-tabela-de-precos">{props.services.service3.qty * props.services.service3.price}</td>
            </tr>
            <tr className="tabela-de-precos__linha">
                <td className="item-tabela-de-precos">{props.services.service4.description}</td>
                <td className="item-tabela-de-precos">{props.services.service4.qty}</td>
                <td className="item-tabela-de-precos">{props.services.service4.price}</td>
                <td className="item-tabela-de-precos">{props.services.service4.qty * props.services.service4.price}</td>
            </tr>
            <tr className="tabela-de-totais__linha">
                <td colspan="2" className="titulo">item1</td>
                <td colspan="2" className="valor">item2</td>
            </tr>
            <tr className="tabela-de-totais__linha">
                <td colspan="2" className="titulo">item1</td>
                <td colspan="2" className="valor">item2</td>
            </tr>
            <tr className="tabela-de-totais__linha">
                <td colspan="2" className="titulo titulo-total">item1</td>
                <td colspan="2" className="valor valor-total">item2</td>
            </tr>
        </table>
    </div> 
);