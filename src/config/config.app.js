const { urlencoded } = require('express');
const methodOverride = require('method-override');
const helmet = require('helmet');

function config(app) {
    // config urlencoded
    app.use(urlencoded({ extended: true }));
    // confgi method-override
    app.use(methodOverride('_method'));
    // config helmet
    app.use(helmet());
}
module.exports = config;
