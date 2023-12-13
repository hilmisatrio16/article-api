const express = require("express")
const router = express.Router()

const articleController = require('../controllers/articlecontroller')

router.get("/", articleController.getAll)
router.get("/", articleController.getById)
router.post("/", articleController.insertArticle)
router.put("/", articleController.updateArticleById)
router.delete("/", articleController.deleteArticleById)

module.exports = router

