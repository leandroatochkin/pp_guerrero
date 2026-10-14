import { Arma } from "./Arma";
import { Habilidad } from "./Habilidad";
import { Personaje } from "./Personaje";
import "./styles.css";

// ============================================
// CREACIÓN DE OBJETOS
// ============================================

const espada = new Arma("Espada de fuego", 30);
const arco = new Arma("Arco mágico", 20);
const hacha = new Arma("Hacha de guerra", 40);

const curacion = new Habilidad("Curación", 25);

const guerrero = new Personaje(
    "Guerrero",
    100,
    espada,
    curacion
);

// ============================================
// ELEMENTOS HTML
// ============================================

const nombreArma = document.querySelector<HTMLSpanElement>("#arma-actual")!;
const danioArma = document.querySelector<HTMLSpanElement>("#danio-arma")!;
const vidaPersonaje = document.querySelector<HTMLSpanElement>("#vida")!;
const registro = document.querySelector<HTMLDivElement>("#registro")!;
const selectorArma = document.querySelector<HTMLSelectElement>("#selector-arma")!;
const barraVida = document.querySelector<HTMLDivElement>("#barra-vida")!;

// ============================================
// ARMAS DISPONIBLES
// ============================================

const armas: Record<string, Arma> = {
    espada,
    arco,
    hacha
};

// ============================================
// INTERFAZ
// ============================================

function actualizarInterfaz(): void {
    nombreArma.textContent = guerrero.getArma().getNombre();
    danioArma.textContent = guerrero.getArma().getDanio().toString();
    vidaPersonaje.textContent = guerrero.getVida().toString();
    barraVida.style.width = `${guerrero.getVida()}%`;
}

function agregarRegistro(mensaje: string): void {
    const parrafo = document.createElement("p");
    parrafo.textContent = mensaje;

    registro.prepend(parrafo);
}

// ============================================
// EVENTOS
// ============================================

document.querySelector<HTMLButtonElement>("#btn-cambiar")!
    .addEventListener("click", () => {
        const nuevaArma = armas[selectorArma.value];

        if (!nuevaArma) return;

        const mensaje = guerrero.cambiarArma(nuevaArma);

        agregarRegistro(mensaje);
        actualizarInterfaz();
    });

document.querySelector<HTMLButtonElement>("#btn-atacar")!
    .addEventListener("click", () => {
        agregarRegistro(guerrero.atacar());
    });

document.querySelector<HTMLButtonElement>("#btn-habilidad")!
    .addEventListener("click", () => {
        agregarRegistro(guerrero.usarHabilidad());
    });

document.querySelector<HTMLButtonElement>("#btn-danio")!
    .addEventListener("click", () => {
        agregarRegistro(guerrero.recibirDanio(20));
        actualizarInterfaz();
    });

// ============================================
// INICIALIZACIÓN
// ============================================

actualizarInterfaz();
agregarRegistro("El guerrero está listo para combatir.");