import { Arma } from "./Arma";
import { Habilidad } from "./Habilidad";

export class Personaje {
    private readonly vidaMaxima: number;

    constructor(
        private nombre: string,
        private vida: number,
        private arma: Arma,
        private habilidad: Habilidad
    ) {
        this.vidaMaxima = vida;
    }

    atacar(): string {
        return `${this.nombre} ataca. ${this.arma.atacar()}`;
    }

    usarHabilidad(): string {
        const curacion = this.habilidad.getPoder();

        const vidaAnterior = this.vida;

        this.vida = Math.min(
            this.vida + curacion,
            this.vidaMaxima
        );

        const vidaRecuperada = this.vida - vidaAnterior;

        return `${this.nombre} utiliza ${this.habilidad.getNombre()}.
        ❤️ Recuperó ${vidaRecuperada} puntos de vida.
        Vida actual: ${this.vida}/${this.vidaMaxima}`;
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