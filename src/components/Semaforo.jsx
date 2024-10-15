import { useState } from "react";
import '../styles/Semaforo.css';

function Semaforo (){
    const [color, setColor] = useState('rojo');

    const handleClick = () => {
        if (color === 'rojo') {
            setColor('amarillo');
        } else if (color === 'amarillo') {
            setColor('verde');
        } else if (color === 'verde') {
            setColor('rojo');
        }
    }

    let clases = ['semaforo', color]

    return <div>
        <button onClick={handleClick}>Cambia semáforo</button>
        <div className={clases.join(' ')}></div>
    </div>;
}
export default Semaforo;