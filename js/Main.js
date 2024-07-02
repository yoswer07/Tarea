import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_Ucla from "./Cl_Ucla.js";

//instanciar el objeto estudiante
let estudiante1 = new Cl_Estudiante(13457856, 'm', 15, 20, 25);
let estudiante2 = new Cl_Estudiante(15432551, 'f', 10, 10, 10);
let estudiante3 = new Cl_Estudiante(32455678, 'm', 18, 22, 20);
let estudiante4 = new Cl_Estudiante(28678900, 'f', 18, 25, 24);

let Ucla = new Cl_Ucla();
Ucla.procesarEstudiante(estudiante1);
Ucla.procesarEstudiante(estudiante2);
Ucla.procesarEstudiante(estudiante3);
Ucla.procesarEstudiante(estudiante4);

//salida solicitada
let salida = document.getElementById('Index');
salida.innerHTML = 'Resultados'
salida.innerHTML += '<br> El estudiante con cedula ' + estudiante1.cedula + ' obtuvo una nota total de ' + estudiante1.notasTotales();
salida.innerHTML += '<br> El estudiante con cedula ' + estudiante2.cedula + ' obtuvo una nota total de ' + estudiante2.notasTotales();
salida.innerHTML += '<br> El estudiante con cedula ' + estudiante3.cedula + ' obtuvo una nota total de ' + estudiante3.notasTotales();
salida.innerHTML += '<br> El estudiante con cedula ' + estudiante4.cedula + ' obtuvo una nota total de ' + estudiante4.notasTotales();
salida.innerHTML += '<br> <br>';
salida.innerHTML += '<br> La mayor nota es ' + Ucla.devolverMayorNota();
salida.innerHTML += '<br> Estudiantes femeninas aprobadas ' + Ucla.devolverContAprobadasFem();
salida.innerHTML += '<br> Promedio de notas ' + Ucla.devolverPromedioNotas();