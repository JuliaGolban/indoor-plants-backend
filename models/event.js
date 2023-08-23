const { Schema, model, SchemaTypes } = require("mongoose");

const eventSchema = new Schema(
  {
    // owner: { type: SchemaTypes.ObjectId, ref: "users" },
    Location: {
      type: String,
    },
    Subject: {
      type: String,
      required: [true, "Subject is required"],
    },
    StartTime: {
      type: String,
      required: [true, "StartTime is required"],
    },
    EndTime: {
      type: String,
      required: [true, "EndTime is required"],
    },
    IsAllDay: {
      type: Boolean,
      required: [true, "IsAllDay is required"],
    },
    Description: {
      type: String,
    },
    OwnerId: {
      type: Number,
      required: [true, "OwnerId is required"],
    },
    CreateId: {
      type: String,
      required: [true, "CreateId is required"],
    },
    StatusForChange: {
      type: Boolean,
      default: true,
    },
    Id: {
      type: String,
      required: [true, "Id is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    Guid: {
      type: String,
    },
    StartTimezone: {
      type: String,
      default: null,
    },
    EndTimezone: {
      type: String,
      default: null,
    },
    RecurrenceRule: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Event = model("event", eventSchema);

module.exports = Event;
