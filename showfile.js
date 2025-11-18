const fs = require('fs');
const path = require('path');

const ignoreFolders = ['node_modules', '.git', '.next', '.turbo', '.DS_Store'];

function showFiles(dir, prefix = '') {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (ignoreFolders.includes(file)) return;

    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    const isDir = stats.isDirectory();

    console.log(prefix + '├── ' + file);

    if (isDir) {
      showFiles(fullPath, prefix + '│   ');
    }
  });
}

showFiles('.');
