// 
//   // Seleciona o título animado
//   const title = document.getElementById("moving-title");

//   // Configuração inicial
//   let positionX = window.innerWidth; // Começa fora da tela (à direita)
//   const speed = 3; // Ajusta a velocidade do movimento

//   // Atualiza a posição inicial ao redimensionar a janela
//   window.addEventListener("resize", () => {
//     positionX = window.innerWidth;
//   });

//   // Função para mover o título
//   function moveTitle() {
//     positionX -= speed; // Move o título para a esquerda

//     // Atualiza a posição com transformação CSS
//     title.style.transform = `translateX(${positionX}px)`;

//     // Reseta a posição ao sair da tela
//     if (positionX + title.offsetWidth < 0) {
//       positionX = window.innerWidth; // Reposiciona à direita
//     }

//     // Continua a animação
//     requestAnimationFrame(moveTitle);
//   }

//   // Inicia a animação
//   moveTitle();
// 
