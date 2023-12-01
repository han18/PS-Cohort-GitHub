console.log("Hey");

const app = document.getElementById("#body");

body
  .appendChild(document.createElement("div"))
  .appendChild(document.createElement("ol"))
  .appendChild(document.createElement("li")).textContent = "1";

const myLife = ["a", "h", "a", "n", "a", "n"];
myLife.forEach();
console.log(myLife);

// ============================

function getLearnerData(course, ag, submissions) {
  // Create an object to store learner data
  const learnerData = {};

  // Iterate through submissions
  submissions.forEach((submission) => {
    const learnerId = submission.learner_id;
    const assignmentId = submission.assignment_id;
    const score = submission.submission.score;
    const dueDate = new Date(
      ag.assignments.find((a) => a.id === assignmentId).due_at
    );
    const pointsPossible = ag.assignments.find(
      (a) => a.id === assignmentId
    ).points_possible;

    // Calculate penalty for late submissions
    const submissionDate = new Date(submission.submission.submitted_at);
    const isLate = submissionDate > dueDate;
    const penalty = isLate ? 0.1 : 0; // 10% penalty for late submissions

    // Calculate the normalized score (including penalty)
    const normalizedScore = Math.max(
      0,
      Math.min(1, (score - penalty) / pointsPossible)
    );

    // Initialize learner data if not already present
    if (!learnerData[learnerId]) {
      learnerData[learnerId] = {
        id: learnerId,
        scores: {},
        totalScore: 0,
        totalPointsPossible: 0,
      };
    }

    // Update learner data
    learnerData[learnerId].scores[assignmentId] = normalizedScore;
    learnerData[learnerId].totalScore += normalizedScore;
    learnerData[learnerId].totalPointsPossible += 1; // Assuming each assignment has equal weight
  });

  // Calculate average and format the result
  const result = Object.values(learnerData).map((learner) => {
    const avg = learner.totalScore / learner.totalPointsPossible;

    // Convert scores to two decimal places
    const formattedScores = Object.fromEntries(
      Object.entries(learner.scores).map(([key, value]) => [
        key,
        parseFloat(value.toFixed(2)),
      ])
    );

    return {
      id: learner.id,
      avg: parseFloat(avg.toFixed(3)),
      ...formattedScores,
    };
  });

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
