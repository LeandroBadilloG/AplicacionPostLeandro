const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.D_USER}:${process.env.D_PASWORD}@clusteradsi.enayqlr.mongodb.net/${process.env.D_DATA}?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true });
module.exports = mongoose;
