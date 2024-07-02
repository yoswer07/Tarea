export default class Cl_Ucla {
    constructor() {
        this.auxNotas = 0;
        this.mayorNota = 0;
        this.contAprobadasFem = 0;
        this.acumNotas = 0;
        this.contEstudiantes = 0;
    }
    //metodos
    procesarEstudiante(Estudiante) {
        this.auxNotas = Estudiante.notasTotales();
        if (this.auxNotas > this.mayorNota) {
            this.mayorNota = this.auxNotas;
        }
        if (Estudiante.sexo == "f" && Estudiante.notasTotales() > 50) {
            this.contAprobadasFem += 1;
        }
        this.contEstudiantes += 1;
        this.acumNotas += Estudiante.notasTotales();
    }
    devolverMayorNota() {
        return this.mayorNota;
    }
    devolverContAprobadasFem() {
        return this.contAprobadasFem;
    }
    devolverPromedioNotas() {
        return this.acumNotas / this.contEstudiantes;
    }
}