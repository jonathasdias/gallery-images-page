const gallery = document.getElementById('gallery');
const slider = document.getElementById('slider');

const imgs = ["https://picsum.photos/600/300?random=1","https://picsum.photos/600/300?random=2",
"https://picsum.photos/600/300?random=3","https://picsum.photos/600/300?random=4","https://picsum.photos/600/300?random=5",
"6","https://picsum.photos/600/300?random=7","https://picsum.photos/600/300?random=8",
"https://picsum.photos/600/300?random=9","https://picsum.photos/600/300?random=10","https://picsum.photos/600/300?random=11",
"https://picsum.photos/600/300?random=12"]

for(let i = 0; i < imgs.length; i++) {
    const img = `<img id="${"img-" + i}" src="${imgs[i]}" alt="imagem do slider">`
    gallery.innerHTML += img;
    slider.innerHTML += img;
}
