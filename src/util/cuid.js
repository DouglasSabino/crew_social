const cuid = require('cuid');

const makeSerial = () => {
    const id = cuid();
    return [id];
}

module.exports = { makeSerial };
