const { Event } = require("../../models");

const update = async (req, res, next) => {
  var eventData = [];

  try {
    if (
      req.body.action === "insert" ||
      (req.body.action === "batch" && req.body.added.length > 0)
    ) {
      req.body.action === "insert"
        ? eventData.push(req.body.value)
        : (eventData = req.body.added);
      for (var a = 0; a < eventData.length; a++) {
        await Event.create(eventData[a]);
      }
    }
    if (
      req.body.action === "update" ||
      (req.body.action === "batch" &&
        req.body.changed.length > 0 &&
        req.body.changed[0].StatusForChange === true)
    ) {
      req.body.action === "update"
        ? eventData.push(req.body.value)
        : (eventData = req.body.changed);
      for (var b = 0; b < eventData.length; b++) {
        const key = await eventData[b]._id;
        delete eventData[b]._id;
        // eventData[b].StartTime = new Date(eventData[b].StartTime);
        // eventData[b].EndTime = new Date(eventData[b].EndTime);

        console.log(eventData[b]);
        console.log("key", key);
        await Event.updateOne({ _id: key }, { $set: eventData[b] });
      }
    }
    if (
      req.body.action === "remove" ||
      (req.body.action === "batch" &&
        req.body.deleted.length > 0 &&
        req.body.deleted[0].StatusForChange === true)
    ) {
      req.body.action === "remove"
        ? eventData.push({ Id: req.body.key })
        : (eventData = req.body.deleted);
      for (var c = 0; c < eventData.length; c++) {
        await Event.deleteOne({ Id: eventData[c].Id });
      }
    }
    res.send(req.body);
    console.log("eventData", eventData);
    return res.status(200).json(eventData);
  } catch (error) {
    return res.status(400).json({ message: "Invalid search characters" });
  }
};

module.exports = update;
