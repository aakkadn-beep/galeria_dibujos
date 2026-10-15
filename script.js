// Controlador de la galería de dibujos

let dibujoActual = "rana";
console.log("Dibujo seleccionado:", dibujoActual);

let sunSize = 30;

let leftX = 123;
let rightX = 215;
let sunRadius = 100;

let starX = 106;
let starY = 28;
let meteorX = 100;
let meteorY = 100;

function setup() {
    let lienzo = createCanvas(400, 400);
    lienzo.parent("lienzo-dibujo");

    mostrarDibujo();

    // Detectar cuando se presiona un botón de la galería
    let botones = document.querySelectorAll("[data-dibujo]");

    console.log("Cantidad de botones encontrados:", botones.length);

        botones.forEach(function(boton) {
        boton.addEventListener("click", function() {
            alert("Presionaste: " + boton.textContent);

            dibujoActual = boton.dataset.dibujo;
            mostrarDibujo();
        });
    });
}

function mostrarDibujo() {
    background(230, 240, 245);

    if (dibujoActual === "rana") {
        dibujarRana();
    } else if (dibujoActual === "conejo") {
        dibujarConejo();
    } else if (dibujoActual === "cena") {
        dibujarCena();
    } else if (dibujoActual === "nieve") {
        dibujarNieve();
    } else if (dibujoActual === "muneco") {
        dibujarMuneco();
    } else if (dibujoActual === "sol") {
        sunSize = 30;
    } else if (dibujoActual === "nubes") {
        leftX = 123;
        rightX = 215;
        sunRadius = 100;
    } else if (dibujoActual === "estrella") {
        starX = 106;
        starY = 28;
        meteorX = 100;
        meteorY = 100;
    }
}

function draw() {
    if (dibujoActual === "sol") {
        dibujarSol();
    } else if (dibujoActual === "nubes") {
        dibujarNubes();
    } else if (dibujoActual === "estrella") {
        dibujarEstrella();
    }
}

// Dibujo 1: Rana
function dibujarRana() {
    let x = 200;
    let y = 250;

    noStroke();
    fill(30, 204, 91);

    ellipse(x, y, 200, 100);
    ellipse(x - 50, y - 50, 40, 40);
    ellipse(x + 50, y - 50, 40, 40);

    fill(255, 255, 255);
    ellipse(x - 50, y - 50, 30, 30);
    ellipse(x + 50, y - 50, 30, 30);

    fill(0, 0, 0);
    ellipse(x, y, 120, 50);

    rect(x - 55, y - 55, 10, 10, 10);
    rect(x + 45, y - 55, 10, 10, 10);
}

// Dibujo 2: Dientes de conejo
function dibujarConejo() {
    var eyeSize = 17;
    var toothSize = 21;

    // Orejas
    fill(255, 220, 220);
    ellipse(150, 70, 60, 120);
    ellipse(240, 70, 60, 120);

    // Cara
    fill(245, 235, 220);
    ellipse(200, 170, 150, 150);

    // Ojos
    fill(0, 0, 0);
    ellipse(170, 150, eyeSize, eyeSize);
    ellipse(230, 150, eyeSize, eyeSize);

    // Boca y dientes
    stroke(0);
    line(150, 200, 250, 200);

    noFill();
    rect(185, 200, 15, toothSize);
    rect(200, 200, 15, toothSize);
}


// Dibujo 3: ¿Qué hay de cena?

function dibujarCena() {
    // Mesa de madera
    background(186, 145, 20);

    // Plato: establecer el color antes de dibujarlo
    noStroke();
    fill(255, 255, 255);
    ellipse(200, 200, 350, 350);
    ellipse(200, 200, 300, 300);

    // Huevos
    fill(242, 242, 242);
    ellipse(150, 162, 120, 70);
    ellipse(150, 156, 70, 120);

    // Yemas
    fill(232, 150, 35);
    ellipse(150, 155, 40, 40);

    fill(242, 242, 242);
    ellipse(274, 162, 120, 70);
    ellipse(274, 158, 70, 120);

    fill(232, 150, 35);
    ellipse(273, 155, 40, 40);

    // Tocino
    fill(189, 73, 97);
    rect(119, 230, 180, 28, 10);
    rect(119, 265, 180, 28, 10);
}

 // Dibujo 4: Día nevado soleado
function dibujarNieve() {
    background(0, 209, 202);

    // El suelo
    fill(0, 200, 0);
    rect(0, 300, 400, 100);

    // El sol
    fill(242, 255, 0);
    ellipse(80, 64, 100, 100);

    // El muñeco de nieve
    fill(255, 255, 255);
    ellipse(200, 300, 150, 150); // Parte inferior
    ellipse(200, 200, 100, 100); // Parte media
    ellipse(200, 120, 75, 75);   // Cabeza
}


 // Dibujo 5: Muñeco de nieve
function dibujarMuneco() {
    background(230, 240, 245);

    fill(255, 255, 255);
    ellipse(200, 300, 150, 150);
    ellipse(200, 213, 120, 120);
    ellipse(200, 133, 90, 90);
}

// Dibujo: El sol que explota
function dibujarSol() {
    background(82, 222, 240);
    noStroke();

    // Sol que aumenta de tamaño
    fill(255, 204, 0);
    ellipse(200, 298, sunSize, sunSize);

    // Suelo verde
    fill(76, 168, 67);
    rect(0, 300, 400, 100);

    // Animación del sol
    sunSize += 1;

    // Reiniciar el tamaño cuando crece demasiado
    if (sunSize > 300) {
        sunSize = 30;
    }
}

// Dibujo: Nubes que se separan
function dibujarNubes() {
    background(184, 236, 255);
    noStroke();

    // Sol del fondo
    fill(255, 170, 0);
    ellipse(200, 100, sunRadius, sunRadius);

    // Nube izquierda
    fill(255);
    ellipse(leftX, 150, 126, 97);
    ellipse(leftX + 62, 150, 70, 60);
    ellipse(leftX - 62, 150, 70, 60);

    // Nube derecha
    ellipse(rightX, 100, 126, 97);
    ellipse(rightX + 62, 100, 70, 60);
    ellipse(rightX - 62, 100, 70, 60);

    // Las nubes se separan
    leftX--;
    rightX++;

    // El sol aumenta de tamaño
    sunRadius += 2;

    // Reiniciar la animación
    if (leftX < -100 || rightX > 500) {
        leftX = 123;
        rightX = 215;
        sunRadius = 100;
    }
}

// Dibujo: Estrella fugaz
function dibujarEstrella() {
    background(29, 40, 115);
    noStroke();

    // Estrella amarilla
    fill(255, 242, 0);
    ellipse(starX, starY, 50, 50);

    // Cuerpo del meteorito
    fill(150, 126, 126);
    ellipse(meteorX - 30, meteorY + 120, 70, 70);

    // Detalles de la superficie
    fill(158, 128, 128);
    ellipse(meteorX - 8, meteorY + 106, 20, 15);
    ellipse(meteorX - 47, meteorY + 120, 20, 15);
    ellipse(meteorX - 17, meteorY + 142, 20, 15);

    // Detalle oscuro
    fill(0);
    ellipse(meteorX - 30, meteorY + 95, 10, 5);

    // Movimiento de la estrella y del meteorito
    starX += 3;
    starY += 1;
    meteorX += 1;
    meteorY += 2;

    // Reiniciar cuando salen del área visible
    if (starX > 450 || meteorY > 300) {
        starX = 106;
        starY = 28;
        meteorX = 100;
        meteorY = 100;
    }
}