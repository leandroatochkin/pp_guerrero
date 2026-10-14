export class Habilidad {
    constructor(
        private nombre: string,
        private poder: number
    ) {}

    usar(): string {
        return `✨ Se utiliza ${this.nombre}: ${this.poder} puntos de poder`;
    }

    getNombre(): string {
        return this.nombre;
    }

    getPoder(): number {
        return this.poder;
    }
}