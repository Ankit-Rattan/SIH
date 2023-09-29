import React from "react";

function Option(){
    return(
        <div className="Option">
            <div className="clientOne opt">
                <h3>Client <br/> One</h3>
                <p>Client One can register throught here and proced with thier own queries for the furthur discusion.</p>
                <button>Proceed</button>
            </div>
            <div className="clientTwo opt">
                <h3>Client<br/> Two</h3>
                <p>Client One can register throught here and proced with thier own queries for the furthur discusion.</p>
                <button>Proceed</button>
            </div>
            <div className="advocate opt">
                <h3>Advocate</h3>
                <p>Client One can register throught here and proced with thier own queries for the furthur discusion.</p>
                <button>Proceed</button>
                
            </div>
        </div>
    );
}
export default Option;