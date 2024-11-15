const touchesDiv = document.getElementById("touches");

    function updateTouchInfo(event) {
      touchesDiv.innerHTML = ""; // Limpiar coordenadas previas

      // Iterar sobre cada toque en la pantalla
      for (let i = 0; i < event.touches.length; i++) {
        const touch = event.touches[i];
        const touchInfo = document.createElement("p");

        touchInfo.textContent = `Toque ${i + 1}: X = ${touch.clientX}, Y = ${touch.clientY}`;
        touchesDiv.appendChild(touchInfo);
      }
    }

    // Asignar eventos táctiles para mostrar coordenadas de cada toque
    document.addEventListener("touchstart", updateTouchInfo);
    document.addEventListener("touchmove", updateTouchInfo);
    document.addEventListener("touchend", updateTouchInfo);

    // Limpiar cuando no hay toques activos
    document.addEventListener("touchend", (event) => {
      if (event.touches.length === 0) {
        touchesDiv.innerHTML = "<p>No hay toques activos</p>";
      }
    });