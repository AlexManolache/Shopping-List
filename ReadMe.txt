1.Install Node.js lastest version
2.In Terminal/ Git Bash go to the project's path and write:

- npm init and follow the instruction
->then:
- npm install --save-dev webpack webpack-cli
3. Create a file in the project named: webpack.config.js
In this file write the code between the comments /**/:

const path = require('path');
/*
module.exports = {
  mode: 'development',
  entry: {
    shop: './src/non-optimized/shop.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts'),
    publicPath: 'assets/scripts/',
  },
  devServer: {
    static: './dist',
  },
};

*/

4. In package.json file in the "scripts" under the "test" write:
 "build": "webpack",
 "build:dev": "webpack-dev-server"

5. Save the changes and write in Terminal/Git Bach where you opened it at step 2
and write these commands:

- npm run build
- npm run build:dev

6. You will see in the console your localhost and the port. Use it in the browser to get the results

7. For any changes in the code source, apply step 5 once again.

<***Small steps, passion, patience and invested time make a better world! :)***>
