const express = require("express");
const {
    getToDoItems,
    getToDoItemById,
    createToDoItems,
    updateToDoItem,
    deleteToDoItem
} = require("../controllers/ToDoItemController.js");

const router = express.Router();

router.get('/todo-items', getToDoItems);
router.get('/todo-items/:id', getToDoItemById);
router.post('/todo-items', createToDoItems);
router.patch('/todo-items/:id', updateToDoItem);
router.delete('/todo-items/:id', deleteToDoItem);

module.exports = router;