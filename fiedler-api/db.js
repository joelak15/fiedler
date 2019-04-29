//import
var mysql      = require('mysql');

//create connection
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'it',
    database : 'fiedler'
});
module.exports=connection;