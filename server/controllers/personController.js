const ApiError = require("../error/ApiError")
const { Person } = require("../models/models")
const { Op } = require("sequelize");

class PersonController {
    async getAll (req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        let persons;
        persons = await Person.findAll({order:['id'], limit, offset})
        return res.json(persons)
    }

    async getOne (req, res) {
        const {id} = req.params
        const person = await Person.findOne({where:{id}})
        return res.json(person)
    }

    async getFriends (req, res, next) {
        try {
        let {order_by, order_type, limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit
        
        const {id} = req.params
        const person = await Person.findOne({where:{id}})
        
        let persons;
        if (order_by && order_type) {
            persons = await Person.findAndCountAll({
                order:[[order_by,order_type]], 
                where:{friends_ids:{[Op.contains]:[id]}, 
                id:person.friends_ids}, limit, offset})
        }
        if (!order_by && !order_type)
            persons = await Person.findAndCountAll({
                where:{friends_ids:{[Op.contains]:[id]}, 
                id:person.friends_ids}, limit, offset})
        return res.json(persons)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            let {first_name, gender, friends_ids} = req.body
            const person = await Person.create({first_name, gender, friends_ids}) 
            return res.json(person)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            let {id, first_name, gender, friends_ids} = req.body
            const person = await Person.update({first_name, gender, friends_ids}, {where: {id}}) 
            return res.json(person)
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.body
            await Person.destroy({ where: {id} })
            return res.json(id + " was destroyed")
        } catch(e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new PersonController()