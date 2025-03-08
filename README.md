# Simulador de Flip-Flop JK e Registrador de 4 Bits

## Descrição

Este projeto é uma simulação interativa de um Flip-Flop JK e um Registrador de 4 Bits. Ele permite visualizar e interagir com os conceitos fundamentais da eletrônica digital, auxiliando no aprendizado sobre armazenamento e manipulação de bits por meio de flip-flops e registradores.

O Flip-Flop JK é um dos principais tipos de flip-flops usados em circuitos digitais, sendo amplamente empregado em contadores, registradores e sistemas de armazenamento de dados. O registrador de 4 bits, por sua vez, é um conjunto de flip-flops conectados que permite armazenar e transferir informações em um sistema digital.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **HTML**: Estruturação da interface gráfica.
- **CSS**: Estilização dos elementos para melhor visualização.
- **JavaScript**: Implementação da lógica de funcionamento do Flip-Flop JK e do Registrador de 4 Bits.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

### Flip-Flop JK
- Permite inserir valores para as entradas **J** e **K**.
- Possui um **Clock** que sincroniza a mudança de estado do flip-flop.
- Conta com um **Reset Assíncrono**, que permite redefinir o estado do flip-flop independentemente do clock.
- Simula a **tabela verdade do Flip-Flop JK**, onde:
  - Se J = 0 e K = 0 → Estado mantém-se inalterado.
  - Se J = 0 e K = 1 → Estado reseta para 0.
  - Se J = 1 e K = 0 → Estado define-se como 1.
  - Se J = 1 e K = 1 → Estado inverte (toggle).

### Animação do Clock
- O clock é representado visualmente, permitindo acompanhar sua oscilação e efeito sobre o Flip-Flop.

### Contador de Pulsos
- Conta quantos pulsos de clock foram aplicados ao Flip-Flop, auxiliando no entendimento de seu comportamento em sequências temporais.

### Registrador de 4 Bits
- Implementa um conjunto de **4 flip-flops JK conectados** para armazenar um valor binário de 4 bits.
- Permite visualizar a propagação dos bits ao longo do tempo.
- Simula o funcionamento de registradores usados em microprocessadores e circuitos digitais.
- O registrador pode ser atualizado a cada ciclo de clock, permitindo armazenar novas informações de forma sincronizada.
- Possui um **controle de habilitação**, que permite definir quando os dados devem ser armazenados.
- Possibilidade de **carregamento paralelo** de dados, permitindo a entrada simultânea de múltiplos bits.
- Capacidade de **deslocamento de bits**, permitindo simular registradores de deslocamento.

### Interface Intuitiva
- Controles interativos para modificar as entradas e observar os resultados em tempo real.
- Exibição clara dos estados atuais dos flip-flops e do registrador.

## Como Usar

Para executar o projeto, siga os passos abaixo:

1. **Abra o arquivo `index.html`** em um navegador compatível.
2. **Defina os valores das entradas J, K, Clock e Reset** nos controles disponíveis na interface.
3. **Clique no botão "Atualizar Flip-Flop"** para visualizar a resposta do circuito ao estímulo dado.
4. **Para simular um Registrador de 4 Bits**, utilize o botão "Atualizar Registrador" e observe como os bits são armazenados e transferidos.
5. Acompanhe a **animação do clock** e o **contador de pulsos** para entender como os dados são manipulados no circuito digital.
6. Utilize a interface interativa para testar diferentes combinações e observar como os estados do Flip-Flop e do Registrador mudam ao longo do tempo.

## Estrutura do Projeto

A organização dos arquivos segue a estrutura abaixo:

```
/Simulacao-de-Flip-Flop-JK-e-Registrador-de-4-Bits
│── index.html    
│── styles.css      
│── script.js      
│── README.md      
```
