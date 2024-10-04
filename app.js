var inputField = document.querySelector('#todoInput');
var addBtn = document.querySelector('.addTodoBtn');
var todoList = document.querySelector('.todoList');

addBtn.addEventListener('click', function () {
    var inputText = inputField.value;
    todoList.innerHTML += '<div class="todoItem"><p class="todoItemText">' + inputText + '</p>    <button class="editBtn"> Edit</button><button class="deleteBtn"> Delete </button></div>';
    inputField.value = '';

    var editBtn = document.querySelectorAll('.editBtn');
    for (var index = 0; index < editBtn.length; index++) {
        var element = editBtn[index];
        element.addEventListener('click', function () {
            var selectedTodoVal = element.previousElementSibling.innerHTML;
            var newVal = prompt('Edit Value', selectedTodoVal);
            element.previousElementSibling.innerHTML = newVal;
        });
    }
    var deleteBtn = document.querySelectorAll('.deleteBtn');
    for (var index = 0; index < deleteBtn.length; index++) {
        var element = deleteBtn[index];
        element.addEventListener('click', function () {
            element.parentElement.remove();
        });
    }


})
var deleteAllBtn = document.querySelector('.deleteAllBtn');
deleteAllBtn.addEventListener('click', function () {
    todoList.innerHTML = '';
});