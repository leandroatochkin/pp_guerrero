export class Arma {
    constructor(
        private nombre: string,
        private danio: number
    ) {}

    atacar(): string {
        return `⚔️ Ataque con ${this.nombre}: ${this.danio} puntos de daño`;
    }

    getDanio(): number {
        return this.danio;
    }

    getNombre(): string {
        return this.nombre;
    }
}