import React from "react";
import "./teste.css"

export default (props) => (

    <table className="tabelafeatures">
        <tr>
        <th colspan="4" class="tabelafeatures__destaque">{props.empresa.razaoSocial}</th>
        </tr>
        <tr className="tabelafeatures__protocolo">
        <td>{props.empresa.enderecoRua}<p>{props.empresa.enderecoPais}</p></td> 
        <td colspan="2"></td>
        <td><p>Estimate #121212121</p>
            <p>Progress Code 3110556</p></td>
        </tr>
        <tr>
        <td colspan="4"></td>
        </tr>
        
        <tr>
        <td className="teste" colspan="4"></td>
        </tr>
        
        <tr>
        <td>Prepared for<p className="tabelafeatures__destaque-vendedor">{props.vendedor.nome}</p></td>
        <td></td>
        <td></td>
        <td>Vehicle 
            <p className="tabelafeatures__destaque-carro"> {props.veiculo.modelo}</p>
            <p className="tabelafeatures__destaque-carro">Miles: {props.veiculo.milhas}</p>
            <p className="tabelafeatures__destaque-carro">VIN {props.veiculo.vin}</p></td>
        </tr>
        <tr>
        <td className="teste borda" colspan="4"></td>
        </tr>
        <tr className="tabelafeatures__itens">
        <td >Description:</td>
        <td>Qtde</td>
        <td>Price</td>
        <td className="alinhamento">Amount</td>
        </tr>
        
        <tr>
        <td>{props.servicos.servico1.descricao}</td>
        <td>{props.servicos.servico1.qtde}</td>
        <td>${props.servicos.servico1.price}</td>
        <td class="alinhamento">$ {props.servicos.servico1.qtde*props.servicos.servico1.price}</td>
        </tr>
        
        <tr>
        <td>{props.servicos.servico2.descricao}</td>
        <td>{props.servicos.servico2.qtde}</td>
        <td>${props.servicos.servico2.price}</td>
        <td class="alinhamento">$ {props.servicos.servico2.qtde*props.servicos.servico2.price}</td>
        </tr>

        <tr>
        <td>{props.servicos.servico3.descricao}</td>
        <td>{props.servicos.servico3.qtde}</td>
        <td>${props.servicos.servico3.price}</td>
        <td class="alinhamento">$ {props.servicos.servico3.qtde*props.servicos.servico3.price}</td>
        </tr>

        <tr>
        <td>{props.servicos.servico4.descricao}</td>
        <td>{props.servicos.servico4.qtde}</td>
        <td>${props.servicos.servico4.price}</td>
        <td class="alinhamento">$ {props.servicos.servico4.qtde*props.servicos.servico4.price}</td>
        </tr>
        
        <tr>
        <td className="teste borda" colspan="4"></td>
        </tr>
        
        <tr>
        <td></td>
        <td>Subtotal</td>
        <td></td>
        <td className="alinhamento">${props.subtotal}</td>
        </tr>
        
        <tr>
        <td></td>
        <td>Tax</td>
        <td></td>
        <td className="alinhamento">${props.taxa.valor}</td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        <tr>
        <td></td>
        <td>TOTAL</td>
        <td></td>
        <td className="alinhamento">${props.subtotal+props.taxa.valor}</td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        
        <tr>
        <td className="teste" colspan="4"></td>
        </tr>
        
        <tr>
        <td > <p className="button"><a className="button_link"href="">approve</a></p></td>
        <td colspan="2"></td>
        <td> 
            <p className="button modified">
                <a className="button_link" href="">decline</a>
            </p>
        </td>

        </tr>
  </table>
);