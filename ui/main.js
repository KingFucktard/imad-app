console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML='sab kuch naya';
//move the image
var img= document.getElementById('madi');
img.onclick =function() {
    img.style.marginLeft='1000px';
    img.style.marginRight='1000px';
}