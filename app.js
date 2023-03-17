const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
// app.use('/public', express.static(path.join(__dirname, 'views/css/', 'main.html')));
app.use(session({secret:'HTRWFRE',resave:true,saveUninitialized: false,useUnifiedTopology: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/tasks',require('./routes/task'));

app.get('/', (req, res) => {
  res.render('main', { result: 'test' });
});

app.get('/login', (req, res) => {
  res.render('index');
})

app.get('/write',(req,res)=>{
    res.render('write');
});

app.get('/list',(req,res)=>{
    res.render('list');
});

app.listen(8080);

