const contents = document.querySelectorAll('.program-line__content');

const close = (param, className, classRemove) => {
    param.forEach((elem) => {
        descr = elem.querySelector(className);
        descr.classList.remove(classRemove);
    });
};

contents.forEach((elem) => {

    const title = elem.querySelector('.program-line__title'),
        descr = elem.querySelector('.program-line__descr');

    title.addEventListener('click', () => {

        close(contents, '.program-line__descr', 'active');

        descr.classList.toggle('active');
    })

})

