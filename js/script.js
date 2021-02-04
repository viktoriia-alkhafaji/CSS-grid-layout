hideAll();

document.querySelectorAll('button').forEach((element) => {
    element.onclick = function () {
        hideAll();
        console.log(element.dataset.layout);
        let layoutName = element.dataset.layout;
        document.querySelector(`.${layoutName}`).classList.remove('hide');
    }
} );

function hideAll () {
    document.querySelectorAll('.grid').forEach((el) => {
        el.classList.add('hide');
    });
}

