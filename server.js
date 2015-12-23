var express = require('express'), 
    app = express(), 
    path = require('path');

app.get('/', function(req, res){
   res.sendFile(path.join(__dirname + '/index.html')); 
});

//create routes for the admon section
//get an instance of the router
var adminRouter = express.Router();

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

//apply the routes to our application
app.use('/admin', adminRouter);

app.listen(1337);
console.log('1337 is the magic port');