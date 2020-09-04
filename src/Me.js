import React from "react";
import kids from "./minaBarn.jpeg";
import "./style/App.scss";
function Me () {
    return (
        <article className= 'main'>
        <h1>
            Lite om mig
        </h1>
            <p>Jag heter Åsa och pluggar webbprogrammering på BTH. Jag har just påbörjat mitt andra år och läser just nu
            kursen js ramverk. Det verkar kul och utmanande.</p>

            <p>Här är en bild på mina barn när de njuter av skogens alla blåbär strax efter att vi återvände till Sverige
            efter ett drygt år i Australien.</p>
            <img style={{width: '427px', height: '320px'}} src={kids} alt="Bild på mina barn" />
        </article>
    )
}

export default Me;
