7DaysOfCode Dia 3
# Juego de Elección de Carrera en Desarrollo

Este programa permite al usuario elegir su camino en el desarrollo de software, ya sea en **Front-End** o **Back-End**, y decidir si se especializa o se convierte en **Fullstack**.

## Código

```javascript
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
```

## Explicación
1. Se pregunta al usuario si quiere seguir en **Front-End** o **Back-End**.
2. Se le ofrece elegir una tecnología en función del área elegida.
3. Se le pregunta si quiere especializarse o convertirse en **Fullstack**.
4. Se le permite agregar nuevas tecnologías que desee aprender.
5. Se muestra un mensaje final de motivación.

## Uso
Ejecuta el código en la consola del navegador o en un entorno de JavaScript compatible con `prompt()` y `alert()`.
