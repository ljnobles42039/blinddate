const express = require('express')
const router = express.Router()
const Event = require('../models/Event')

// All Events Route
router.get('/', async (req, res) => {
    const events = await Event.find()
    .then((event) => res.status(201).json({ event }))
    .catch((err) => res.status(500).json({ err }));
})

// Individual Event Route
router.get('/detail/:id', async (req, res) => {
    const { id } = req.params
    const events = await Event.findById(id)
    .then((event) => res.status(201).json({ event }))
    .catch((err) => res.status(500).json({ err }));
});

// New Event
router.get('/add',async (req, res, next) => {
	const events = await Event.find()
    .then((event) => res.status(201).json({ event }))
    .catch((err) => res.status(500).json({ err }));
}) 

// Create Event Route
router.post('/', async (req, res) => {
  const event = new Event({
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    timeofDay: req.body.timeOfDat,
    cost: req.body.cost,
    typeOfEvent: req.body.typeOfEvent,
    geolocation: req.body.geolocation,
    image: req.body.image
  })
  await Event.create({ 
    author: req.body.author,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    timeofDay: req.body.timeOfDat,
    cost: req.body.cost,
    typeOfEvent: req.body.typeOfEvent,
    geolocation: req.body.geolocation,
    image: req.body.image
  })
  .then((event) => res.status(201).json({ event }))
  .catch((err) => res.status(500).json({ err }));
});


// Edit Event Route
router.get('/:id/edit', async (req, res) => {
    const event = await Event.findById(req.params.id)
    .then((event) => res.status(200).json({ event }))
    .catch((err) => res.status(500).json({ err }));
})

// Update Event Route
router.put('/:id', async (req, res) => {
    try {
        const eventUpdated = await Event.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        console.log(eventUpdated)
        res.status(200).json({ eventUpdated })
    } catch (err) {  
        console.log(err)
        res.status(500).json({ err })
    }
});

// Delete Event Page
router.delete('/:id', async (req, res) => {
  let event
  try {
    event = await Event.findById(req.params.id)
    await event.remove()
  } catch {
    ((err) => res.status(500).json({ err }));
  }
})


module.exports = router;