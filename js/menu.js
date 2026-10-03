(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-menu-open]'),
        closeModalBtn: document.querySelector('[data-menu-close]'),
        hideModal: document.querySelector('[data-menu-hide]'),
        modal: document.querySelector('[data-menu-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.hideModal.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
    console.log("test")
})();