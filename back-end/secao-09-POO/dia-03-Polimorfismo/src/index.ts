import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const novaReserva = quadraFutebol.reservar(new Date('2023-08-10'));

console.log(novaReserva);

