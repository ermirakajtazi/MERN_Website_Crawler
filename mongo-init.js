db.createUser({
  user: "ermira-kajtazi",
  pwd: "ermirakajtazi",
  roles: [
    {
      role: "readWrite",
      db: "mern"
    }
  ]
});
