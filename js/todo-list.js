let todoList = document.querySelector('#todo-list');

class Todo {
  constructor(title) {
    [this.title] = arguments;
  }
}

class FrontEnd {
  static addTodo(TodoObject) {
    let li = document.createElement('li');
    let deleteButton = document.createComment('BUTTON');
    deleteButton.innerHTML = `X`;
    deleteButton.className = 'delete';
    li.className = 'list';
    li.appendChild(deleteButton);
    li.innerHTML = `${TodoObject.title}`;
    todoList.appendChild(li);
  }

  static removeTodo(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static editTodo(el) {
    if (el.classList.contains('list')) {
      el.contentEditable = true;
    }
  }
}

document.querySelector('#todo-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let inputVal = document.querySelector('.todo-input').value;

  if (inputVal == '') {
    alert('Todo Input required!');
  } else {
    let todo = new Todo(inputVal);
    FrontEnd.addTodo(todo);
  }
});

todoList.addEventListener('click', (e) => {
  FrontEnd.removeTodo(e.target);
  FrontEnd.editTodo(e.target);
});
