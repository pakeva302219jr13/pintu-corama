// Selecciona el contenedor de nieve
const snowContainer = document.querySelector('.snow');

// Genera copos de nieve dinámicamente
for (let i = 0; i < 100; i++) {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = Math.random() * 100 + '%';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.animationDelay = Math.random() * 5 + 's';
  snowContainer.appendChild(snowflake);
}

// Generar fuegos artificiales
function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = Math.random() * 100 + '%';
  firework.style.top = Math.random() * 80 + '%';
  for (let i = 0; i < 20; i++) {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    // Movimiento aleatorio de cada partícula
    spark.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
    spark.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
    firework.appendChild(spark);
  }
  

  document.body.appendChild(firework);

  // Eliminar el fuego artificial después de la animación
  setTimeout(() => firework.remove(), 3000);
}

// Crear fuegos artificiales aleatoriamente
setInterval(createFirework, 1000);



// Crear luces dinámicas que caen de las letras
function createLightParticle(textElement) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.borderRadius = '50%';
    particle.style.background = '#ff0';
    particle.style.left = Math.random() * textElement.offsetWidth + 'px';
    particle.style.top = '0';
    particle.style.animation = 'dropLightParticle 1s ease-in-out forwards';
    textElement.appendChild(particle);
  
    // Eliminar la partícula después de la animación
    setTimeout(() => particle.remove(), 1000);
  }
  
  // Crear partículas de luz de cada letra periódicamente
  const textElements = document.querySelectorAll('.animated-text');
  setInterval(() => {
    textElements.forEach((textElement) => {
      createLightParticle(textElement);
    });
  }, 500);
  




//lluvia de etrells


// Generar estrellas dinámicamente
function createStars() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%'; // Posición horizontal aleatoria
  star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria
  star.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio
  document.body.appendChild(star);

  // Eliminar la estrella después de que termine la animación
  setTimeout(() => star.remove(), 5000);
}

// Crear estrellas periódicamente
setInterval(createStars, 500);

// Generar estrellas destellantes periódicamente
function createTwinklingStar() {
  const star = document.createElement('div');
  star.classList.add('twinkling-star');
  star.style.left = Math.random() * 100 + '%'; // Posición horizontal aleatoria
  star.style.animationDuration = Math.random() * 4 + 2 + 's'; // Duración aleatoria
  star.style.animationDelay = Math.random() * 2 + 's'; // Retraso aleatorio
  document.body.appendChild(star);

  // Eliminar la estrella después de que termine la animación
  setTimeout(() => star.remove(), 5000);
}

// Crear estrellas destellantes periódicamente
setInterval(createTwinklingStar, 500);


// Generar fuegos artificiales aleatorios
function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.left = Math.random() * 100 + '%'; // Posición horizontal aleatoria
  firework.style.top = Math.random() * 50 + '%'; // Posición vertical aleatoria
  firework.style.background = `radial-gradient(circle, ${getRandomColor()}, rgba(0, 0, 0, 0))`; // Colores dinámicos
  document.body.appendChild(firework);

  // Eliminar el fuego artificial después de la animación
  setTimeout(() => firework.remove(), 1500);
}

// Generar colores aleatorios
function getRandomColor() {
  const colors = ['#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ccff', '#cc00ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Crear fuegos artificiales periódicamente
setInterval(createFirework, 800);



// Genera copos de nieve dinámicamente
function crearCopoDeNieve() {
  const copo = document.createElement('div');
  copo.classList.add('snowflake');
  copo.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
  copo.style.animationDuration = Math.random() * 3 + 2 + 's'; // Duración aleatoria
  copo.style.animationDelay = Math.random() * 5 + 's'; // Retraso aleatorio
  document.querySelector('.container').appendChild(copo);

  // Elimina el copo después de la animación
  setTimeout(() => copo.remove(), 8000);
}

// Crea copos de nieve periódicamente
setInterval(crearCopoDeNieve, 500);
