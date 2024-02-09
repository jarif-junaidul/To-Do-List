const userTaskInput = document.querySelector('.userTaskInput');
const taskAddButton = document.querySelector('.taskAddButton');
const taskList = document.querySelector('.taskList');

function addTask(){
    if(userTaskInput.value.trim() !== ''){
        const taskItem = document.createElement('ul');
        taskItem.innerHTML = `  <div class="lowerCard">
                                    <div class="taskText">
                                        ${userTaskInput.value}
                                    </div> 
                                    <div class="buttons">
                                        <button class="doneButton">Click If Done !</button>
                                        <button class="deletButton"><img src="delete.png" class="deletIcon"></button>
                                    </div>
                                </div>  `;
        taskList.appendChild(taskItem);
        userTaskInput.value = '';

        taskItem.querySelector('.doneButton').onclick = function(){
            this.style.backgroundColor = 'gray';
            this.style.color = 'lightgray';
            this.textContent = 'Task Completed !';
        } 

        taskItem.querySelector('.deletButton').onclick = function(){
            taskList.removeChild(taskItem);
        } 

    }   
}

taskAddButton.onclick = addTask;

userTaskInput.onkeydown = function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
};