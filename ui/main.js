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
    
};
//counter code
var button = document.getElementById('counter');
 
button.onclick=function(){
    //create request obj
    var request = new XMLHttpRequest();
    //capture the response time and store it in a variable
    request.onreadystatechange= function (){
        if(request.readystate==XMLHttpRequest.DONE) {
            //take some action
            if(request.status==200){
                var counter = request.responseText;
                var span=document.getElementById('count');
     span.innerHTML=counter.toString();
            }
        }
        //not done
    };
    //make request
    request.open('GET','http://albarvasi21.imad,hasura-app.io/counter',true);
    request.send(null);
    
};