const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All Skills",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    title: "Skill Details",
  });
}

function newSkill(req, res) {
  res.render("skills/new", {
    title: "New skill",
  });
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render("skills/edit", {
    title: "Edit Skill",
    skill,
  });
  res.redirect("/skills");
}

function update(req, res) {
  req.body.has = !!req.body.has;
  Skill.update(req.params.id, req.body);

  res.redirect(`/skills/${req.params.id}`);
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};
