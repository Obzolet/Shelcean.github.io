// variables de la energia de las cartas de los axies
var axie1_1 = 1;
var axie1_2 = 1;
var axie1_3 = 1;
var axie1_4 = 1;

var axie2_1 = 1;
var axie2_2 = 1;
var axie2_3 = 1;
var axie2_4 = 1;

var axie3_1 = 1;
var axie3_2 = 1;
var axie3_3 = 1;
var axie3_4 = 1;


// CONTADOS DE PARTES USADAS

var axie1mouth = 0;
var axie1horn = 0;
var axie1back = 0;
var axie1tail = 0;

var axie2mouth = 0;
var axie2horn = 0;
var axie2back = 0;
var axie2tail = 0;

var axie3mouth = 0;
var axie3horn = 0;
var axie3back = 0;
var axie3tail = 0;


//COMPONENTES

var counter = 3;
var roundNumber = 1;
var currentCardsCounter = 6;
var cartasMazo = 18;
var axieKill = 0;

// TIPO AXIER
var axie1class = "plant";
var axie2class = "beast";
var axie3class = "bird";

// FUNCION QUE VUELVE TODOS LOS LABEL A ROJO
/* 
function label_rojo(){

  document.getElementById("a1mCounter").style.backgroundColor = "#db4647";
  document.getElementById("a1hCounter").style.backgroundColor = "#db4647";
  document.getElementById("a1bCounter").style.backgroundColor = "#db4647";
  document.getElementById("a1tCounter").style.backgroundColor = "#db4647";

  document.getElementById("a2mCounter").style.backgroundColor = "#db4647";
  document.getElementById("a2hCounter").style.backgroundColor = "#db4647";
  document.getElementById("a2bCounter").style.backgroundColor = "#db4647";
  document.getElementById("a2tCounter").style.backgroundColor = "#db4647";

  document.getElementById("a3mCounter").style.backgroundColor = "#db4647";
  document.getElementById("a3hCounter").style.backgroundColor = "#db4647";
  document.getElementById("a3bCounter").style.backgroundColor = "#db4647";
  document.getElementById("a3tCounter").style.backgroundColor = "#db4647";

}
*/
// FUNCION PARA CUANDO EL MAZO SE CONSUMA
/*
function nuevo_mazo() {
  // AXIE1
  if (!($("#a1DeadBt").is(":disabled"))) { // si el axie no está muerto el axie se activan los botones
    if (axie1mouth < 2) {
      document.getElementById("a1mCounter").style.backgroundColor = "#00aac0";
    } else {
      axie1mouth = 0;
      document.getElementById("a1mCounter").style.backgroundColor = "#db4647";
      document.getElementById("a1mCounter").innerHTML = axie1mouth;
    }
    if (axie1horn < 2) {
      document.getElementById("a1hCounter").style.backgroundColor = "#00aac0";
    } else {
      axie1horn = 0;
      document.getElementById("a1hCounter").style.backgroundColor = "#db4647";
      document.getElementById("a1hCounter").innerHTML = axie1horn;
    }
    if (axie1back < 2) {
      document.getElementById("a1bCounter").style.backgroundColor = "#00aac0";
    } else {
      axie1back = 0;
      document.getElementById("a1bCounter").style.backgroundColor = "#db4647";
      document.getElementById("a1bCounter").innerHTML = axie1back;
    }
    if (axie1tail < 2) {
      document.getElementById("a1tCounter").style.backgroundColor = "#00aac0";
    } else {
      axie1tail = 0;
      document.getElementById("a1tCounter").style.backgroundColor = "#db4647";
      document.getElementById("a1tCounter").innerHTML = axie1tail;
    }

  }
  //AXIE2
  if (!($("#a2DeadBt").is(":disabled"))) { // si el axie no está muerto el axie se activan los botones
    if (axie2mouth < 2) {
      document.getElementById("a2mCounter").style.backgroundColor = "#00aac0";
    } else {
      axie2mouth = 0;
      document.getElementById("a2mCounter").style.backgroundColor = "#db4647";
      document.getElementById("a2mCounter").innerHTML = axie2mouth;
    }
    if (axie2horn < 2) {
      document.getElementById("a2hCounter").style.backgroundColor = "#00aac0";
    } else {
      axie2horn = 0;
      document.getElementById("a2hCounter").style.backgroundColor = "#db4647";
      document.getElementById("a2hCounter").innerHTML = axie2horn;
    }
    if (axie2back < 2) {
      document.getElementById("a2bCounter").style.backgroundColor = "#00aac0";
    } else {
      axie2back = 0;
      document.getElementById("a2bCounter").style.backgroundColor = "#db4647";
      document.getElementById("a2bCounter").innerHTML = axie2back;
    }
    if (axie2tail < 2) {
      document.getElementById("a2tCounter").style.backgroundColor = "#00aac0";
    } else {
      axie2tail = 0;
      document.getElementById("a2tCounter").style.backgroundColor = "#db4647";
      document.getElementById("a2tCounter").innerHTML = axie2tail;
    }

  }
  //AXIE3
  if (!($("#a3DeadBt").is(":disabled"))) { // si el axie no está muerto el axie se activan los botones
    if (axie3mouth < 2) {
      document.getElementById("a3mCounter").style.backgroundColor = "#00aac0";
    } else {
      axie3mouth = 0;
      document.getElementById("a3mCounter").style.backgroundColor = "#db4647";
      document.getElementById("a3mCounter").innerHTML = axie3mouth;
    }
    if (axie3horn < 2) {
      document.getElementById("a3hCounter").style.backgroundColor = "#00aac0";
    } else {
      axie3horn = 0;
      document.getElementById("a3hCounter").style.backgroundColor = "#db4647";
      document.getElementById("a3hCounter").innerHTML = axie3horn;
    }
    if (axie3back < 2) {
      document.getElementById("a3bCounter").style.backgroundColor = "#00aac0";
    } else {
      axie3back = 0;
      document.getElementById("a3bCounter").style.backgroundColor = "#db4647";
      document.getElementById("a3bCounter").innerHTML = axie3back;
    }
    if (axie3tail < 2) {
      document.getElementById("a3tCounter").style.backgroundColor = "#00aac0";
    } else {
      axie3tail = 0;
      document.getElementById("a3tCounter").style.backgroundColor = "#db4647";
      document.getElementById("a3tCounter").innerHTML = axie3tail;
    }

  }
}
*/
// ACTUALIZA EL ESTADO DE LOS BOTONES

function actualizar() {
  if (currentCardsCounter == 0) {

    document.getElementById("a1mButton").classList.add("disabled");
    document.getElementById("a1mBt").disabled = "disabled";
    document.getElementById("a1hButton").classList.add("disabled");
    document.getElementById("a1hBt").disabled = "disabled";
    document.getElementById("a1bButton").classList.add("disabled");
    document.getElementById("a1bBt").disabled = "disabled";
    document.getElementById("a1tButton").classList.add("disabled");
    document.getElementById("a1tBt").disabled = "disabled";

    document.getElementById("a2mButton").classList.add("disabled");
    document.getElementById("a2mBt").disabled = "disabled";
    document.getElementById("a2hButton").classList.add("disabled");
    document.getElementById("a2hBt").disabled = "disabled";
    document.getElementById("a2bButton").classList.add("disabled");
    document.getElementById("a2bBt").disabled = "disabled";
    document.getElementById("a2tButton").classList.add("disabled");
    document.getElementById("a2tBt").disabled = "disabled";

    document.getElementById("a3mButton").classList.add("disabled");
    document.getElementById("a3mBt").disabled = "disabled";
    document.getElementById("a3hButton").classList.add("disabled");
    document.getElementById("a3hBt").disabled = "disabled";
    document.getElementById("a3bButton").classList.add("disabled");
    document.getElementById("a3bBt").disabled = "disabled";
    document.getElementById("a3tButton").classList.add("disabled");
    document.getElementById("a3tBt").disabled = "disabled";

  } else {

    if (!($("#a1DeadBt").is(":disabled"))) { // si el axie no está muerto el axie se activan los botones
      document.getElementById("a1mButton").classList.remove("disabled");
      document.getElementById("a1mBt").removeAttribute("disabled");
      document.getElementById("a1hButton").classList.remove("disabled");
      document.getElementById("a1hBt").removeAttribute("disabled");
      document.getElementById("a1bButton").classList.remove("disabled");
      document.getElementById("a1bBt").removeAttribute("disabled");
      document.getElementById("a1tButton").classList.remove("disabled");
      document.getElementById("a1tBt").removeAttribute("disabled");
    }
    if (!($("#a2DeadBt").is(":disabled"))) { // si el axie no está muerto el axie se activan los botones
      document.getElementById("a2mButton").classList.remove("disabled");
      document.getElementById("a2mBt").removeAttribute("disabled");
      document.getElementById("a2hButton").classList.remove("disabled");
      document.getElementById("a2hBt").removeAttribute("disabled");
      document.getElementById("a2bButton").classList.remove("disabled");
      document.getElementById("a2bBt").removeAttribute("disabled");
      document.getElementById("a2tButton").classList.remove("disabled");
      document.getElementById("a2tBt").removeAttribute("disabled");
    }
    if (!($("#a3DeadBt").is(":disabled"))) { // si el axie no está muerto el axie se activan los botones
      document.getElementById("a3mButton").classList.remove("disabled");
      document.getElementById("a3mBt").removeAttribute("disabled");
      document.getElementById("a3hButton").classList.remove("disabled");
      document.getElementById("a3hBt").removeAttribute("disabled");
      document.getElementById("a3bButton").classList.remove("disabled");
      document.getElementById("a3bBt").removeAttribute("disabled");
      document.getElementById("a3tButton").classList.remove("disabled");
      document.getElementById("a3tBt").removeAttribute("disabled");
    }
  }

  //AXIE 1
  if (counter == 0 && axie1_1 > 0 || axie1mouth == 2) {
    document.getElementById("a1mButton").classList.add("disabled");
    document.getElementById("a1mBt").disabled = "disabled";
  }
  if (counter == 0 && axie1_2 > 0 || axie1horn == 2) {
    document.getElementById("a1hButton").classList.add("disabled");
    document.getElementById("a1hBt").disabled = "disabled";
  }
  if (counter == 0 && axie1_3 > 0 || axie1back == 2) {
    document.getElementById("a1bButton").classList.add("disabled");
    document.getElementById("a1bBt").disabled = "disabled";
  }
  if (counter == 0 && axie1_4 > 0 || axie1tail == 2) {
    document.getElementById("a1tButton").classList.add("disabled");
    document.getElementById("a1tBt").disabled = "disabled";
  }

  //AXIE 2
  if (counter == 0 && axie2_1 > 0 || axie2mouth == 2) {
    document.getElementById("a2mButton").classList.add("disabled");
    document.getElementById("a2mBt").disabled = "disabled";
  }
  if (counter == 0 && axie2_2 > 0 || axie2horn == 2) {
    document.getElementById("a2hButton").classList.add("disabled");
    document.getElementById("a2hBt").disabled = "disabled";
  }
  if (counter == 0 && axie2_3 > 0 || axie2back == 2) {
    document.getElementById("a2bButton").classList.add("disabled");
    document.getElementById("a2bBt").disabled = "disabled";
  }
  if (counter == 0 && axie2_4 > 0 || axie2tail == 2) {
    document.getElementById("a2tButton").classList.add("disabled");
    document.getElementById("a2tBt").disabled = "disabled";
  }

  //AXIE 3
  if (counter == 0 && axie3_1 > 0 || axie3mouth == 2) {
    document.getElementById("a3mButton").classList.add("disabled");
    document.getElementById("a3mBt").disabled = "disabled";
  }
  if (counter == 0 && axie3_2 > 0 || axie3horn == 2) {
    document.getElementById("a3hButton").classList.add("disabled");
    document.getElementById("a3hBt").disabled = "disabled";
  }
  if (counter == 0 && axie3_3 > 0 || axie3back == 2) {
    document.getElementById("a3bButton").classList.add("disabled");
    document.getElementById("a3bBt").disabled = "disabled";
  }
  if (counter == 0 && axie3_4 > 0 || axie3tail == 2) {
    document.getElementById("a3tButton").classList.add("disabled");
    document.getElementById("a3tBt").disabled = "disabled";
  }


}

// ENERGIAS DE LAS CARTAS

function carta_energia(energia_1, energia_2, energia_3, carta) {

  switch (carta) {

    //AXIE1
    case "valores1":
      axie1_1 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores2":
      axie1_2 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores3":
      axie1_3 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores4":
      axie1_4 = document.getElementById(energia_1).innerHTML;
      break;

    //AXIE2
    case "valores5":
      axie2_1 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores6":
      axie2_2 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores7":
      axie2_3 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores8":
      axie2_4 = document.getElementById(energia_1).innerHTML;
      break;

    //AXIE3
    case "valores9":
      axie3_1 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores10":
      axie3_2 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores11":
      axie3_3 = document.getElementById(energia_1).innerHTML;
      break;
    case "valores12":
      axie3_4 = document.getElementById(energia_1).innerHTML;
      break;

    default:
      axie1_1 = 1;
      axie1_2 = 1;
      axie1_3 = 1;
      axie1_4 = 1;

      axie2_1 = 1;
      axie2_2 = 1;
      axie2_3 = 1;
      axie2_4 = 1;

      axie3_1 = 1;
      axie3_2 = 1;
      axie3_3 = 1;
      axie3_4 = 1;
      break;
  }

  document.getElementById(energia_1).style.backgroundColor = "#db4647";
  document.getElementById(energia_2).style.backgroundColor = "#242735";
  document.getElementById(energia_3).style.backgroundColor = "#242735";

}

/**
 * Energy-round functions
 */
function subtract(valor) {
  if (counter > 0) {
    counter -= parseInt(valor);
    actualizar();
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function add(valor) {
  if (counter < 10) {
    counter += parseInt(valor);
    actualizar();
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function nextRound() {
  roundNumber += 1;
  counter += 2;
  currentCardsCounter += 3;
  //cartas(3);

  if (counter >= 10) {
    counter = 10;
  }

  if (roundNumber >= 10) {
    document.body.style.backgroundColor = "#b52930ad";
  } else {
    document.body.style.backgroundColor = "#c07f5aad";
  }
  /*
    if (currentCardsCounter >= 12 && axieKill < 2) {
      currentCardsCounter = 12;
    }else if(currentCardsCounter >= 8 && axieKill == 2){
      currentCardsCounter = 8;
    }
  
  
    if (currentCardsCounter <= 0) {
      currentCardsCounter = 3;
    }
  */
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
  //document.getElementById("currentCards").innerHTML = currentCardsCounter;
  actualizar();
}

function reset() {
  document.body.style.backgroundColor = "#c07f5aad";

  //cartasMazo = 18;
  counter = 3;
  roundNumber = 1;
  //currentCardsCounter = 6;

  resetA1Parts();
  resetA2Parts();
  resetA3Parts();

  carta_energia('valor1_1', 'valor1_0', 'valor1_2', 'valores1');
  carta_energia('valor2_1', 'valor2_0', 'valor2_2', 'valores2');
  carta_energia('valor3_1', 'valor3_0', 'valor3_2', 'valores3');
  carta_energia('valor4_1', 'valor4_0', 'valor4_2', 'valores4');

  carta_energia('valor5_1', 'valor5_0', 'valor5_2', 'valores5');
  carta_energia('valor6_1', 'valor6_0', 'valor6_2', 'valores6');
  carta_energia('valor7_1', 'valor7_0', 'valor7_2', 'valores7');
  carta_energia('valor8_1', 'valor8_0', 'valor8_2', 'valores8');

  carta_energia('valor9_1', 'valor9_0', 'valor9_2', 'valores9');
  carta_energia('valor10_1', 'valor10_0', 'valor10_2', 'valores10');
  carta_energia('valor11_1', 'valor11_0', 'valor11_2', 'valores11');
  carta_energia('valor12_1', 'valor12_0', 'valor12_2', 'valores12');

  actualizar();

  document.getElementById("a1DeadBt").removeAttribute("disabled");
  document.getElementById("a2DeadBt").removeAttribute("disabled");
  document.getElementById("a3DeadBt").removeAttribute("disabled");

  //document.getElementById("cardsMazo").innerHTML = cartasMazo;
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;
  //document.getElementById("currentCards").innerHTML = currentCardsCounter;

}

/**
 * Cards functions
 */

/* 

function cartas(valor) {
  
  cartasMazo -= parseInt(valor);
  if (cartasMazo < 0) {
    nuevo_mazo();
    switch (axieKill) {
      case 0:
        cartasMazo = 24-currentCardsCounter;
        
        break;

      case 1:
        cartasMazo = 16-currentCardsCounter;
        
        break;

      case 2:
        cartasMazo = 8-currentCardsCounter;
        break;

      default:
        reset();
        break;
    }

  }
  document.getElementById("cardsMazo").innerHTML = cartasMazo;
}

function addCard() {
  if (currentCardsCounter < 12) {
    currentCardsCounter += 1;
    actualizar();
    cartas(1);
  }
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}

function minusCard() {
  if (currentCardsCounter > 0) {
    currentCardsCounter -= 1;
    actualizar();
  }
  document.getElementById("currentCards").innerHTML = currentCardsCounter;
}
*/
/**
 * Changes axie grid background color
 */

function axie1ColorAndParts(axie1Selection) {
  //let axie1Selection = document.getElementById("axie1Select").value;

  switch (axie1Selection) {
    case "plant":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "plant";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#58c02d";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#6CC001");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#428B13");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#6CC001");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#428B13");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#6CC001");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#428B13");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#6CC001");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#428B13");
      break;
    case "aqua":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "aqua";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#00b7cc";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#4cb6cd");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#3479b7");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#4cb6cd");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#3479b7");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#4cb6cd");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#3479b7");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#4cb6cd");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#3479b7");
      break;
    case "beast":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "beast";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#ffb838";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#fdb610");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#e37c11");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#fdb610");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#e37c11");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#fdb610");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#e37c11");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#fdb610");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#e37c11");
      break;
    case "bird":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "bird";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#ff8cbc";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#F38ABC");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#D2536F");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#F38ABC");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#D2536F");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#F38ABC");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#D2536F");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#F38ABC");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#D2536F");
      break;
    case "bug":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "bug";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#ff5549";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#ef5243");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#b72c2c");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#ef5243");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#b72c2c");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#ef5243");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#b72c2c");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#ef5243");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#b72c2c");
      break;
    case "dawn":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "dawn";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#b9cefc";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#b9cefc");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#b9cefc");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#b9cefc");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#b9cefc");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#b9cefc");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#b9cefc");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#b9cefc");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#b9cefc");
      break;
    case "dusk":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "dusk";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#009091";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#009091");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#009091");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#009091");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#009091");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#009091");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#009091");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#009091");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#009091");
      break;
    case "mech":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "mech";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#c7bdd3";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#c7bdd3");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#c7bdd3");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#c7bdd3");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#c7bdd3");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#c7bdd3");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#c7bdd3");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#c7bdd3");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#c7bdd3");
      break;
    case "reptile":
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#fff";
      axie1class = "reptile";
      document.getElementById("axie1_" + axie1class).style.backgroundColor = "#242735";
      document.getElementById("axie1Grid").style.backgroundColor = "#e58be1";
      //BOCA
      $("#p1_1", $("#boca_1")).attr('style', "fill:#9b47cc");
      $("#p1_3", $("#boca_1")).attr('style', "fill:#7736c1");
      //CUERNO
      $("#p2_1", $("#cuerno_1")).attr('style', "fill:#9b47cc");
      $("#p2_3", $("#cuerno_1")).attr('style', "fill:#7736c1");
      //ESPALDA
      $("#p3_1", $("#espalda_1")).attr('style', "fill:#9b47cc");
      $("#p3_3", $("#espalda_1")).attr('style', "fill:#7736c1");
      //COLA
      $("#p4_1", $("#cola_1")).attr('style', "fill:#9b47cc");
      $("#p4_3", $("#cola_1")).attr('style', "fill:#7736c1");
      break;
    default:
      document.getElementById("axie1Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie2ColorAndParts(axie2Selection) {
  //let axie2Selection = document.getElementById("axie2Select").value;

  switch (axie2Selection) {
    case "plant":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "plant";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#58c02d";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#6CC001");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#428B13");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#6CC001");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#428B13");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#6CC001");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#428B13");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#6CC001");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#428B13");
      break;
    case "aqua":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "aqua";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#00b7cc";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#4cb6cd");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#3479b7");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#4cb6cd");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#3479b7");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#4cb6cd");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#3479b7");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#4cb6cd");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#3479b7");
      break;
    case "beast":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "beast";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#ffb838";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#fdb610");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#e37c11");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#fdb610");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#e37c11");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#fdb610");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#e37c11");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#fdb610");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#e37c11");
      break;
    case "bird":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "bird";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#ff8cbc";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#F38ABC");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#D2536F");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#F38ABC");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#D2536F");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#F38ABC");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#D2536F");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#F38ABC");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#D2536F");
      break;
    case "bug":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "bug";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#ff5549";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#ef5243");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#b72c2c");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#ef5243");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#b72c2c");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#ef5243");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#b72c2c");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#ef5243");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#b72c2c");
      break;
    case "dawn":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "dawn";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#b9cefc";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#b9cefc");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#b9cefc");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#b9cefc");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#b9cefc");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#b9cefc");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#b9cefc");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#b9cefc");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#b9cefc");
      break;
    case "dusk":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "dusk";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#009091";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#009091");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#009091");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#009091");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#009091");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#009091");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#009091");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#009091");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#009091");
      break;
    case "mech":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "mech";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#c7bdd3";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#c7bdd3");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#c7bdd3");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#c7bdd3");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#c7bdd3");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#c7bdd3");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#c7bdd3");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#c7bdd3");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#c7bdd3");
      break;
    case "reptile":
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#fff";
      axie2class = "reptile";
      document.getElementById("axie2_" + axie2class).style.backgroundColor = "#242735";
      document.getElementById("axie2Grid").style.backgroundColor = "#e58be1";
      //BOCA
      $("#p1_1", $("#boca_2")).attr('style', "fill:#9b47cc");
      $("#p1_3", $("#boca_2")).attr('style', "fill:#7736c1");
      //CUERNO
      $("#p2_1", $("#cuerno_2")).attr('style', "fill:#9b47cc");
      $("#p2_3", $("#cuerno_2")).attr('style', "fill:#7736c1");
      //ESPALDA
      $("#p3_1", $("#espalda_2")).attr('style', "fill:#9b47cc");
      $("#p3_3", $("#espalda_2")).attr('style', "fill:#7736c1");
      //COLA
      $("#p4_1", $("#cola_2")).attr('style', "fill:#9b47cc");
      $("#p4_3", $("#cola_2")).attr('style', "fill:#7736c1");
      break;
    default:
      document.getElementById("axie2Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

function axie3ColorAndParts(axie3Selection) {
  //let axie3Selection = document.getElementById("axie3Select").value;

  switch (axie3Selection) {
    case "plant":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "plant";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#58c02d";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#6CC001");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#428B13");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#6CC001");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#428B13");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#6CC001");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#428B13");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#6CC001");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#428B13");
      break;
    case "aqua":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "aqua";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#00b7cc";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#4cb6cd");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#3479b7");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#4cb6cd");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#3479b7");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#4cb6cd");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#3479b7");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#4cb6cd");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#3479b7");
      break;
    case "beast":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "beast";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#ffb838";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#fdb610");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#e37c11");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#fdb610");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#e37c11");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#fdb610");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#e37c11");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#fdb610");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#e37c11");
      break;
    case "bird":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "bird";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#ff8cbc";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#F38ABC");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#D2536F");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#F38ABC");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#D2536F");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#F38ABC");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#D2536F");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#F38ABC");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#D2536F");
      break;
    case "bug":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "bug";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#ff5549";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#ef5243");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#b72c2c");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#ef5243");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#b72c2c");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#ef5243");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#b72c2c");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#ef5243");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#b72c2c");
      break;
    case "dawn":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "dawn";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#b9cefc";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#b9cefc");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#b9cefc");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#b9cefc");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#b9cefc");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#b9cefc");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#b9cefc");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#b9cefc");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#b9cefc");
      break;
    case "dusk":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "dusk";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#009091";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#009091");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#009091");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#009091");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#009091");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#009091");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#009091");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#009091");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#009091");
      break;
    case "mech":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "mech";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#c7bdd3";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#c7bdd3");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#c7bdd3");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#c7bdd3");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#c7bdd3");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#c7bdd3");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#c7bdd3");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#c7bdd3");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#c7bdd3");
      break;
    case "reptile":
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#fff";
      axie3class = "reptile";
      document.getElementById("axie3_" + axie3class).style.backgroundColor = "#242735";
      document.getElementById("axie3Grid").style.backgroundColor = "#e58be1";
      //BOCA
      $("#p1_1", $("#boca_3")).attr('style', "fill:#9b47cc");
      $("#p1_3", $("#boca_3")).attr('style', "fill:#7736c1");
      //CUERNO
      $("#p2_1", $("#cuerno_3")).attr('style', "fill:#9b47cc");
      $("#p2_3", $("#cuerno_3")).attr('style', "fill:#7736c1");
      //ESPALDA
      $("#p3_1", $("#espalda_3")).attr('style', "fill:#9b47cc");
      $("#p3_3", $("#espalda_3")).attr('style', "fill:#7736c1");
      //COLA
      $("#p4_1", $("#cola_3")).attr('style', "fill:#9b47cc");
      $("#p4_3", $("#cola_3")).attr('style', "fill:#7736c1");
      break;
    default:
      document.getElementById("axie3Grid").style.backgroundColor = "#ffffff";
      break;
  }
}

/**
 * "Kills" axie, adds and resets parts used
 */
function cata_usada(usada, accion) {
  switch (usada) {

    //AXIE1

    case "axie1_boca":
      if (accion == "suma") {
        if (axie1mouth < 2) {
          axie1mouth += 1;
          //minusCard();
          subtract(axie1_1);
        }
        document.getElementById("a1mCounter").innerHTML = axie1mouth;
      } else if (accion == "resta") {
        if (!($("#a1DeadBt").is(":disabled"))) {
          if (axie1mouth > 0) {
            axie1mouth -= 1;
            //addCard();
            add(axie1_1);
          }
        }
        document.getElementById("a1mCounter").innerHTML = axie1mouth;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }

      break;

    case "axie1_cuerno":
      if (accion == "suma") {
        if (axie1horn < 2) {
          axie1horn += 1;
          //minusCard();
          subtract(axie1_2);
        }
        document.getElementById("a1hCounter").innerHTML = axie1horn;
      } else if (accion == "resta") {
        if (!($("#a1DeadBt").is(":disabled"))) {
          if (axie1horn > 0) {
            axie1horn -= 1;
            //addCard();
            add(axie1_2);
          }
        }
        document.getElementById("a1hCounter").innerHTML = axie1horn;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie1_espalda":
      if (accion == "suma") {
        if (axie1back < 2) {
          axie1back += 1;
          //minusCard();
          subtract(axie1_3);
        }
        document.getElementById("a1bCounter").innerHTML = axie1back;
      } else if (accion == "resta") {
        if (!($("#a1DeadBt").is(":disabled"))) {
          if (axie1back > 0) {
            axie1back -= 1;
            //addCard();
            add(axie1_3);
          }
        }
        document.getElementById("a1bCounter").innerHTML = axie1back;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie1_cola":
      if (accion == "suma") {
        if (axie1tail < 2) {
          axie1tail += 1;
          //minusCard();
          subtract(axie1_4);
        }
        document.getElementById("a1tCounter").innerHTML = axie1tail;
      } else if (accion == "resta") {
        if (!($("#a1DeadBt").is(":disabled"))) {
          if (axie1tail > 0) {

            axie1tail -= 1;
            //addCard();
            add(axie1_4);
          }
        }
        document.getElementById("a1tCounter").innerHTML = axie1tail;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    //AXIE2

    case "axie2_boca":
      if (accion == "suma") {
        if (axie2mouth < 2) {
          axie2mouth += 1;
          //minusCard();
          subtract(axie2_1);
        }
        document.getElementById("a2mCounter").innerHTML = axie2mouth;
      } else if (accion == "resta") {
        if (!($("#a2DeadBt").is(":disabled"))) {
          if (axie2mouth > 0) {

            axie2mouth -= 1;
            //addCard();
            add(axie2_1);
          }
        }
        document.getElementById("a2mCounter").innerHTML = axie2mouth;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie2_cuerno":
      if (accion == "suma") {
        if (axie2horn < 2) {
          axie2horn += 1;
          //minusCard();
          subtract(axie2_2);
        }
        document.getElementById("a2hCounter").innerHTML = axie2horn;
      } else if (accion == "resta") {
        if (!($("#a2DeadBt").is(":disabled"))) {
          if (axie2horn > 0) {
            axie2horn -= 1;
            //addCard();
            add(axie2_2);
          }
        }
        document.getElementById("a2hCounter").innerHTML = axie2horn;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie2_espalda":
      if (accion == "suma") {
        if (axie2back < 2) {
          axie2back += 1;
          //minusCard();
          subtract(axie2_3);
        }
        document.getElementById("a2bCounter").innerHTML = axie2back;
      } else if (accion == "resta") {
        if (!($("#a2DeadBt").is(":disabled"))) {
          if (axie2back > 0) {
            axie2back -= 1;
            //addCard();
            add(axie2_3);
          }
        }
        document.getElementById("a2bCounter").innerHTML = axie2back;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie2_cola":
      if (accion == "suma") {
        if (axie2tail < 2) {
          axie2tail += 1;
          //minusCard();
          subtract(axie2_4);
        }
        document.getElementById("a2tCounter").innerHTML = axie2tail;
      } else if (accion == "resta") {
        if (!($("#a2DeadBt").is(":disabled"))) {
          if (axie2tail > 0) {
            axie2tail -= 1;
            //addCard();
            add(axie2_4);
          }
        }
        document.getElementById("a2tCounter").innerHTML = axie2tail;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    //AXIE3

    case "axie3_boca":
      if (accion == "suma") {
        if (axie3mouth < 2) {
          axie3mouth += 1;
          //minusCard();
          subtract(axie3_1);
        }
        document.getElementById("a3mCounter").innerHTML = axie3mouth;
      } else if (accion == "resta") {
        if (!($("#a3DeadBt").is(":disabled"))) {
          if (axie3mouth > 0) {
            axie3mouth -= 1;
            //addCard();
            add(axie3_1);
          }
        }
        document.getElementById("a3mCounter").innerHTML = axie3mouth;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie3_cuerno":
      if (accion == "suma") {
        if (axie3horn < 2) {
          axie3horn += 1;
          //minusCard();
          subtract(axie3_2);
        }
        document.getElementById("a3hCounter").innerHTML = axie3horn;
      } else if (accion == "resta") {
        if (!($("#a3DeadBt").is(":disabled"))) {
          if (axie3horn > 0) {
            axie3horn -= 1;
            //addCard();
            add(axie3_2);
          }
        }
        document.getElementById("a3hCounter").innerHTML = axie3horn;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie3_espalda":
      if (accion == "suma") {
        if (axie3back < 2) {
          axie3back += 1;
          //minusCard();
          subtract(axie3_3);
        }
        document.getElementById("a3bCounter").innerHTML = axie3back;
      } else if (accion == "resta") {
        if (!($("#a3DeadBt").is(":disabled"))) {
          if (axie3back > 0) {
            axie3back -= 1;
            //addCard();
            add(axie3_3);
          }
        }
        document.getElementById("a3bCounter").innerHTML = axie3back;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    case "axie3_cola":
      if (accion == "suma") {
        if (axie3tail < 2) {
          axie3tail += 1;
          //minusCard();
          subtract(axie3_4);
        }
        document.getElementById("a3tCounter").innerHTML = axie3tail;
      } else if (accion == "resta") {
        if (!($("#a3DeadBt").is(":disabled"))) {
          if (axie3tail > 0) {
            axie3tail -= 1;
            //addCard();
            add(axie3_4);
          }
        }
        document.getElementById("a3tCounter").innerHTML = axie3tail;
      } else { console.log("¿NO TIENE NADA MÁS QUE HACER?"); }
      break;

    default:
      console.log("¿NO LE ANDICHO QUE NO SE META DONDE NO LO LLAMAN?");
      break;
  }

}

function resetA1Parts() {

  //label_rojo();

  //if (axieKill > 0) { axieKill--; }

  axie1ColorAndParts(axie1class);

  //if ($("#a1DeadBt").is(":disabled")) { cartas(-8 + (axie1mouth + axie1horn + axie1back + axie1tail)); } // usando jQuery para consultar el estado del boton

  document.getElementById("a1mButton").classList.remove("disabled");
  document.getElementById("a1mBt").removeAttribute("disabled");
  document.getElementById("a1mLabel").classList.remove("disabled");

  document.getElementById("a1hButton").classList.remove("disabled");
  document.getElementById("a1hBt").removeAttribute("disabled");
  document.getElementById("a1hLabel").classList.remove("disabled");

  document.getElementById("a1bButton").classList.remove("disabled");
  document.getElementById("a1bBt").removeAttribute("disabled");
  document.getElementById("a1bLabel").classList.remove("disabled");

  document.getElementById("a1tButton").classList.remove("disabled");
  document.getElementById("a1tBt").removeAttribute("disabled");
  document.getElementById("a1tLabel").classList.remove("disabled");

  document.getElementById("a1DeadButton").classList.remove("disabled");
  document.getElementById("a1DeadBt").removeAttribute("disabled");
  /* 
    currentCardsCounter += (axie1mouth + axie1horn + axie1back + axie1tail);
    document.getElementById("currentCards").innerHTML = currentCardsCounter;
  
    counter += (axie1_1 * axie1mouth + axie1_2 * axie1horn + axie1_3 * axie1back + axie1_4 * axie1tail);
    document.getElementById("actualEnergy").innerHTML = counter;
  */
  if (axie1mouth == 2 || roundNumber == 1) {
    document.getElementById("a1mCounter").style.backgroundColor = "#db4647";
    axie1mouth = 0;
  } else { document.getElementById("a1mCounter").style.backgroundColor = "#00aac0"; }
  if (axie1horn == 2 || roundNumber == 1) {
    document.getElementById("a1hCounter").style.backgroundColor = "#db4647";
    axie1horn = 0;
  } else { document.getElementById("a1hCounter").style.backgroundColor = "#00aac0"; }
  if (axie1back == 2 || roundNumber == 1) {
    document.getElementById("a1bCounter").style.backgroundColor = "#db4647";
    axie1back = 0;
  } else { document.getElementById("a1bCounter").style.backgroundColor = "#00aac0"; }
  if (axie1tail == 2 || roundNumber == 1) {
    document.getElementById("a1tCounter").style.backgroundColor = "#db4647";
    axie1tail = 0;
  } else { document.getElementById("a1tCounter").style.backgroundColor = "#00aac0"; }

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function resetA2Parts() {

  //label_rojo();

  //if (axieKill > 0) { axieKill--; }

  axie2ColorAndParts(axie2class);

  // if ($("#a2DeadBt").is(":disabled")) { cartas(-8 + (axie2mouth + axie2horn + axie2back + axie2tail)); } // usando jQuery para consultar el estado del boton

  document.getElementById("a2mButton").classList.remove("disabled");
  document.getElementById("a2mBt").removeAttribute("disabled");
  document.getElementById("a2mLabel").classList.remove("disabled");

  document.getElementById("a2hButton").classList.remove("disabled");
  document.getElementById("a2hBt").removeAttribute("disabled");
  document.getElementById("a2hLabel").classList.remove("disabled");

  document.getElementById("a2bButton").classList.remove("disabled");
  document.getElementById("a2bBt").removeAttribute("disabled");
  document.getElementById("a2bLabel").classList.remove("disabled");

  document.getElementById("a2tButton").classList.remove("disabled");
  document.getElementById("a2tBt").removeAttribute("disabled");
  document.getElementById("a2tLabel").classList.remove("disabled");

  document.getElementById("a2DeadButton").classList.remove("disabled");
  document.getElementById("a2DeadBt").removeAttribute("disabled");
  /* 
    currentCardsCounter += (axie2mouth + axie2horn + axie2back + axie2tail);
    document.getElementById("currentCards").innerHTML = currentCardsCounter;
  
    counter += (axie2_1 * axie2mouth + axie2_2 * axie2horn + axie2_3 * axie2back + axie2_4 * axie2tail);
    document.getElementById("actualEnergy").innerHTML = counter;
  */
  if (axie2mouth == 2 || roundNumber == 1) {
    document.getElementById("a2mCounter").style.backgroundColor = "#db4647";
    axie2mouth = 0;
  } else { document.getElementById("a2mCounter").style.backgroundColor = "#00aac0"; }
  if (axie2horn == 2 || roundNumber == 1) {
    document.getElementById("a2hCounter").style.backgroundColor = "#db4647";
    axie2horn = 0;
  } else { document.getElementById("a2hCounter").style.backgroundColor = "#00aac0"; }
  if (axie2back == 2 || roundNumber == 1) {
    document.getElementById("a2bCounter").style.backgroundColor = "#db4647";
    axie2back = 0;
  } else { document.getElementById("a2bCounter").style.backgroundColor = "#00aac0"; }
  if (axie2tail == 2 || roundNumber == 1) {
    document.getElementById("a2tCounter").style.backgroundColor = "#db4647";
    axie2tail = 0;
  } else { document.getElementById("a2tCounter").style.backgroundColor = "#00aac0"; }

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function resetA3Parts() {

  //label_rojo();

  //if (axieKill > 0) { axieKill--; }

  axie3ColorAndParts(axie3class);

  //if ($("#a3DeadBt").is(":disabled")) { cartas(-8 + (axie3mouth + axie3horn + axie3back + axie3tail)); } // usando jQuery para consultar el estado del boton

  document.getElementById("a3mButton").classList.remove("disabled");
  document.getElementById("a3mBt").removeAttribute("disabled");
  document.getElementById("a3mLabel").classList.remove("disabled");

  document.getElementById("a3hButton").classList.remove("disabled");
  document.getElementById("a3hBt").removeAttribute("disabled");
  document.getElementById("a3hLabel").classList.remove("disabled");

  document.getElementById("a3bButton").classList.remove("disabled");
  document.getElementById("a3bBt").removeAttribute("disabled");
  document.getElementById("a3bLabel").classList.remove("disabled");

  document.getElementById("a3tButton").classList.remove("disabled");
  document.getElementById("a3tBt").removeAttribute("disabled");
  document.getElementById("a3tLabel").classList.remove("disabled");

  document.getElementById("a3DeadButton").classList.remove("disabled");
  document.getElementById("a3DeadBt").removeAttribute("disabled");
  /* 
    currentCardsCounter += (axie3mouth + axie3horn + axie3back + axie3tail);
    document.getElementById("currentCards").innerHTML = currentCardsCounter;
  
    counter += (axie3_1 * axie3mouth + axie3_2 * axie3horn + axie3_3 * axie3back + axie3_4 * axie3tail);
    document.getElementById("actualEnergy").innerHTML = counter;
  */
  if (axie3mouth == 2 || roundNumber == 1) {
    document.getElementById("a3mCounter").style.backgroundColor = "#db4647";
    axie3mouth = 0;
  } else { document.getElementById("a3mCounter").style.backgroundColor = "#00aac0"; }
  if (axie3horn == 2 || roundNumber == 1) {
    document.getElementById("a3hCounter").style.backgroundColor = "#db4647";
    axie3horn = 0;
  } else { document.getElementById("a3hCounter").style.backgroundColor = "#00aac0"; }
  if (axie3back == 2 || roundNumber == 1) {
    document.getElementById("a3bCounter").style.backgroundColor = "#db4647";
    axie3back = 0;
  } else { document.getElementById("a3bCounter").style.backgroundColor = "#00aac0"; }
  if (axie3tail == 2 || roundNumber == 1) {
    document.getElementById("a3tCounter").style.backgroundColor = "#db4647";
    axie3tail = 0;
  } else { document.getElementById("a3tCounter").style.backgroundColor = "#00aac0"; }

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function killAxie1() {

  axieKill++;

  document.getElementById("axie1Grid").style.backgroundColor = "#8d8383ad";

  document.getElementById("a1mButton").classList.add("disabled");
  document.getElementById("a1mBt").disabled = "disabled";
  document.getElementById("a1mLabel").classList.add("disabled");;

  document.getElementById("a1hButton").classList.add("disabled");
  document.getElementById("a1hBt").disabled = "disabled";
  document.getElementById("a1hLabel").classList.add("disabled");

  document.getElementById("a1bButton").classList.add("disabled");
  document.getElementById("a1bBt").disabled = "disabled";
  document.getElementById("a1bLabel").classList.add("disabled");

  document.getElementById("a1tButton").classList.add("disabled");
  document.getElementById("a1tBt").disabled = "disabled";
  document.getElementById("a1tLabel").classList.add("disabled");

  document.getElementById("a1DeadButton").classList.add("disabled");
  document.getElementById("a1DeadBt").disabled = "disabled";

  //cartas(8 - (axie1mouth + axie1horn + axie1back + axie1tail));

}

function killAxie2() {

  axieKill++;

  document.getElementById("axie2Grid").style.backgroundColor = "#8d8383ad";

  document.getElementById("a2mButton").classList.add("disabled");
  document.getElementById("a2mBt").disabled = "disabled";
  document.getElementById("a2mLabel").classList.add("disabled");

  document.getElementById("a2hButton").classList.add("disabled");
  document.getElementById("a2hBt").disabled = "disabled";
  document.getElementById("a2hLabel").classList.add("disabled");

  document.getElementById("a2bButton").classList.add("disabled");
  document.getElementById("a2bBt").disabled = "disabled";
  document.getElementById("a2bLabel").classList.add("disabled");

  document.getElementById("a2tButton").classList.add("disabled");
  document.getElementById("a2tBt").disabled = "disabled";
  document.getElementById("a2tLabel").classList.add("disabled");

  document.getElementById("a2DeadButton").classList.add("disabled");
  document.getElementById("a2DeadBt").disabled = "disabled";

  // cartas(8 - (axie2mouth + axie2horn + axie2back + axie2tail));

}

function killAxie3() {

  axieKill++;

  document.getElementById("axie3Grid").style.backgroundColor = "#8d8383ad";

  document.getElementById("a3mButton").classList.add("disabled");
  document.getElementById("a3mBt").disabled = "disabled";
  document.getElementById("a3mLabel").classList.add("disabled");

  document.getElementById("a3hButton").classList.add("disabled");
  document.getElementById("a3hBt").disabled = "disabled";
  document.getElementById("a3hLabel").classList.add("disabled");

  document.getElementById("a3bButton").classList.add("disabled");
  document.getElementById("a3bBt").disabled = "disabled";
  document.getElementById("a3bLabel").classList.add("disabled");

  document.getElementById("a3tButton").classList.add("disabled");
  document.getElementById("a3tBt").disabled = "disabled";
  document.getElementById("a3tLabel").classList.add("disabled");

  document.getElementById("a3DeadButton").classList.add("disabled");
  document.getElementById("a3DeadBt").disabled = "disabled";

  // cartas(8 - (axie3mouth + axie3horn + axie3back + axie3tail));

}
