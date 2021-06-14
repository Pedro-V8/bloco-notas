const knex = require('../database');

module.exports = {
    async index(req , res , next){
        try {
            const results = await knex('notes');
            return res.json(results);
        } catch (error) {
            next(error)
        }
    },
    async create(req , res , next){
        try {
            const {titulo , descricao } = req.body
            await knex('notes').insert({
                titulo,
                descricao
            })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async delete(req , res , next){
        try {
            const { id } = req.params

            await knex('notes')
                .where({ id })
                .del()
            return res.send()            
        } catch (error) {
            next(error)
        }
    },
    async update(req , res, next){
        try {
            const { id } = req.params
            const {titulo , descricao } = req.body 
            
            await knex('notes')      
                .update({ titulo , descricao })
                .where({ id })
            return res.send()      
        } catch (error) {
            next(error)
            
        }

    }
}