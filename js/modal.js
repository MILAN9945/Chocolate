(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-open]'),
        closeModalBtn: document.querySelector('[data-close]'),
        hideModal: document.querySelector('[data-hide]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.hideModal.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    console.log("test")
})();