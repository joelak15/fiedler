var db = require('../db');


var Employe = {
    getemployes: function(callback)
    {
        return db.query('SELECT * from Employe', callback);
    },
    createemploye: function (Employe, callback) {
        return db.query('Insert into Employe(nomEmploye, prenomEmploye) values(?, ?)',[Employe.nom, Employe.prenom], callback);
    },
    deleteemploye: function (Employe, callback) {
        return db.query('DELETE from t_employe WHERE id = ?', [Employe.id], callback);
    }
}

module.exports = Employe;
