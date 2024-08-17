const fs = require("fs");

console.log(process.argv);

let [, , command] = process.argv;

if (command == "create") {
  let [, , , title] = process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  todo.push({ title: title });

  fs.writeFileSync("./todo.json", JSON.stringify(todo));
} else if (command == "list") {
  console.log(JSON.parse(fs.readFileSync("./todo.json", "utf8")));
} else if (command == "update") {
  // let[,,,title,newTitle]=process.argv;
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  let [, , , title, newTitle] = process.argv;
  for (var i = 0; i < todo.length; i++) {
    if (todo[i].title == title) {
      todo[i].title = newTitle
    }
  }
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
}else if (command == "deleteALL") {
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  let [, , ] = process.argv;
  for (var i = 0; i < todo.length; i++) {
    
      todo.splice(i)
    
  }
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
} else if (command == "delete") {
  let todo = JSON.parse(fs.readFileSync("./todo.json", "utf8"));
  let [, , , title] = process.argv;
  for (var i = 0; i < todo.length; i++) {
    if (todo[i].title == title) {
      todo.splice(i, 1)
    }
  }
  fs.writeFileSync("./todo.json", JSON.stringify(todo));
}