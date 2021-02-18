import express from 'express';

const router = express.Router();

router.get('/pokemon', (req, res) => { return res.send("LETS CATCH'EM ALL!") });

export { router }