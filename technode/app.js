var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var Controllers = require('./controllers');

var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'/static')));
app.use(function(req,res){
	res.sendFile(path.join(__dirname,'./static/index.html'));
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extend:true
}))
app.use(cookieParser());
app.use(session({
	secret:'technode',
	resave:true,
	saveUninitialized:false,
	cookie:{
		maxAge:60*1000
	}
}))


var server = app.listen(port,function(){
	console.log('technode is on port'+ port +'!');
});
var io = require('socket.io').listen(server);

var messages= [];
io.sockets.on('connection',function(socket){
	socket.on('getAllMessages',function(){
		socket.emit('allMessages',messages);
	})
	socket.on('createMessage',function(message){
		messages.push(message);
		io.sockets.emit('messageAdded',message);
	})
});

app.get('/api/validate',function(req,res){
	var _userId = req.session._userId;
	if(_userId){
		Controllers.User.findUserById(_userId,function(err,user){
			if(err){
				res.json(401,{msg:err});
			}else{
				res.json(user);
			}
		})
	}else{
		res.json(401,null);
	}
})

app.post('/api/validate',function(req,res){
	var email = req.body.email;
	if(email){
		Controllers.User.findByEmailOrCreate(email,function(err,user){
			if(err){
				res.json(500,{
					msg:err
				})
			}else{
				req.session._userId = user._id;
				res.json(user);
			}
		})
	}else{
		res.json(403);
	}
})

app.get('/api/logout',function(req,res){
	req.session._userId = null;
	res.json(401);
})