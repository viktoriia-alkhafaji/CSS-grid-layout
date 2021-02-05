document.querySelectorAll('button').forEach((element) => {
    element.onclick = function () {
        let layoutName = element.dataset.layout;
        document.querySelector('#grid').classList.remove('layout-1', 'layout-2', 'layout-3');
        document.querySelector('#grid').classList.add(layoutName);
    }
} );
