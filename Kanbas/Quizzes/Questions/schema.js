import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const questionSchema = new mongoose.Schema(
  {
    title: { type: String },
    points: { type: Number },
    question: { type: String },
    choices: [choiceSchema],
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    type: { type: String, enum: ["MULTIPLE CHOICE", "TRUE FALSE", "FILL IN BLANK"] },
  },
  { collection: "questions" }
);

export default questionSchema;
