import express from 'express';
import personsController from '../controllers/persons.controller.js';

const router  = express.Router();

router.get('/persons', personsController.persons);

export default router;