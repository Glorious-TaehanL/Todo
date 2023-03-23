const mongoose = require('mongoose');

const JobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      require: [true, 'Please provide company name'],
      maxlength: 30,
    },
    position: {
      type: String,
      require: [true, 'Please provide position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      require: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Jobs', JobsSchema);
