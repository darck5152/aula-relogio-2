function updateTime() {
     const timeElement = document.getElementById('time');
     const now = new Date();
     const hours = now.getHours().toString().padStart(2, '0');
     const minutes = now.getMinutes().toString().padStart(2, '0');
     const seconds = now.getSeconds().toString().padStart(2, '0');
     const timeString = `${hours}:${minutes}:${seconds}`;
     timeElement.textContent = timeString;
 }
 
 setInterval(updateTime, 1000); 
 updateTime(); // Chama a função para exibir o tempo atual imediatamente//
 /*^obtém a hora, minuto e segundo do aparelho e os coloca em formato de string de horário, depois atualiza a conteúdo do elemento 'time'.
 O setInversal é responsável por atualizar o relogio a cada segundo */