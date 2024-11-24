import Database from "../Database/index.js";
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
export function createEnrollment(enrollment) {
  const { enrollments } = Database;
  enrollments.push(enrollment);
  return enrollment;
}
export function deleteEnrollment(courseId, userId) {
    const { enrollments } = Database;
    Database.enrollments = enrollments.filter((enrollment) => enrollment.course !== courseId || enrollment.user !== userId);
   }

export function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
  }