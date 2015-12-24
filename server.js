var express = require('express'), 
    app = express(), 
    path = require('path');

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname + '/index.html')); 
});

//create routes for the admon section
//get an instance of the router
var adminRouter = express.Router();

// route middleware that will happen on every request
adminRouter.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
 });

//admin main page. the dashboard(http://localhost:1337/admin)
adminRouter.get('/', function(req,res){
    res.send('I am the dashboard');
});

//users page(http://localhost:1337/admin/users)
adminRouter.get('/users', function(req,res){
    res.send('I show all the users!');
});

//posts page(http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req,res){
    res.send('I show all the posts!');
});

adminRouter.get('/users/:name', function(req, res){
    res.send('hello '+req.params.name+'!');
});

//apply the routes to our application
app.use('/admin', adminRouter);

app.listen(80);

console.log('80 is the magic port');