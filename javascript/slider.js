window.addEventListener('load', ()=> {
    const imgs = document.querySelectorAll('#slider img');
    const btn_right = document.getElementById('btn-right');
    const btn_left = document.getElementById('btn-left');
    let currentImg = 0;
    const maxImgs = imgs.length;

    imgs[0].classList.add('active')

    function checkCurrentImg() {
        if(currentImg >= maxImgs) {
            currentImg = 0;
        }else if(currentImg < 0) {
            currentImg = maxImgs -1
        }
    }

    function clickRight() {
        currentImg += 1;
        checkCurrentImg()
        mudar()
    }

    function clickLeft() {
        currentImg -= 1;
        checkCurrentImg()
        mudar()
    }

    window.addEventListener('keydown', (e)=> {
        switch (e.key) {
            case "ArrowRight":
                clickRight();
                break;
            case "ArrowLeft":
                clickLeft();
                break;
            default:
                break;
        }
    })

    btn_left.addEventListener('click', ()=> {
        clickLeft()
    })
    
    btn_right.addEventListener('click', ()=> {
        clickRight()
    })

    function mudar() {
        imgs.forEach((img)=> {
    
            img.classList.remove('active')

            imgs[currentImg].scrollIntoView({
                block: "end",
                inline: 'center',
                behavior: "smooth"
            });

            imgs[currentImg].classList.add('active')
        })
    }
})