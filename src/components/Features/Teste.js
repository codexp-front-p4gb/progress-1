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
        <td>1</td>
        <td>$45.00</td>
        <td class="alinhamento">$45.00</td>
        </tr>
        <tr>
        <td>Oil Filter</td>
        <td>1</td>
        <td>$103.00</td>
        <td className="alinhamento">$103.00</td>
        </tr>
        <tr>
        <td>Bilstein 5100 Shocks</td>
        <td>4</td>
        <td>$200.00</td>
        <td className="alinhamento">$800.00</td>
        </tr>
        
        <tr>
        <td>Labour (per hour)</td>
        <td>14</td>
        <td>$70.00</td>
        <td className="alinhamento">$980.00</td>
        </tr>
        
        <tr>
        <td className="teste borda" colspan="4"></td>
        </tr>
        
        <tr>
        <td></td>
        <td>Subtotal</td>
        <td></td>
        <td className="alinhamento">$1982.00</td>
        </tr>
        
        <tr>
        <td></td>
        <td>Tax</td>
        <td></td>
        <td className="alinhamento">$115.68</td>
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
        <td className="alinhamento">$2097.68</td>
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