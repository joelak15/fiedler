var db = require('../db');


var Employe = {

        // recuperation liste des employes dans la base de donnee mysql
    getemployes: function(callback)
    {
        return db.query('SELECT * from Employe', callback);
    },

        // creation d'un employe dans la base de donnee mysql
    createemploye: function (Employe, callback) {
        return db.query('Insert into Employe(nomEmploye, prenomEmploye, fonctionEmploye) values(?, ?, ?)',[Employe.nomEmploye, 
            Employe.prenomEmploye,Employe.fonctionEmploye ], callback);
    },

        // suppresion d'un employe dans la base de donnee mysql
    deleteemploye: function (Employe, callback) {
        return db.query('DELETE from Employe WHERE idEmploye = ?', [Employe.id], callback);
    }
}

module.exports = Employe;
