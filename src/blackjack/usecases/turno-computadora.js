import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCarta } from "./crear-carta-html";


// turno de la computadora

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Number} puntosHTML 
 * @param {Number} divCartasComputadora 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck= [] ) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error('Puntos HTML es necesario');
    if (!divCartasComputadora) throw new Error('divCartasComputadora es necesario');

    let puntosComputadora= 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        const imgCarta= crearCarta(carta);

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}