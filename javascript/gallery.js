window.addEventListener('load', ()=> {
    const imgs = document.querySelectorAll('#gallery img');

    function cardFull(elementClickSrc) {
        let div = document.createElement('div')
        let button = document.createElement('button')
        let img = document.createElement('img')

        div.className = 'full';
        button.id = 'btn-clear-full';
        button.innerHTML = '<i class="fa-solid fa-x"></i>';
        img.src = elementClickSrc;

        div.appendChild(button)
        div.appendChild(img)

        return div
    }

    imgs.forEach((item)=> {
        item.addEventListener('click', (e)=> {
            document.body.appendChild(cardFull(e.target.src))

            document.getElementById('btn-clear-full').addEventListener('click', ()=> {
                document.querySelector('.full').remove();
            })
        })
    })
})