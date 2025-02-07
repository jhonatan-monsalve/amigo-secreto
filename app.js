
let listaAmigos = [];  // almacena los nombres de los amigos ingresados


function agregarAmigo() { // 
  let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {  // si el campo de texto esta vacio generara una alerta en pantalla informando 
        alert("Por favor, ingresa un nombre en el espacio indicado.");
        return; // hace que el codigo se detenga y regrese al inicio para que ingresen un nombre valido
    }

  listaAmigos.push(nombreAmigo);  // agrega el nombre ingresado al final de la lista 
  document.getElementById("listaAmigos").innerHTML += "<li>" + nombreAmigo + "</li>";  //agregar un nuevo elemento <li> (elemento de lista) a la lista desordenada (<ul>) con el ID "listaAmigos
  document.getElementById("amigo").value = ""; // limpia el campo donde se escribe el nombre, para poder escribir el siguiente
  }

function sortearAmigo() {
    if (listaAmigos.length === 0) {  // verifica si la lista tiene datos, y si esta vacia genera la alerta de ingresar nombres
      alert("Aún no has ingresado ningún amigo. Por favor, agrega algunos nombres.");
      return;
    }
     let amigoSeleccionado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; // Seleccionar un amigo aleatorio de la lista
     
    let botonSortear = document.querySelector(".button-draw");  // Actualizar el texto del botón
    botonSortear.textContent = "¡Tu amigo secreto es: " + amigoSeleccionado + "!";
    
    setTimeout(() => {
        botonSortear.innerHTML = '<img src="assets/play_circle_outline.png" alt="Ícono para sortear"> Sortear amigo';
      }, 3000);  // esta linea espera 3 segundos para restablecer el boton y que aparesca de nuevo el boton play para sortear un nuevo amigo
     
    let indexAmigoSeleccionado = listaAmigos.indexOf(amigoSeleccionado);// Eliminar el amigo seleccionado de la lista
    listaAmigos.splice(indexAmigoSeleccionado, 1);
      
    let listaAmigosElement = document.getElementById("listaAmigos"); // Actualizar la lista de amigos en el HTML
    listaAmigosElement.innerHTML = "";
    listaAmigos.forEach(amigo => {
      listaAmigosElement.innerHTML += "<li>" + amigo + "</li>";
    });
     
  }

