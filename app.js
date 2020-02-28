const express = require('express');
const mysql = require('mysql');
const body_parser = require('body-parser');

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true
}));
// create connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ramesh',
    database: "form_nodejs"
});


app.set("view engine", "ejs");
//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
});

app.get('/', (req, res) => {
    res.send('.......................');
});

app.get('/index', (req, res) => {
    res.render('pages/index');
})

let enc = () => {

}

let ins = () => {

}

app.post('/submit_form', (req, res) => {
    
    console.log(req.body);
    let post = req.body
    let sql = `INSERT INTO form_data ( username, password, email, dob, phonenum, salary, gender) VALUES ('${req.body.uname}', '${req.body.pw}', '${req.body.em}', '${req.body.dob}', '${req.body.pn}', '${req.body.sal}', '${req.body.optradio}');`

    let query = db.query(sql, post, (err, result) => {
        if (err) throw err
        console.log(result);
        res.render('pages/done',{
            "uname" : `${req.body.uname}`
        })
        //res.redirect('done.ejs');
    });
});


app.listen(8090, () => {
    console.log("server ran at port 8090");
});

