const Exercise = require("../models/exercise");
const User = require("../models/user");
const dayjs = require("dayjs");

exports.exercise_create_post = function(req, res, next) {
  const { userId, description, duration, date } = req.body;
  const dateObj = date == "" ? new Date() : new Date(date);

  const exercise = new Exercise({
    user: userId,
    description: description,
    duration: duration,
    date: dateObj
  });

  exercise.save(function(err) {
    if (err) {
      return next(err);
    }
    // saved!
    // get username by id
    User.findOne({ _id: userId }, function(err, result) {
      if (err) {
        return next(err);
      }
      // got user
      // format datestring
      const dateStr = dayjs(dateObj).format("ddd MMM DD YYYY");

      res.json({
        username: result.username,
        description: description,
        duration: +duration,
        _id: result._id,
        date: dateStr
      });
    });
  });
};

exports.exercise_log = function(req, res, next) {
  //Check what params are available and filter results {userId}[&from][&to][&limit]
  const { userId, from, to, limit } = req.query;

  User.findOne({ _id: userId }, "username", function(err, result) {
    if (err) {
      return next(err);
    }
    // got user
    let query = Exercise.find({}, "description duration date -_id");

    if (from) {
      const fromDate = new Date(from);
      query.where("date").gte(fromDate);
    }
    if (to) {
      const toDate = new Date(to);
      query.where("date").lte(toDate);
    }
    if (limit) {
      query.limit(+limit);
    }
    query.exec(function(err, results) {
      if (err) {
        return next(err);
      }
      //we have results
      res.json({
        _id: userId,
        username: result.username,
        count: results.length,
        log: results
      });
    });
  });
};
