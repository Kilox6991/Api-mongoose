const {param} = require('express-validator')

module.exports = (fieldId) => param(fieldId).isMongoId().withMessage('ObjectId invalida')