const pg = require('../db')
const articleController = {
    getAll: async(req, res) =>{
        try{
            const{rows} = await pg.query("SELECT * FROM articles")
            res.json({msg: "OK", data: rows})
        }catch(error){
            res.json({msg:"NULL"})
        }
    },
    getById: async(req, res) => {
        try{
            const {rows} = await pg.query("SELECT * FROM articles WHERE article_id = $1", [req.params.id])
            if(rows[0]){
                return res.json({msg: "OK", data: rows})
            }
        }catch(error){
            res.json({msg: error.msg})
        }
    },
    insertArticle: async(req, res) => {
        try{
            const {title, imageUrl, content} = req.body

            const query = 'INSERT INTO articles(title, image, content) VALUES($1, $2, $3) RETURNING *'

            const { rows } = await pg.query(query, [title, imageUrl, content])

            res.json({msg: "OK", data: rows[0]})
        }catch(error){
            res.json({msg: error.msg})
        }
    },
    updateArticleById: async(req, res) => {
        try{
            const {title, imageUrl, content} = req.body

            const query = 'UPDATE articles set title = $1, image = $2, content = $3 RETURNING *'

            const {rows} = await pg.query(query, [title, imageUrl, content])

            res.json({msg: "OK", data: rows[0]})
        }catch(error){
            res.json({msg: error.msg})
        }
    },
    deleteArticleById: async(req, res) => {
        try{
            const query = 'DELETE FROM articles WHERE article_id = $1 RETURNING *'

            const {rows} = await pg.query(query, [req.params.id])

            if(rows[0]){
                return res.json({msg: "OK", data: rows[0]})
            }

            return res.status(404).json({msg: "not found"})
        }catch(error){
            res.json({msg: error.msg})
        }
    }
}

module.exports = articleController