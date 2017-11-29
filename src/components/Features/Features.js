import React from "react";
import Protocolo from "./protocolo.png";
import Extrato from "./extrato.png";
import "./Features.css"

export default (props) => (
<main>
    <section className="features">
            <div className="feature">
                
                <div className="feature__content">
                    <h2 className="feature__content-title">Track projects easily</h2>
                        <p className="feature__content-description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam eum officia fuga eius accusantium placeat,
                        quisquam illo dolores minus numquam rem libero expedita saepe!</p>
                </div>
                            <figure className="feature__picture">
                                <img src={Protocolo} alt="Protocolo"/>
                            </figure>
                
                <div className="feature__content">
                    <h2 className="feature__content-title">Clear communication</h2>
                        <p className="feature__content-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam eum officia fuga eius accusantium placeat,
                        quisquam illo dolores minus numquam rem libero expedita saepe!</p>
                </div>
            </div>
            <div className="feature feature-reverse">
                <figure className="feature__picture">
                        <img src={Extrato} alt="Extrato contrato"/>
                </figure>

                <div className="feature__content">
                    <h2 className="feature__content-title"> Estimate, approve, pay</h2>
                            <p className="feature__content-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nam eum officia fuga eius accusantium placeat,
                            quisquam illo dolores minus numquam rem libero expedita saepe!</p>
                </div>
            </div>
    </section>
</main>
);