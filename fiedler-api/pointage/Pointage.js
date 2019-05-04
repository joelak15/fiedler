var db = require('../db');


var Pointage = {
    getpointages: function(callback)
    {
        return db.query('SELECT * from Pointage', callback);
    },
    createpointage: function (Pointage, callback) {
        return db.query('Insert into Pointage (idPointEmploye, datePointage, arrivePointage, departPointage) values (?, ?, ?, ?)',
        [Pointage.idPointEmploye, 
            Pointage.datePointage,
            Pointage.arrivePointage,
            Pointage.departPointage], callback);
    },
    
    updatepointage: function (Pointage, callback) {
        return db.query('Update Pointage Set Pointage.departPointage = ? where idPointage = ?',
        [Pointage.departPointage,
            Pointage.idPointage
        ], callback);
    },
}

module.exports = Pointage;