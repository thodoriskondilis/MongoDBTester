var MongoRepository = function (options) {
    this.connectionString = options.connectionString;
    this.mongoClient = require('mongodb').MongoClient;

    this.connected = false;
    this.db = null;

    this.mongoClient.connect(this.connectionString, {server: {auto_reconnect: true}}, function (err, db) {
        if (!err) {
            var _THIS_ = this;
            this.db = db;
            this.connected = true;
            console.log("Mongo connected on " + this.connectionString);

            this.db.on('error', function (err) {
                console.log('MongoRepository connection error: ' + err);
                this.connected = false;
            }.bind(_THIS_));


            this.db.on('reconnect', function (server) {
                console.log("MongoRepository connection established:reconnected : " + this.connectionString + " " + server.toString());
                this.connected = true;
            }.bind(_THIS_));

            this.db.on('close', function (state) {
                console.log('MongoRepository connection closed '+ state);
                this.connected = false;
            }.bind(_THIS_));

        }
        else {
            console.log("error on mongo connecting on " + this.connectionString);
            console.log("ERR: " + err);

        }
    }.bind(this));

}

// Public
module.exports = MongoRepository;