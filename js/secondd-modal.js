(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-second-open]'),
        closeModalBtn: document.querySelector('[data-second-close]'),
        hideModal: document.querySelector('[data-second-hide]'),
        modal: document.querySelector('[data-second-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.hideModal.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    console.log("test")
})();