function startGame() {
  let area = prompt("¿Quieres seguir en Front-End o Back-End?");
  let technology;

  if (area.toLowerCase() === "front-end") {
    technology = prompt("¿Quieres aprender React o Vue?");
  } else if (area.toLowerCase() === "back-end") {
    technology = prompt("¿Quieres aprender C# o Java?");
  } else {
    alert("Opción no válida. Por favor, elige Front-End o Back-End.");
    return;
  }

  let specialization = prompt(
    "¿Quieres especializarte en " +
      area +
      " o convertirte en Fullstack? (Escribe 'especializarme' o 'fullstack')"
  );

  if (specialization.toLowerCase() === "especializarme") {
    alert("¡Genial! Seguirás profundizando en " + area + " con " + technology);
  } else if (specialization.toLowerCase() === "fullstack") {
    alert(
      "¡Increíble! Expandirás tu conocimiento y te convertirás en Fullstack."
    );
  } else {
    alert("Opción no válida. Fin del juego.");
    return;
  }

  let moreTech = true;
  while (moreTech) {
    let newTech = prompt(
      "¿Hay alguna otra tecnología que te gustaría aprender?"
    );
    if (newTech) {
      alert(
        "¡Qué interesante! " +
          newTech +
          " es una gran tecnología para aprender."
      );
      moreTech = confirm("¿Quieres agregar otra tecnología?");
    } else {
      moreTech = false;
    }
  }

  alert(
    "¡Gracias por jugar! Sigue aprendiendo y creciendo en el mundo de la tecnología."
  );
}

startGame();
