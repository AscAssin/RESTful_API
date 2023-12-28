const joi = require('@hapi/joi')
const { param } = require('../routes/user')

const routerHelper = {
    validate: (schema, name) => {
        return (req, res, next) => {
            console.log('params', req.params[name])
            const validatorRS = schema.validate({
                params: req.params[name]
            })
            if (validatorRS.error) {
                return res.status(400).json(validatorRS.error)
            } else {
                if (!req.value) req.value = {}
                if (!req.value['params']) req.value.params = {}

                req.value.params[name] = req.params[name]

                next()
            }
        }
    },
    schema: () => {
        idSchema: joi.object().keys({
            params: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
}

module.exports = routerHelper