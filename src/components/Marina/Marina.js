import React from "react";
import "./Marina.css";



export default (props) => (  
    <table className="tabela">
        <tr className="tabela__titulo">
            <th>Description</th>
            <th>Qtd</th>
            <th>Price</th>
            <th>Amount</th> 
        </tr>
        <tr>
            <td>{props.servicos.servico1.descricao}</td>
            <td>{props.servicos.servico1.qty}</td>
            <td>{props.servicos.servico1.preco}</td>
            <td>{props.servicos.servico1.qty*props.servicos.servico1.preco}</td>
        </tr>
    
        <tr>
            <td>{props.servicos.servico2.descricao}</td>
            <td>{props.servicos.servico2.qty}</td>
            <td>{props.servicos.servico2.preco}</td>
            <td>{props.servicos.servico2.qty*props.servicos.servico2.preco}</td>
        </tr>
    
        <tr>
            <td>{props.servicos.servico3.descricao}</td>
            <td>{props.servicos.servico3.qty}</td>
            <td>{props.servicos.servico3.preco}</td>
            <td>{props.servicos.servico3.qty*props.servicos.servico3.preco}</td>
        </tr>
    
        <tr>
            <td>{props.servicos.servico4.descricao}</td>
            <td>{props.servicos.servico4.qty}</td>
            <td>{props.servicos.servico4.preco}</td>
            <td>{props.servicos.servico4.qty*props.servicos.servico4.preco}</td>
        </tr>

        <tr className="tabela__tabela--total">
            <td></td>
            <td className="tabela__titulo">Subtotal</td>
            <td></td> 
            <td>{props.servicos.servico1.qty*props.servicos.servico1.preco + props.servicos.servico2.qty*props.servicos.servico2.preco + props.servicos.servico3.qty*props.servicos.servico3.preco + props.servicos.servico4.qty*props.servicos.servico4.preco}</td> 
        </tr> 

        <tr>
            <td></td>
            <td className="tabela__titulo">Tax</td>
            <td></td>
            <td>{props.taxa}</td>
        </tr>

        <tr>
            <td></td>
            <td className="tabela__titulo">Total</td>
            <td></td>
            <td>{(props.servicos.servico1.qty*props.servicos.servico1.preco + props.servicos.servico2.qty*props.servicos.servico2.preco + props.servicos.servico3.qty*props.servicos.servico3.preco + props.servicos.servico4.qty*props.servicos.servico4.preco) + props.taxa} </td>
        </tr>
    
    </table>
 
 
    /*<input type="text" value="approve" className="botao">*/
    /* <input type="text" value="decline" className="botao"> */

)