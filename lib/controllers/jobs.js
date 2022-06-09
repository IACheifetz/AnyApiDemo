const { Router } = require('express');
const XivJob = require('../models/Job');


module.exports = Router() 
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchedJob = await XivJob.getById(id);
    res.json(matchedJob);
  })
   
  .get('/', async (req, res) => {
    const jobs2 = await XivJob.getAll();
    res.json(jobs2);
  });
  
