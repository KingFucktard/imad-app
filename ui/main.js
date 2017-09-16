console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML='sab kuch naya';
//move the image
var img= document.getElementById('madi');
var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick =function() {
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft='1000px';
    //img.style.marginRight='1000px';
    var stop = stop();
};