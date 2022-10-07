const express = require( "express");
const {
    getActivityGroups,
    getActivityGroupById,
    createActivityGroups,
    updateActivityGroup,
    deleteActivityGroup
} = require( "../controllers/ActivityController.js");

const router = express.Router();

router.get('/activity-groups', getActivityGroups);
router.get('/activity-groups/:id', getActivityGroupById);
router.post('/activity-groups', createActivityGroups);
router.patch('/activity-groups/:id', updateActivityGroup);
router.delete('/activity-groups/:id', deleteActivityGroup);

module.exports = router;