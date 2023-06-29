function openModal () {
    const buttons = document.querySelector(".open__modal")
    const modalContainer = document.querySelector('.modal')
    const modalBackground = document.querySelector('.modal__background');

    buttons.addEventListener('click', () => {
      modalContainer.showModal()
      modalBackground.style.display = 'block';
    })
}

openModal()

function closeModal() {
    const closeModal = document.querySelector('.X')  
    const modalContainer = document.querySelector('.modal')
    const modalBackground = document.querySelector('.modal__background');
    closeModal.addEventListener('click', () => {
        modalContainer.close();
        modalBackground.style.display = 'none';
    })
}

closeModal()
