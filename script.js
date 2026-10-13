// Controlador de la galería de dibujos

let dibujoActual = "rana";
console.log("Dibujo seleccionado:", dibujoActual);

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
    console.log("Se seleccionó el conejo");
    dibujarConejo();
   } else if (dibujoActual === "cena") {
        dibujarCena();
    } else if (dibujoActual === "nieve") {
        dibujarNieve();
    }
    else if (dibujoActual === "muneco") {
    dibujarMuneco();
    }
}

function draw() {
    // Los dibujos son estáticos, por lo que no necesitamos
    // repetir el dibujo en cada fotograma.
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

