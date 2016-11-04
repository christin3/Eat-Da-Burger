/**
 * Created by Christine on 10/31/16.
 */


//import `orm.js` into `burger.js`
var orm = require('../config/orm.js');


//create the code that will call the ORM functions using burger specific input for the ORM.
var burgers = {
    selectAll: function (callback) {
        orm.selectAll(function (result) {
            callback(result);
        });
    },
    // cols and vals are arrays
    insertOne: function (oneBurger, callback) {
        orm.create(function (result) {
            callback(result);
        });
    },
    updateOne: function (id, callback) {
        orm.updateOne(function (result) {
            callback(result);
        });
    }
};

module.exports = burgers;