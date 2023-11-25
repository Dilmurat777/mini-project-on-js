document.querySelector('#push').onclick = function () {
  const inputText = document.querySelector('#new-task input');
  const tasks = document.querySelector('#tasks');
  
  if (document.querySelector('#new-task input').value.length == 0) {
    alert('Please Enter a Task');
  } else {
    tasks.innerHTML += `
    <div class="task">
    <span id="taskname">
    ${inputText.value}
    </span>
    <button class='delete'>
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>
    `;
    
    const current_task = document.querySelectorAll('.delete');
    for (let i = 0; i < current_task.length; i++) {
      current_task[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    
    const task = document.querySelectorAll('.task');
    for (let i = 0; i < task.length; i++) {
      task[i].onclick = function () {
        this.classList.toggle('completed');
      };
    }
  }
  inputText.value = '';
  inputText.focus();
};
