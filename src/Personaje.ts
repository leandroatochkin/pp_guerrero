import { Arma } from "./Arma";
import { Habilidad } from "./Habilidad";

export class Personaje {
    constructor(
        private nombre: string,
        private vida: number,
        private arma: Arma,
        private habilidad: Habilidad
    ) {}

    atacar(): string {
        return `${this.nombre} ataca. ${this.arma.atacar()}`;
    }

    usarHabilidad(): string {
        return `${this.nombre} utiliza una habilidad. ${this.habilidad.usar()}`;
    }

    cambiarArma(nuevaArma: Arma): string {
        this.arma = nuevaArma;

        return `${this.nombre} ahora utiliza ${nuevaArma.getNombre()}`;
    }

    recibirDanio(danio: number): string {
        this.vida = Math.max(0, this.vida - danio);

        return `${this.nombre} recibió ${danio} puntos de daño. Vida restante: ${this.vida}`;
    }

    getArma(): Arma {
        return this.arma;
    }

    getVida(): number {
        return this.vida;
    }

    getNombre(): string {
        return this.nombre;
    }
}