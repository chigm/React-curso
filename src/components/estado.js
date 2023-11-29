import { useState } from "react";

function EjemploEstado (props) {
    const [counter, setCounter] = useState (10)
    return (
        <div>
            <h3>{`Contador ${counter}`}</h3>
            <div ClassName='buttonGroup'>
                <button className="success"> + </button>
                <button className="error"> - </button>

            </div>
        </div>
    )
}
export default EjemploEstado; 