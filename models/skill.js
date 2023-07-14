const skills = [
  { id: 1253, skill: "Debugging", has: true },
  { id: 1274, skill: "Project Management", has: true },
  { id: 1398, skill: "Software Design", has: true },
  { id: 1398, skill: "Self Movtivated", has: true },
];
function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.has = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find((skill) => skill.id === id);
  Object.assign(skill, updatedSkill);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};
