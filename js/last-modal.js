(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-last-open]'),
        closeModalBtn: document.querySelector('[data-last-close]'),
        hideModal: document.querySelector('[data-last-hide]'),
        modal: document.querySelector('[data-last-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.hideModal.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    console.log("test")
})();