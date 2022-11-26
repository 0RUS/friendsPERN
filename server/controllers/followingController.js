const ApiError = require("../error/ApiError")
const { Person } = require("../models/models")
const sequelize = require("sequelize");

class FollowingController {
    
    async max (req, res, next) {
        try {
            let persons;
            let limit = 5;
            let order_by = sequelize.fn('max', sequelize.fn('array_length', sequelize.col('friends_ids'), 1))
            let order_type = 'DESC'
            persons = await Person.findAll({
                order: [[order_by, order_type]],
                group: ['id'],
                where : sequelize.where(sequelize.fn('not', sequelize.fn('array_length', sequelize.col('friends_ids'), 1), undefined)),
                limit
            });
            return res.json(persons)
            } catch(e) {
                next(ApiError.badRequest(e.message))
            }
    }

    async not (req, res, next) {
        try {
            let persons;
            let order_by = 'id';
            persons = await Person.findAll({
                where: sequelize.where(sequelize.fn('array_length', sequelize.col('friends_ids'), 1), undefined),
                order : [order_by]
            });
            return res.json(persons)
            } catch(e) {
                next(ApiError.badRequest(e.message))
            }
    }
}

module.exports = new FollowingController()