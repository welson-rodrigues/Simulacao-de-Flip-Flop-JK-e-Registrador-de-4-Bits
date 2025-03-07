// Variáveis globais
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

// Função para atualizar o registrador de 4 bits
// Função para atualizar o registrador de 4 bits
function updateRegistrador() {
    // Desloca os bits para a esquerda e adiciona o novo valor de Q
    registrador.shift(); // Remove o primeiro bit
    registrador.push(Q); // Adiciona o novo bit no final

    // Atualiza a exibição do registrador
    document.getElementById('registradorState').textContent = registrador.join('');
}

// Inicializa o desenho do Flip-Flop
drawFlipFlop();

// Inicializa os LEDs
updateLEDs();