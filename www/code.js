var bilancio = 102.32;
var transazioni = "";
var transazioni_eng = "";
var lingua = "ita";

// Leading zero, ovvero aggiunge zeri assicurando che
// i numeri siano sempre convertiti in stringhe di
// lunghezza 2
function lz(numero) {
  if (numero < 10) {
    return "0" + numero;
  } else {
    return "" + numero;
  }
}

function apri_login( ) {
  hideElement("label_errore_login");
  if (lingua == "ita") {
    setProperty("screen_login", "image", "assets/login.png");
    setText("label_utente", "Nome utente");
  } else {
    setProperty("screen_login", "image", "assets/login_eng.png");
    setText("label_utente", "User name");
  }
  setScreen("screen_login");
}

function apri_home( ) {
  setText("label_balance", bilancio);
  if (lingua == "ita") {
    setProperty("screen_home", "image", "assets/balance.png");
    setText("button_invia_coin", "Paga");
    setText("button_Registro", "Registro");
    setText("button_about", "Informazioni sul progetto")
  } else {
    setProperty("screen_home", "image", "assets/balance_eng.png");
    setText("button_invia_coin", "Pay");
    setText("button_Registro", "Registry");
    setText("button_about", "About the project")
  }
  setScreen("screen_home");
}

function apri_paga( ) {
  if (lingua == "ita") {
    setProperty("screen_paga", "image", "assets/paga.png");
    setText("label_paga_fondi", "Fondi disponibili: " + bilancio);
    setText("button_paga_paga", "Paga");
    setText("button_paga_indietro", "Indietro");
  } else {
    setProperty("screen_paga", "image", "assets/paga_eng.png");
    setText("label_paga_fondi", "Available funds: " + bilancio);
    setText("button_paga_paga", "Pay");
    setText("button_paga_indietro", "Back");
  }
  setScreen("screen_paga");
}

function apri_registro( ) {
  if (lingua == "ita") {
    setProperty("screen_registro", "image", "assets/registro.png");
    setText("text_transazioni", transazioni);
    setText("button_registro_indietro", "Indietro");
  } else {
    setProperty("screen_registro", "image", "assets/registro_eng.png");
    setText("text_transazioni", transazioni_eng);
    setText("button_registro_indietro", "Back");
  }
  setScreen("screen_registro");
}

function apri_about( ) {
  if (lingua == "ita") {
    setProperty("screen_about", "image", "assets/about.png");
    setText("button_about_indietro", "Indietro");
  } else {
    setProperty("screen_about", "image", "assets/about_eng.png");
    setText("button_about_indietro", "Back");
  }
  setScreen("screen_about");
  playSound("assets/nature.mp3", true);
}

function apri_help_solare( ) {
  if (lingua == "ita") {
    setProperty("screen_help_solare", "image", "assets/help_solare.png")
    setText("button_help_solare_indietro", "Indietro");
  } else {
    setProperty("screen_help_solare", "image", "assets/help_solare_eng.png")
    setText("button_help_solare_indietro", "Back");
  }
  setScreen("screen_help_solare");
}

function apri_help_eolico( ) {
  if (lingua == "ita") {
    setProperty("screen_help_eolico", "image", "assets/help_eolico.png")
    setText("button_help_eolico_indietro", "Indietro");
  } else {
    setProperty("screen_help_eolico", "image", "assets/help_eolico_eng.png")
    setText("button_help_eolico_indietro", "Back");
  }
  setScreen("screen_help_eolico");
}

function apri_help_rifiuti( ) {
  if (lingua == "ita") {
    setProperty("screen_help_rifiuti", "image", "assets/help_rifiuti.png")
    setText("button_help_rifiuti_indietro", "Indietro");
  } else {
    setProperty("screen_help_rifiuti", "image", "assets/help_rifiuti_eng.png")
    setText("button_help_rifiuti_indietro", "Back");
  }
  setScreen("screen_help_rifiuti");
}

// Bottone login
onEvent("button_login", "click", function( ) {
  playSound("assets/click.mp3");
  var utente = getProperty("text_utente", "value").toLowerCase();
  var password = getProperty("text_password", "value").toLowerCase();
  if (utente != "green" || password != "coin") {
    if (lingua == "ita") {
      setText("label_errore_login", "Nome utente o password non trovati");
      playSpeech("Nome utente o password non trovati", "female", "Italiano");
    } else {
      setText("label_errore_login", "User name or password not found");
      playSpeech("User name or password not found", "female", "English");
    }
    showElement("label_errore_login");
  } else {
    apri_home();
  }
});

// Bottone login ITA
onEvent("image_login_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_login();
  }
});

// Bottone login ENG
onEvent("image_login_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_login();
  }
});

// Bottone informazioni sul progetto (home)
onEvent("button_about", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_about();
});

// Bottone paga (home)
onEvent("button_invia_coin", "click", function ( ) {
  playSound("assets/click.mp3");
  hideElement("label_paga_errore");
  apri_paga();
});

// Bottone indietro (informazioni sul progetto)
onEvent("button_about_indietro", "click", function ( ) {
  stopSound("assets/nature.mp3");
  playSound("assets/click.mp3");
  apri_home();
});

// Collegamento sito (informazioni sul progetto)
onEvent("label_link_sito", "click", function ( ) {
  playSound("assets/click.mp3");
  open("https://www.casagrandecesi.edu.it/");
});

// Bottone home ITA
onEvent("image_home_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_home();
  }
});

// Bottone home ENG
onEvent("image_home_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_home();
  }
});

function mostra_errore_pagamento( ) {
  hideElement("label_paga_fondi");
  showElement("label_paga_errore");
  setTimeout(function ( ) {
    hideElement("label_paga_errore");
    showElement("label_paga_fondi");
  }, 4000);
}

// Bottone paga (paga)
onEvent("button_paga_paga", "click", function ( ) {
  playSound("assets/click.mp3");
  var testo_importo = getProperty("text_paga_importo", "value");
  // Sostituisco la virgola con il punto per semplificare
  // l'uso dell'app per gli utenti italiani
  if (testo_importo.indexOf(",") != -1) {
    testo_importo = testo_importo.replace(",", ".");
  }
  var importo = Number(testo_importo);
  var utente = getProperty("text_paga_utente", "value").toLowerCase();
  if (utente != "test") {
    if (lingua == "ita") {
      setText("label_paga_errore", "Utente non trovato");
      playSpeech("Utente non trovato", "female", "Italiano");
    } else {
      setText("label_paga_errore", "User not found");
      playSpeech("User not found", "female", "English");
    }
    mostra_errore_pagamento();
  } else if (testo_importo == "" || isNaN(importo)) {
    if (lingua == "ita") {
      setText("label_paga_errore", "Importo errato");
      playSpeech("Importo errato", "female", "Italiano");
    } else {
      setText("label_paga_errore", "Incorrect amount format");
      playSpeech("Incorrect amount format", "female", "English");
    }
    mostra_errore_pagamento();
  } else if (importo > bilancio) {
    if (lingua == "ita") {
      setText("label_paga_errore", "Fondi insufficienti");
      playSpeech("Fondi insufficienti", "female", "Italiano");
    } else {
      setText("label_paga_errore", "Insufficient funds");
      playSpeech("Insufficient funds", "female", "English");
    }
    mostra_errore_pagamento();
  } else {
    bilancio -= importo;
    var ora = new Date();
    transazioni = timestamp + ": inviati " + importo + " GC a '" + utente + "'\n" + transazioni;
    var timestamp = lz(ora.getFullYear()) + "-" + lz(ora.getMonth()) + "-" + ora.getDate() + " " + lz(ora.getHours()) + ":" + lz(ora.getMinutes());
    transazioni_eng = timestamp + ": sent " + importo + " GC to '" + utente + "'\n" + transazioni_eng;
    playSound("assets/payment_sent.mp3");
    if (lingua == "ita") playSpeech("Pagamento inviato correttamente", "female", "Italiano");
    else playSpeech("Payment sent correctly", "female", "English");
    apri_home();
  }
});

// Bottone indietro (paga)
onEvent("button_paga_indietro", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_home();
});

// Bottone paga ITA
onEvent("image_paga_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_paga();
  }
});

// Bottone paga ENG
onEvent("image_paga_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_paga();
  }
});

// Bottone registro (home)
onEvent("button_Registro", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_registro();
});

// Bottone help solare (registro)
onEvent("image_help_solare", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_help_solare();
});

// Bottone help eolico (registro)
onEvent("image_help_eolico", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_help_eolico();
});

// Bottone help rifiuti (registro)
onEvent("image_help_rifiuti", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_help_rifiuti();
});

// Bottone indietro (registro)
onEvent("button_registro_indietro", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_home();
});

// Bottone registro ITA
onEvent("image_registro_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_registro();
  }
});

// Bottone registro ENG
onEvent("image_registro_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_registro();
  }
});

// Bottone about ITA
onEvent("image_about_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_about();
  }
});

// Bottone about ENG
onEvent("image_about_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_about();
  }
});

// Bottone help solare ITA
onEvent("image_help_solare_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_help_solare();
  }
});

// Bottone help solare ENG
onEvent("image_help_solare_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_help_solare();
  }
});

// Bottone help solare indietro
onEvent("button_help_solare_indietro", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_registro();
});

// Bottone help eolico ITA
onEvent("image_help_eolico_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_help_eolico();
  }
});

// Bottone help eolico ENG
onEvent("image_help_eolico_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_help_eolico();
  }
});

// Bottone help eolico indietro
onEvent("button_help_eolico_indietro", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_registro();
});

// Bottone help rifiuti ITA
onEvent("image_help_rifiuti_ita", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "ita") {
    lingua = "ita";
    apri_help_rifiuti();
  }
});

// Bottone help rifiuti ENG
onEvent("image_help_rifiuti_eng", "click", function ( ) {
  playSound("assets/click.mp3");
  if (lingua != "eng") {
    lingua = "eng";
    apri_help_rifiuti();
  }
});

// Bottone help rifiuti indietro
onEvent("button_help_rifiuti_indietro", "click", function ( ) {
  playSound("assets/click.mp3");
  apri_registro();
});

// Schermata iniziale
setTimeout(function() {
  apri_login();
}, 2000);
