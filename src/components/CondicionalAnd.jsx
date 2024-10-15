import { useState } from "react";

export default function CondicionalAnd (){
    const [mostrar, setMostrar] = useState(true);

    const toggleMostrar = () => {
        setMostrar(!mostrar);
    }

    return <div>
        <button onClick={toggleMostrar}>Mostrar/Ocultar</button>
        {
        mostrar &&
            <div>
                <p>Contenido</p>
            </div>}
    </div>
}
