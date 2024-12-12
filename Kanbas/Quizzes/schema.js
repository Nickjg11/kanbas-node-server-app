import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    title: String,
    published: Boolean,
    availability: Boolean,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    points: Number,
    numQuestions: Number,
    score: Number,
    type: {
      type: String,
      enum: ["GRADED QUIZ", "PRACTICE QUIZ", "GRADED SURVEY", "UNGRADED SURVEY"],
      default: "GRADED QUIZ",
    },
    group: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
      default: "QUIZZES",
    },
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    numAttempts: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneAtATime: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
  },
  { collection: "quizzes" }
);
export default quizSchema;