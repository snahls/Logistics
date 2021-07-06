const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://goku97:goku1997@cluster0.osfg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) { console.log("database Connected"); }
    else { console.log("Error in Db connection : " + err); }
});

require('./logistic_reg.model');
require('./logistic.model');
require('./adminModel');
require('./pincodeModel');
