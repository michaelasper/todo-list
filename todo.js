var button = document.getElementById('submit-task')
var todo = []
var input = document.getElementById('task_name')

button.addEventListener('click', () => {
    var text = input.value
    input.value = ""
    todo.push(text)
    var ul = document.getElementById("todolist");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);

}, false)