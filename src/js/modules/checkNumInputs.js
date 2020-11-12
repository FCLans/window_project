const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[a-zA-Zа-яА-Я\s)(]/, '');
        });
    });
};

export default checkNumInputs;