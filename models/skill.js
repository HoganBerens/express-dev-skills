const skills = [
  { id: 1253, skill: "Debugging", has: true },
  { id: 1274, skill: "Project Management", has: true },
  { id: 1398, skill: "Software Design", has: true },
  { id: 1398, skill: "Self Movtivated", has: true },
];

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

module.exports = {
  getAll,
  getOne,
};
