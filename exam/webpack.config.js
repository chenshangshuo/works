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
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }
       ]
    }
};
