const express = require("express")
const router = express.Router()

const articleController = require('../controllers/articlecontroller')

router.get("/", articleController.getAll)
router.get("/:id", articleController.getById)
router.post("/", articleController.insertArticle)
router.put("/:id", articleController.updateArticleById)
router.delete("/:id", articleController.deleteArticleById)

module.exports = router

