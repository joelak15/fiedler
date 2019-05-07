var db = require('../db');


var Pointage = {
    // recuperation liste de pointage dans la base de donnee mysql
    getpointages: function(callback)
    {
        return db.query('SELECT * from Pointage order by idPointage desc', callback);
    },

    // recuperation liste de pointage selon un id dans la base de donnee mysql
    getpointagesid: function(Pointage, callback)
    {
        return db.query('SELECT * from Pointage where idPointEmploye = ? order by idPointage desc',
         [Pointage.idPointEmploye],
         callback);
    },

    // creation de pointage dans la base de donnee mysql
    createpointage: function (Pointage, callback) {
        return db.query('Insert into Pointage (idPointEmploye, datePointage, arrivePointage, departPointage) values (?, ?, ?, ?)',
        [Pointage.idPointEmploye, 
            Pointage.datePointage,
            Pointage.arrivePointage,
            Pointage.departPointage], callback);
    },

    // mise a jour de liste de pointage selon un id dans la base de donnee mysql
    updatepointage: function (Pointage, callback) {
        return db.query('Update Pointage Set Pointage.departPointage = ? where idPointage = ?',
        [Pointage.departPointage,
            Pointage.idPointage
        ], callback);
    },
}

module.exports = Pointage;