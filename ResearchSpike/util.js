const fs = require('fs');

module.exports = {
    LOG : function (filePath, data){
        fs.writeFileSync(filePath, data, () => {})
    }
}