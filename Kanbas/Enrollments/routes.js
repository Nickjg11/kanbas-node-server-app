import * as dao from "./dao.js";
import fs from 'fs';
import path from 'path';

// Define the log file path (relative to the script location)
const logFilePath = path.join("./", 'app.log');

// Logging function
function log(input) {
  // Format log entry with timestamp
  const logEntry = `[${new Date().toISOString()}] ${input}\n`;

  // Append the log entry to the log file
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
    }
  });
}
export default function EnrollmentRoutes(app) {
  app.delete("/api/enrollments/:courseId/:userId", (req, res) => {
    const { courseId, userId } = req.params;
    const status = dao.deleteEnrollment(courseId, userId);
    res.send(status);
  });

  app.post("/api/enrollments/:courseId/:userId", (req, res) => {
    const { courseId, userId } = req.params;
    const enrollment = {
        _id: Date.now().toString(),
        course: courseId,
        user: userId,
    };
    const newEnrollment = dao.createEnrollment(enrollment);
    res.send(newEnrollment);
  });

  app.get("/api/enrollments/:userId", async (req, res) => {
    const { userId } = req.params;
    const enrollments = await dao.findCoursesForUser(userId);
    log(enrollments)
    res.json(enrollments);
  });

}
