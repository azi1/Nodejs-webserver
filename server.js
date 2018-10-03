
const express = require('express');
const hbs  = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+ '/views/partials');
app.set('view engine', hbs);
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('screamIt', (text) => {
return text.toUpperCase();
});

app.use(express.static(__dirname + '/public' ));



app.get('/', (req, res) => {
    // res.send('<h1>hello express</h1>');
    // res.send({
    //     name:"Azhar",
    //     likes:['1','2']
    // })
    res.render('Home.hbs', {
        title: 'Home',
        pageTitle: 'Welcome',

    })
});

app.get('/about', (req, res) => {
    // res.send('<h1>hello express</h1>');
res.render('About.hbs',{
    pageTitle: 'About Page',

});
  
});

app.listen(port,()=> {
    console.log(`server running on port ${port}`);
});

