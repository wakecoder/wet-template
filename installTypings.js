console.log('checing typings');
try {
    console.log ('getting');
    const typings = require.resolve('typings');
    console.log('gotten');
}
catch (err) {
    const process = require('child_process');
    console.log('installing');
    process.execSync('npm install typings --save-dev');
    process.execSync('typings install');
    console.log('done');
}
