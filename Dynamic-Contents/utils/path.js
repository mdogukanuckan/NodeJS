const path = require('path');

module.exports = path.dirname(require.main.filename); // __dirname is not used here because it will give the directory of this file, not the main module.