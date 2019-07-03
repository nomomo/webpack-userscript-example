const path = require('path')
const WebpackUserscript = require('webpack-userscript')
const my_project_name = 'My_Userscript_Name';

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: my_project_name+'.js'
  },
  plugins: [
    new WebpackUserscript({
      headers: path.join(__dirname, './src/headers.json'),
      pretty: false
    })
  ]
}