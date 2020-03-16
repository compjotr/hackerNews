const router = require('express').Router();
let Story = require('../models/stories.model');

router.route('/').get((req, res) => {
    Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.status(400).json('Error getting stories: ' + err));
});

router.route('/add').post((req, res) => {
  //const username = req.body.username;
  const id = req.body.id;
  const url = req.body.url;

  const newStory = new Story({
    //username,
    id,
    url,
  });

  newStory.save()
  .then(() => res.json('Stry added!'))
  .catch(err => res.status(400).json('Error saving story: ' + err));
});

router.route('/:id').get((req, res) => {
  Story.findById(req.params.id)
    .then(story => res.json(story))
    .catch(err => res.status(400).json('Error finding story: ' + err));
});

router.route('/:id').delete((req, res) => {
  Story.findByIdAndDelete(req.params.id)
    .then(() => res.json('Story deleted.'))
    .catch(err => res.status(400).json('Error deleting story: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Story.findById(req.params.id)
    .then(story => {
        //story.username = req.body.username;
        story.id = req.body.id;
        story.url = req.body.url;

      story.save()
        .then(() => res.json('Story updated!'))
        .catch(err => res.status(400).json('Error updating story: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;