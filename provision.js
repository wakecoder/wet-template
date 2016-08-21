//This script is run as a prebuild step the first time
//the build task is executed.  It makes sure TypeScript typings
//are installed.
var packageFilePath = './package.json';
var fs = require ('fs');
var childProcess = require ('child_process');

childProcess.execSync ('typings install');

var packageString = fs.readFileSync (packageFilePath);
var package = JSON.parse(packageString);

//Now that we've installed the typings, we don't need to executed
//ever again.  Modify the prebuild script to call the clean script
//instead.
package.scripts.prebuild = 'npm run clean';
fs.writeFileSync (packageFilePath,JSON.stringify(package,null,'\t'));
