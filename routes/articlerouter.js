const express = require("express")
const router = express.Router()

const articleController = require('../controllers/articlecontroller')

router.get("/", articleController.getAll)
router.get("/", articleController.getById)
router.get("/", articleController.insertArticle)
router.get("/", articleController.updateArticleById)
router.get("/", articleController.deleteArticleById)

module.exports = router

