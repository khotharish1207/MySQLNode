/**
 * Created by lt-32 on 20/4/16.
 */

var mysql      = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'tudip123',
    database : 'tudip'
});

connection.connect();

connection.query('SELECT * from signup', function(err, rows, fields) {
    if (!err)
        console.log('The solution is: ', rows);
    else
        console.log('Error while performing Query.');
});

connection.end();

var insertIntoSignup = function(opts){
    alert('coming');
}

module.exports  = insertIntoSignup;