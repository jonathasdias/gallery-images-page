const gallery = document.getElementById('gallery');
const slider = document.getElementById('slider');

const imgs = ["https://source.unsplash.com/600x300?a=1","https://source.unsplash.com/600x300?b=1",
"https://source.unsplash.com/600x300?c=1","https://source.unsplash.com/600x300?d=1","https://source.unsplash.com/600x300?e=1",
"https://source.unsplash.com/600x300?f=1","https://source.unsplash.com/600x300?g=1","https://source.unsplash.com/600x300?h=1",
"https://source.unsplash.com/600x300?i=1","https://source.unsplash.com/600x300?j=1","https://source.unsplash.com/600x300?k=1",
"https://source.unsplash.com/600x300?l=1"]

for(let i = 0; i < imgs.length; i++) {
    const img = `<img id="${"img-" + i}" src="${imgs[i]}" alt="imagem do slider">`
    gallery.innerHTML += img;
    slider.innerHTML += img;
}