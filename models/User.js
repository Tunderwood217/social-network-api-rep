const { Schema, model } = require('mongoose');
// const assignmentSchema = require('./Assignment');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },

    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought'}],
    //   _id referencing the Thought model
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
        // _id referencing the User model (self-reference)1 
},
{  toJSON: {
    virtuals: true,
  },
  id: false,
},
);
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })
  
const User = model('User', userSchema);

module.exports = User;