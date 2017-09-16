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
    request.onreadystatechange = function (){
        if(request.readyState===XMLHttpRequest.DONE) {
            //take some action
            if(request.status===200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done
    };
    //make request
    request.open('GET','http://albarvasi21.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
//submit name
var nameInput=document.getElementById('name');
var name = nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick= function(){
  //makearequestto the server and send the name capture a nnamelist and render it as the list  
  var names=['name1','name2','name3'];
  var list ='';
  for(var i=0;i<names.length;i++){
      list +='<li>'+names[i]+ '</li>';
  }
  var ul=document.getElementById('namelist');
  ul.innerHTML=list;
};