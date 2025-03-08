let Q = 0; // Estado atual do Flip-Flop
let registrador = [0, 0, 0, 0]; // Registrador de 4 bits
let pulseCount = 0; // Contador de pulsos

// Função para atualizar o Flip-Flop JK
function updateFlipFlop() {
    const J = parseInt(document.getElementById('j').value);
    const K = parseInt(document.getElementById('k').value);
    const clock = parseInt(document.getElementById('clock').value);
    const reset = parseInt(document.getElementById('reset').value);

    // Reset assíncrono
    if (reset === 1) {
        Q = 0;
    } else if (clock === 1) { // Síncrono (apenas no pulso do clock)
        if (J === 0 && K === 0) {
            // Mantém o estado
        } else if (J === 0 && K === 1) {
            Q = 0; // Reset
        } else if (J === 1 && K === 0) {
            Q = 1; // Set
        } else if (J === 1 && K === 1) {
            Q = Q === 0 ? 1 : 0; // Toggle
        }
        pulseCount++; // Incrementa o contador de pulsos
        document.getElementById('pulseCount').textContent = pulseCount;
    }

    // Atualiza as saídas
    updateLEDs();
    drawFlipFlop();

    // Animação do fluxo de dados
    animateDataFlow(J, K, clock, reset);

    // Atualiza os Flip-Flops do registrador
    /* updateRegistradorDetails(); */

    // Controla a animação do clock
    const clockWave = document.getElementById('clockWave');
    if (clock === 0) {
        clockWave.classList.add('paused');
    } else {
        clockWave.classList.remove('paused');
    }
}

// Função para animar o fluxo de dados
function animateDataFlow(J, K, clock, reset) {
    const canvas = document.getElementById('flipFlopCanvas');
    const ctx = canvas.getContext('2d');

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o Flip-Flop
    drawFlipFlop();

    // Animação das entradas
    animateSignal(ctx, 20, 70, 50, 70, J, '#ff0000');
    animateSignal(ctx, 20, 120, 50, 120, K, '#0000ff');
    animateSignal(ctx, 270, 70, 250, 70, clock, '#007bff');
    animateSignal(ctx, 270, 120, 250, 120, reset, '#ff8800');

    // Animação das saídas
    animateSignal(ctx, 250, 90, 280, 90, Q, '#00ff00'); // Saída Q
    animateSignal(ctx, 250, 130, 280, 130, Q === 0 ? 1 : 0, '#ff00ff'); // Saída Q'
}

// Função para animar um sinal
function animateSignal(ctx, x1, y1, x2, y2, value, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    // Desenha a linha
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // Desenha o círculo (ponto de sinal)
    if (value === 1) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x2, y2, 5, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Função para desenhar o Flip-Flop JK
function drawFlipFlop() {
    const canvas = document.getElementById('flipFlopCanvas');
    const ctx = canvas.getContext('2d');

    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o Flip-Flop
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    // Retângulo principal
    ctx.strokeRect(50, 50, 200, 100);

    // Entradas J, K, Clock e Reset
    ctx.fillText("J", 20, 70);
    ctx.fillText("K", 20, 120);
    ctx.fillText("CLK", 270, 70);
    ctx.fillText("RST", 270, 120);

    // Saídas Q e Q'
    ctx.fillText("Q", 260, 90);
    ctx.fillText("Q'", 260, 130);
}

// Função para atualizar os LEDs
function updateLEDs() {
    const ledQ = document.getElementById('ledQ');
    const ledQNot = document.getElementById('ledQNot');

    // Atualiza o LED de Q
    if (Q === 1) {
        ledQ.classList.remove('off');
        ledQ.classList.add('on');
    } else {
        ledQ.classList.remove('on');
        ledQ.classList.add('off');
    }

    // Atualiza o LED de Q'
    if (Q === 0) {
        ledQNot.classList.remove('off');
        ledQNot.classList.add('on');
    } else {
        ledQNot.classList.remove('on');
        ledQNot.classList.add('off');
    }
}

// Função para atualizar o registrador de 4 bits
function updateRegistrador() {
    // Desloca os bits para a esquerda e adiciona o novo valor de Q
    registrador.shift(); // Remove o primeiro bit
    registrador.push(Q); // Adiciona o novo bit no final

    // Atualiza a exibição do registrador
    document.getElementById('registradorState').textContent = registrador.join('');
}

// Função para atualizar os detalhes do registrador
/* function updateRegistradorDetails() {
    document.getElementById('ff1').textContent = registrador[0];
    document.getElementById('ff2').textContent = registrador[1];
    document.getElementById('ff3').textContent = registrador[2];
    document.getElementById('ff4').textContent = registrador[3];
} */

// Inicializa o desenho do Flip-Flop
drawFlipFlop();

// Inicializa os LEDs
updateLEDs();

// Inicializa os detalhes do registrador
/* updateRegistradorDetails(); */