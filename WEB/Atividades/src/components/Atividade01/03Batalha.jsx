import React from 'react';
import Aragorn from "./assets/Aragorn.jpg"
import Sauron from "./assets/Sauron.jpg"

// Componente Hero
const Hero = ({name}) => {
    return (
        <div className='img'>
            <h2>{name}</h2>
            <img src={Aragorn} alt="Heroi" />
        </div>
    );
};

// Componente Enemy
const Enemy = ({name}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={Sauron} alt="Inimigo" />
        </div>
    );
};

// Componente Arena normal
const Arena = () => {
    return(
        <div>
            <h1>Castelo Sombrio</h1>
            <Hero name="Aragorn"/>
            <br/>
            <Enemy name="Sauron"/>
        </div>
    )
}


// Componente Arena com React.Children
// const Arena = ({arena, children}) => {
//     return (
//         <div>
//             <h1>{arena}</h1>
//             {React.Children.map(children, (child) =>
//                 React.cloneElement(child, { arena: arena })
//             )}
//         </div>
//     );
// };

// Componente World
const World = ({children}) => {
    return <div>{children}</div>;
};

export { Hero, Enemy, Arena, World };
