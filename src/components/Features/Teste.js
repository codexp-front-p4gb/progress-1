import React from "react";
import "./teste.css"

export default (props) => (

    <table class="tabelafeatures">
        <tr>
        <th colspan="4" class="tabelafeatures__destaque">{props.empresa.razaoSocial}</th>
        </tr>
        <tr className="tabelafeatures__protocolo">
        <td>{props.empresa.endereco}</td>
        <td colspan="2"></td>
        <td>Estimate #121212121<br/>Progress Code 3110556</td>
        </tr>
        <tr>
        <td colspan="4"></td>
        </tr>
        
        <tr>
        <td class="teste" colspan="4"></td>
        </tr>
        
        <tr>
        <td>Prepared for<p class="tabelafeatures__destaque-vendedor">Jake Montgomery</p></td>
        <td></td>
        <td></td>
        <td>Vehicle 
            <p class="tabelafeatures__destaque-carro"> 2010 ML Mini Cooper 5</p>
            <p class="tabelafeatures__destaque-carro">Miles: 31.209</p>
            <p class="tabelafeatures__destaque-carro">VIN 0000000HHAA313131</p></td>
        </tr>
        <tr>
        <td class="teste borda" colspan="4"></td>
        </tr>
        <tr class="tabelafeatures__itens">
        <td >Description:</td>
        <td>Qtde</td>
        <td>Price</td>
        <td class="alinhamento">Amount</td>
        </tr>
        <tr>
        <td>Tensioner</td>
        <td>1</td>
        <td>$45.00</td>
        <td class="alinhamento">$45.00</td>
        </tr>
        <tr>
        <td>Oil Filter</td>
        <td>1</td>
        <td>$103.00</td>
        <td class="alinhamento">$103.00</td>
        </tr>
        <tr>
        <td>Bilstein 5100 Shocks</td>
        <td>4</td>
        <td>$200.00</td>
        <td class="alinhamento">$800.00</td>
        </tr>
        
        <tr>
        <td>Labour (per hour)</td>
        <td>14</td>
        <td>$70.00</td>
        <td class="alinhamento">$980.00</td>
        </tr>
        
        <tr>
        <td class="teste borda" colspan="4"></td>
        </tr>
        
        <tr>
        <td></td>
        <td>Subtotal</td>
        <td></td>
        <td class="alinhamento">$1982.00</td>
        </tr>
        
        <tr>
        <td></td>
        <td>Tax</td>
        <td></td>
        <td class="alinhamento">$115.68</td>
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
        <td class="alinhamento">$2097.68</td>
        </tr>
        <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        </tr>
        
        <tr>
        <td class="teste" colspan="4"></td>
        </tr>
        
        <tr>
        <td class="button"><a class="button_link"href="">approve</a></td>
        <td colspan="2"></td>
        <td class="button modified"><a class="button_link" href="">decline</a></td>
        </tr>
  </table>
);