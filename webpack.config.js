const path = require('path');

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
path: path.resolve(__dirname, 'dist')
},
module: {
rules: [
{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" }
]
},
devServer: {
port: 9000,
contentBase: path.join(__dirname, "dist")
},
resolve: {
extensions: ['.js', '.jsx']
}
};
