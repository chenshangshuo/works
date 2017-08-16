const path = require('path');
let base = {
  index:'./app/js/entry.js'
};

module.exports = {
	entry: base,
	output:{
		path: path.resolve(__dirname, './public'),
		filename:"bundle.js"
	},
	module:{
		loaders:[
		{test:/\.css$/,loader:'style-loader!css-loader'},
		{test:/\.(png|jpg|gif|jpeg)$/,loader:'url-loader?limit=8192'},
		]
	}
};
