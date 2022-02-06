const express=require('express');
const http=require('http');
const _=require('lodash');
const mongoose=require('mongoose');
const Blog = require('./models');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.json());
const URI='mongodb+srv://alan:alan@recipestar.bdluy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//mongodb+srv://alan:<password>@recipestar.bdluy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    console.log("connected");
}).catch((error)=>{
    console.log(error);
});

app.get('/app-add',(req,res)=>{
    const blog=new Blog({
        title:"Hello",
        snippet:"about the new blog",
        body:"Hello "
    });

    blog.save()
    .then((result)=>{       
        res.send(result);
    }).catch((error)=>{
        console.log(error);
    });
});

app.get('/getData',(req,res)=>{
Blog.find()
.then((results)=>{
res.send(results);
})
.catch((err)=>{
  console.log(err);  
});
});

app.get('/getDataById',(req,res)=>{
Blog.findById('61fec6a0b91cef3ba43031e2')
.then((results)=>{
res.send(results);
})
.catch((err)=>{
console.log(err);
});
});

app.post('/postBlog',(req,res)=>{
    console.log(req.body);
});



app.listen(3000);

app.use((req,res,next)=>{
    console.log('new request made :');
    console.log('host: ' +req.hostname);
    console.log('path:'+req.path);
    console.log('method : '+ req.method);
next();
});

app.get('/',(req,res)=>{

    res.send("<p>High</p>");
});

// const server=http.createServer((req,res)=>{
//     console.log('A request has been made');
// });

// server.listen(3000,()=>{
// console.log('Listining to Process yeah1');

// });
//redirects

app.get('/about',(req,res)=>{
res.redirect('/');
});

//404 Page
app.use((req,res)=>{
    res.send('<h1>404<h1>');
});