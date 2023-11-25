document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.querySelector('#new-task input');
  const pushBtn = document.querySelector('#new-task #push');
  const tasks = document.querySelector('#tasks');

  pushBtn.addEventListener('click', function() {
    addTask()
  });

  inputText.addEventListener('keydown', function(e) {
    if(e.key === 'Enter' || e.keyCode === 13) {
      addTask()
    }
  })

  function addTask() {
    const textInput = inputText.value.trim();

    if(textInput.length === 0) {
      return;
    }

    tasks.innerHTML += `
      <div class="task">
          <span id="taskname">${textInput}</span>
        <button class="delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `
    inputText.value = '';
    inputText.focus();

    const deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', function() {
        this.parentNode.remove()
      })
    })

    const task = document.querySelectorAll('.task');
    task.forEach((task) => {
      task.addEventListener('click', function() {
        this.classList.toggle('completed')
      })
    })
  }
  
    
})
