const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const getAllJobs = async (req, res) => {
  const alljobs = await Job.find({ createBy: req.user.userId }).sort('createdAt');
  res.status(StatusCodes.OK).json({ alljobs, counts: alljobs.length });
};
const getJob = async (req, res) => {
  res.send('get  Job');
};
const createJob = async (req, res) => {
  req.body.createBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
  res.send('update Jobs');
};
const deleteJob = async (req, res) => {
  res.send('delete  Jobs');
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
