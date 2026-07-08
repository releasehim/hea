function analizarPolitica(formulario, indice) {
  if (arbol == undefined) {
    indice_politica = indice;
  } else {
    var desicion = confirm("Ya existe un arbol creado. Realmente desea crear un arbol B* con otra politica  y destruir el actual?");
    if (desicion) {
      arbol.destruirArbolActual();
      if (document.getElementById("orden").value >= 4) {
        creoArbol();
        var politica = obtenerPolitica();
        deshabilitarPoliticas();
        arbol.setearValoresEstrella(parseInt(document.getElementById("orden").value), politica);
        tipoArbol = "arbolB*";
        indice_politica = indice;
      } else {
        alert("El arbol a crear debe tener al menos orden 4");
      }
    } else {
      if (tipoArbol == "arbolB")//se intenta crear un arbol B
      {
        document.getElementById('tipoArbol').selectedIndex = 0;
        $("#opcionesArbolEstrella").addClass("nadaEstrella").removeClass("todoEstrella");
      } else {
        if (tipoArbol == "arbolB+")//se intenta crear un arbol B+
        {
          document.getElementById('tipoArbol').selectedIndex = 1;
          $("#opcionesArbolEstrella").addClass("nadaEstrella").removeClass("todoEstrella");
        } else {
          formulario.politica[indice_politica].checked = true;
        }
      }

    }

  }
}

$(document).ready(function () {
  divCanvas = document.getElementById('enlaces');
  contexto = divCanvas.getContext('2d');
  contexto.strokeStyle = '#CCC';
  contexto.lineWidth = 2;
  $("#orden").focus();
  $("#formulario").addClass("boton1");

  $("#orden, #numeroAInsertar,#numeroAEliminar, #numeroABuscar").addClass("formularioPasivo");
  $("#orden, #numeroAInsertar,#numeroAEliminar, #numeroABuscar").focus(function () {
    $(this).addClass("formularioActivo").removeClass("formularioPasivo");
  }).blur(function () {
    $(this).removeClass("formularioActivo").addClass("formularioPasivo");
  });
  $("#orden, #tipoArbol").addClass("nada");
  $("#orden, #tipoArbol").focus(function () {
    $("#formulario").addClass("boton1").removeClass("nada");
  }).blur(function () {
    $("#formulario").removeClass("boton1").addClass("nada");
  });
  $("#numeroAInsertar, #numeroAEliminar").addClass("nada");
  $("#numeroAInsertar, #numeroAEliminar").focus(function () {
    $("#formulario").addClass("boton2").removeClass("nada");
  }).blur(function () {
    $("#formulario").removeClass("boton2").addClass("nada");
  });
  $("#numeroABuscar").addClass("nada");
  $("#numeroABuscar").focus(function () {
    $("#formulario").addClass("boton3").removeClass("nada");
  }).blur(function () {
    $("#formulario").removeClass("boton3").addClass("nada");
  });
  $("#opcionesArbolEstrella").addClass("nadaEstrella");
  $(".estrella").change(function () {
    var val = $(this).val();
    if (val != '') {
      if (val == 'arbolB*') {
        $("#opcionesArbolEstrella").addClass("todoEstrella").removeClass("nadaEstrella");
        for (var i = 0; i < document.getElementById('form1').politica.length; i++) {
          document.getElementById('form1').politica[i].disabled = false;

        }
      } else {
        $("#opcionesArbolEstrella").removeClass("todoEstrella").addClass("nadaEstrella");
      }
    }
  });
  $(".velocidad").change(function () {
    var valorVelocidad = $(this).val();
    if (valorVelocidad != '') {
      if (valorVelocidad == 'velocidadAlta') {
        velocidad_transicion = 5000;
      } else {
        if (valorVelocidad == 'velocidadMedia') {
          velocidad_transicion = 7000;
        } else {
          if (valorVelocidad == 'velocidadBaja') {
            velocidad_transicion = 11000;
          }
        }
      }
    }
  });
  $("#cambiarVista").click(function () {
    if (modo == "pantallaPartida") {
      $("#historial").removeClass("historial");
      $("#historial").addClass("historialCompleto");
      $("#wrapperContenedor").removeClass("wrapperContenedor");
      $("#wrapperContenedor").addClass("wrapperContenedorCompleto");
      $("#cuerpo").removeClass("cuerpo");
      $("#cuerpo").addClass("cuerpoCompleto");
      $("#encabezado").removeClass("encabezado");
      $("#encabezado").addClass("encabezadoCompleto");
      $("#formulario").removeClass("formulario");
      $("#formulario").addClass("formularioCompleto");
      modo = "pantallaCompleta";
    } else {
      $("#historial").removeClass("historialCompleto");
      $("#historial").addClass("historial");
      $("#wrapperContenedor").removeClass("wrapperContenedorCompleto");
      $("#wrapperContenedor").addClass("wrapperContenedor");
      $("#cuerpo").removeClass("cuerpoCompleto");
      $("#cuerpo").addClass("cuerpo");
      $("#encabezado").removeClass("encabezadoCompleto");
      $("#encabezado").addClass("encabezado");
      $("#formulario").removeClass("formularioCompleto");
      $("#formulario").addClass("formulario");
      modo = "pantallaPartida";
    }
  });

});
