var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
 'article-one':{
    title : 'Article-one' ,
   
    content:  `  
            <p>
        
            Everything 
            is 
            just 
            a 
            mystery
        
    </p>  `
},
'article-two':{
    title : 'Article-Two' ,
   
    content:  `  
            <p>
        
            Everything 
            is 
            just 
            a 
            mystery
        
    </p>  `
},
'article-three' :{
    title : 'Article-three' ,
   
    content:  `  
            <p>
        
            Everything 
            is 
            just 
            a 
            mystery
        
    </p>  `
}
};
function createTemplate(data) {
    var title=data.title;
    var content = data.content;
var htmlTemplate = `<html>
<head> <link href="/ui/style.css" rel="stylesheet" />
<title>
${title}</title>
</head>
<body>
    <div class="container">
    <div>
    <a href="/">Home </a>
    </div>
    <hr/>
    <h3>This is article 
    </h3>
    ${content}
</div>
</body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
