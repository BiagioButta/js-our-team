"use strict";

const slideHTML =document.querySelectorAll('.slide');
const prevBtnHTML =document.querySelector('.prevBtn');
const nextBtnHTML =document.querySelector('.nextBtn');

// forEach mi assegna la funzione ad ogni elemento
// la funzione mi indica di quanto sarà spostata la slide a sinistra
// a 100% si puù sostituire un altra grandezza
slideHTML.forEach( function(slide, spazioASinistra){
    slide.style.left = `${spazioASinistra * 100}%`
  });
  
let numeroPagina = 0;

// al click viene aumentato o diminuito il numeroPagina e viene applicata la funzione
nextBtnHTML.addEventListener('click', function(){
  numeroPagina++;
  scorrerePagine();
});
prevBtnHTML.addEventListener('click', function(){
  numeroPagina--;
  scorrerePagine();
});


function scorrerePagine(){
  // viene aggiunto - 1 altrimenti alla fine resterebbe una pagina vuota
  if(numeroPagina < slideHTML.length - 1){
    nextBtnHTML.style.display = 'block';
  }else{
    nextBtnHTML.style.display = 'none';
  }

  if(numeroPagina > 0){
    prevBtnHTML.style.display = 'block';
  }else{
    prevBtnHTML.style.display = 'none';
  }

  // quando viene applicata la funzione la pagina si sposta dei parametri assegnati
  slideHTML.forEach( function(slide){
    slide.style.transform = `translateX(-${numeroPagina * 100}%)`
  })
}

prevBtnHTML.style.display = 'none';

///////////////////////////////////////////////////



const nomi = ['Wayne', 'Angela', 'Walter', 'Angela', 'Scott', 'Barbara'];
const cognomi = ['Barnett', 'Caroll', 'Gordon', 'Lopez', 'Estrada', 'Ramos'];
const ruolo = ['Ceo', 'Chief' + '' + 'Editor', 'Office' + '' + 'Manager', 'Social' + '' + 'Media' + '' + 'Manager', 'Developer', 'Grapgic' + '' + 'Designer'];
const fotoProfilo = ["../img/wayne-barnett-founder-ceo.jpg", '../img/angela-caroll-chief-editor.jpg', '../img/walter-gordon-office-manager.jpg', '../img/angela-lopez-social-media-manager.jpg', '../img/scott-estrada-developer.jpg', '../img/barbara-ramos-graphic-designer.jpg'];



function card(numeroCard){
    const cardArray = [];
    for ( let i = 0; i < numeroCard; i++ ){
        cardArray[i] = {
            nome : nomi[i],
            cognome : cognomi[i],
            ruolo: ruolo[i],
            fotoProfilo: fotoProfilo[i]
        }
    }
    return cardArray;
}
card();
console.log(card(6))


function creaCard(membriTeam){
    let divCard = document.createElement('div');
    divCard.classList.add('card-container');

    let imgProfilo = document.createElement('img');
    imgProfilo.src = `${membriTeam.fotoProfilo}`;

    let nomeProfilo = document.createElement('div');
    nomeProfilo.classList.add('nome');
    nomeProfilo.append(membriTeam.nome);

    let cognomeProfilo = document.createElement('div');
    cognomeProfilo.classList.add('cognome');
    cognomeProfilo.append(membriTeam.cognome);

    let ruoloProfilo = document.createElement('div');
    ruoloProfilo.classList.add('ruolo');
    ruoloProfilo.append(membriTeam.ruolo);

    let esperienzeProfilo = document.createElement('p');
    esperienzeProfilo.classList.add('info')
    
    divCard.append(imgProfilo);
    divCard.append(nomeProfilo);
    divCard.append(cognomeProfilo);
    divCard.append(ruoloProfilo);
    divCard.append(esperienzeProfilo);
}

function stampaCard(numeroCard){
    let stampa = card(numeroCard);
    for ( let i = 0; i < numeroCard; i++){
        creaCard(stampa[i])
        console.log("Nome: " + stampa[i].nome + ",", "cognome: " + stampa[i].cognome + ",", "ruolo: " + stampa[i].ruolo + ',', 'fotoProfilo: ' + stampa[i].fotoProfilo);
    }
}
stampaCard(6)


//////////////////////////////////////////

let nomeUtentehtml = document.getElementById('nomeUtente');
let cognomeUtentehtml = document.getElementById('cognomeUtente');
let ruoloUtentehtml = document.getElementById('ruoloUtente');
let fotoProfiloUtentehtml = document.getElementById('fotoProfiloUtente');
let aggiungihtml = document.getElementById('aggiungi');




aggiungihtml.addEventListener('click', function(){

    let nuovoMembro = {
        nomeUtentehtml: nomeUtentehtml.value,
        cognomeUtentehtml: cognomeUtentehtml.value,
        ruoloUtentehtml: ruoloUtentehtml.value,
        fotoProfiloUtentehtml: fotoProfiloUtentehtml.value
    }
    creaCard(nuovoMembro)
    console.log(nuovoMembro)
})