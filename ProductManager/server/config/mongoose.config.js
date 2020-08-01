const mongoose = require('mongoose')

module.exports = (name) => {
    mongoose.connect(`mongodb://localhost:8000/${name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
}
