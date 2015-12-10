/**
 * Created by t.kondilis on 12/10/2015.
 */

var MongoRepository = require('./dal/MongoRepository');
var __globals;
__globals = (function () {

    // Instance stores a reference to the Singleton
    var instance = null;

    function init() {

        return {
            mongoRepository: new MongoRepository({connectionString: "mongodb://localhost:27017/testDB"})
        };

    }

    return {

        getInstance: function () {

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    };

})();



module.exports = __globals.getInstance();