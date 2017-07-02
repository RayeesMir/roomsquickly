const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.set('debug', true)
module.exports = {
	connect: function(url) {
		mongoose.connect(url, (error) => {
			if (!error){
				console.log('Connected to Database');
			}
			else{
				console.log(error);
			}
		})
	},
	close:function(){
		mongoose.connection.close();
	}
}