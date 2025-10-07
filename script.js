const courses = [
  { id: 1, title: "Intro to HTML", description: "Learn the basics of HTML.", category: "Web Development", lessons: [
    { id: 1, title: "What is HTML?", completed: false },
    { id: 2, title: "Basic Tags", completed: false },
    { id: 3, title: "Forms", completed: false }
  ] },
  { id: 2, title: "CSS for Beginners", description: "Style your websites with CSS.", category: "Web Development", lessons: [
    { id: 1, title: "Introduction to CSS", completed: false },
    { id: 2, title: "Selectors", completed: false },
    { id: 3, title: "Box Model", completed: false }
  ] },
  { id: 3, title: "JavaScript 101", description: "Get started with JS basics.", category: "Programming", lessons: [
    { id: 1, title: "Variables and Data Types", completed: false },
    { id: 2, title: "Functions", completed: false },
    { id: 3, title: "DOM Manipulation", completed: false }
  ] },
  { id: 4, title: "Python Basics", description: "Learn Python programming.", category: "Programming", lessons: [
    { id: 1, title: "Hello World", completed: false },
    { id: 2, title: "Data Structures", completed: false },
    { id: 3, title: "Control Flow", completed: false }
  ] },
  { id: 5, title: "Data Science Intro", description: "Basics of data science.", category: "Data Science", lessons: [
    { id: 1, title: "What is Data Science?", completed: false },
    { id: 2, title: "Pandas Basics", completed: false },
    { id: 3, title: "Visualization", completed: false }
  ] }
];

function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Please enter your username.");

  localStorage.setItem("vibeUser", username);
  localStorage.setItem(`completed_${username}`, JSON.stringify([]));
  localStorage.setItem(`lessons_${username}`, JSON.stringify({}));
  window.location.href = "courses.html";
}

function logout() {
  localStorage.removeItem("vibeUser");
  window.location.href = "index.html";
}

function renderCourses() {
  const username = localStorage.getItem("vibeUser");
  if (!username) return window.location.href = "index.html";

  document.getElementById("user-name").innerText = username;

  const completedCourses = JSON.parse(localStorage.getItem(`completed_${username}`)) || [];

  const container = document.getElementById("course-list");
  container.innerHTML = "";

  const searchTerm = document.getElementById("search").value.toLowerCase();
  const categoryFilter = document.getElementById("category").value;

  courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm) || course.description.toLowerCase().includes(searchTerm);
    const matchesCategory = categoryFilter === "" || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  }).forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    const isCompleted = completedCourses.includes(course.id);

    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p><strong>Category:</strong> ${course.category}</p>
      <button onclick="viewDetails(${course.id})">View Details</button>
      <button onclick="toggleCompleted(${course.id})">
        ${isCompleted ? "✅ Completed" : "Mark as Completed"}
      </button>
    `;

    container.appendChild(div);
  });
}

function viewDetails(id) {
  window.location.href = `course.html?id=${id}`;
}

function toggleCompleted(courseId) {
  const username = localStorage.getItem("vibeUser");
  let completed = JSON.parse(localStorage.getItem(`completed_${username}`)) || [];

  if (completed.includes(courseId)) {
    completed = completed.filter(id => id !== courseId);
  } else {
    completed.push(courseId);
  }

  localStorage.setItem(`completed_${username}`, JSON.stringify(completed));
  renderCourses();
}

function renderCourseDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = parseInt(urlParams.get('id'));
  const course = courses.find(c => c.id === courseId);
  if (!course) return window.location.href = "courses.html";

  const username = localStorage.getItem("vibeUser");
  if (!username) return window.location.href = "index.html";

  document.getElementById("course-title").innerText = course.title;
  document.getElementById("course-description").innerText = course.description;

  const lessonsContainer = document.getElementById("lessons-list");
  const lessonsData = JSON.parse(localStorage.getItem(`lessons_${username}`)) || {};
  const completedLessons = lessonsData[courseId] || [];

  const totalLessons = course.lessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  document.getElementById("progress-fill").style.width = `${progressPercent}%`;
  document.getElementById("progress-text").innerText = `${completedCount}/${totalLessons} lessons completed`;

  lessonsContainer.innerHTML = "";
  course.lessons.forEach(lesson => {
    const div = document.createElement("div");
    div.className = `lesson ${completedLessons.includes(lesson.id) ? 'completed' : ''}`;
    div.innerHTML = `
      <span>${lesson.title}</span>
      <button onclick="toggleLessonCompleted(${courseId}, ${lesson.id})">
        ${completedLessons.includes(lesson.id) ? "✅ Completed" : "Mark as Completed"}
      </button>
    `;
    lessonsContainer.appendChild(div);
  });
}

function toggleLessonCompleted(courseId, lessonId) {
  const username = localStorage.getItem("vibeUser");
  let lessonsData = JSON.parse(localStorage.getItem(`lessons_${username}`)) || {};
  if (!lessonsData[courseId]) lessonsData[courseId] = [];

  if (lessonsData[courseId].includes(lessonId)) {
    lessonsData[courseId] = lessonsData[courseId].filter(id => id !== lessonId);
  } else {
    lessonsData[courseId].push(lessonId);
  }

  localStorage.setItem(`lessons_${username}`, JSON.stringify(lessonsData));
  renderCourseDetail();
}

if (window.location.pathname.includes("courses.html")) {
  window.onload = renderCourses;
}

if (window.location.pathname.includes("course.html")) {
  window.onload = renderCourseDetail;
}
