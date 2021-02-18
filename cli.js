const yargs  =require ('yargs');
const fs = require('fs/promises');
const path = require ('path');


const argv= yargs
.command (['create <filename>', 'c', 'UTF-8'], 'Create component', {}, (argv) => {
// const filepath = path.resolve (argv.filename);

const componentName =  argv.filename.charAt(0).toUpperCase() + argv.filename.slice(1);
const componenta =    ` import React from  'react'
import './${componentName}.css';
  const ${componentName} = (props) => {
            return (
                    <div>
                    <div className = "wrapper"> my component is created </div>
                    </div>
            );
    };
    export default ${componentName}`

fs.mkdir(path.resolve( `${componentName}`) ,(err)=> {
    if (err) {
        console.error(err);
    }
    console.log('directory was created')
}
);

 fs.writeFile(path.resolve (`${componentName}/${componentName}.js`), componenta);

const componentStyle = '.wrapper {}';
fs.writeFile(path.resolve (`${componentName}/${componentName}.css`), componentStyle);
})
.argv
