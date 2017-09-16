console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML='sab kuch naya';
//move the image
var img= document.getElementById('madi');
img.onclick =function() {
    img.style.marginLeft='100px';
}