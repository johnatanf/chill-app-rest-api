const Content = require('../models').Content
const ParentalRating = require('../models').ParentalRating

const getContents = async (req, res) => {
  const contents = await Content.findAll({ include: ParentalRating });
  res.send(contents);
};

const createContent = async (req, res) => {
  const content = ["create content"];
  res.send(content);
};

const getContent = async (req, res) => {
  const id = req.params.id;
  const content = ["get content", id];

  res.send(content);
};

const deleteContent = async (req, res) => {
  const id = req.params.id;
  const content = ["delete content", id];

  res.send(content);
};

const updateContent = async (req, res) => {
  const id = req.params.id;
  const content = ["update content", id];

  res.send(content);
};

module.exports = {
  getContents,
  createContent,
  getContent,
  deleteContent,
  updateContent,
};
