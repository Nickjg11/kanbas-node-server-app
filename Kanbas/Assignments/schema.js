import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    number: String,
    title: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    points: Number,
    description: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;