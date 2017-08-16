const path = require('path');
let base = {
  index:'./src/js/entry.js'
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
		]
	}
};
