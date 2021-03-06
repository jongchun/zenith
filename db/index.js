(function(database) {
    var mongojs = require("mongojs");
    const MONGO_URL = "mLab URL";

    // const MONGO_URL = "institutedb" 

    var theDb = null;

    database.getDb = function(next) {
        if (!theDb) {
            // let us connect to the database
            var collections = ['zenith_a', 'zenith_e']
            var theDb = mongojs(MONGO_URL, collections);
            next(null, theDb);
        } else {
             next(null, theDb);
        }
    }
})(module.exports);