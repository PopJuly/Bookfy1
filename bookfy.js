console.log('Welcome user!');

function createImage(src) {
  const image = document.createElement('img');
  image.src = src;
  return image;
}

function onThumbnailClick(event) {
  const image = createImage(event.currentTarget.src);
  modalView.appendChild(image);
  modalView.classList.remove('hidden');
}

function onModalClick() {
  modalView.classList.add('hidden');
  modalView.innerHTML = '';
}

// Main

const albumView = document.querySelector('#album-view');
for (let i = 0; i < PHOTO_LIST.length; i++) {
  const photoSrc = PHOTO_LIST[i];
  const image = createImage(photoSrc);
  image.addEventListener('click', onThumbnailClick);
  albumView.appendChild(image);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

/*--------------------------------------------------------*/

function onLink(){
    console.log('Link cliccato!');
}


const link = document.querySelector('a');
link.addEventListener('click', onLink);

//Verifica dei campi del login

function validazione(event){
  if(form.nome.value.length == 0 || form.cognome.value.length == 0 ||
    form.email.value.length == 0 || form.password.value.length == 0){
      alert("Compilare tutti i campi.");
      event.preventDefault();
    }
}


const form = document.forms['form_login'];
form.addEventListener('submit', validazione);








