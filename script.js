const inputElement = document.querySelector('.new-task-input')
const addTaskButton = document.querySelector('.new-task-button')
const tasksContainer = document.querySelector('.tasks-container')

const validateInput = () => inputElement.value.trim().length > 0

const handleAddTask = () => {
    const inputInvalid = validateInput()

    if(!inputInvalid){
        return inputElement.classList.add('error')
    }

    const taskItemContainer = document.createElement('div')
    taskItemContainer.classList.add('task-item')

    const taskContent = document.createElement('p')
    taskContent.innerText = inputElement.value

    taskContent.addEventListener('click', () => handleClick(taskContent))

    const deleteItem = document.createElement('img')
    deleteItem.src = '../ICONES/icones_azuis/icons8-lixo-50.png'

    deleteItem.addEventListener('click', () => handleDeleteClick(taskItemContainer,taskContent))

    taskItemContainer.appendChild(taskContent)
    taskItemContainer.appendChild(deleteItem)

    tasksContainer.appendChild(taskItemContainer)


    inputElement.value = ''
};

const handleClick = (taskContent) =>{
    const tasks = tasksContainer.childNodes

    for(const task of tasks){

        const currenntTaskIsBeingCliked = task.firstChild == taskContent

        if(currenntTaskIsBeingCliked){
            task.firstChild.classList.toggle('completed')
        }
    }

    updateLocalStorage()
}
/* Armazenar a condicao em unica variavel

for(const task of tasks){
        if(task.firstChild == taskContent){
            task.firstChild.classList.toggle('completed')
        }
    }

*/

const handleDeleteClick = (taskItemContainer,taskContent) =>{
    const tasks = tasksContainer.childNodes

    for(const task of tasks){
        if(task.firstChild == taskContent){
            taskItemContainer.remove()
        }
    }
    updateLocalStorage()
}

const handleInputChange = () =>{
    const inputInvalid = validateInput()

    if(inputInvalid){
        return inputElement.classList.remove('error')
    }
}

const updateLocalStorage = () =>{
    const tasks = tasksContainer.childNodes

    const LocalStorageTask = [...tasks].map(task =>{
        const content = task.firstChild
        const inCompleted = con
    })
}

addTaskButton.addEventListener('click', () => handleAddTask())

inputElement.addEventListener('change', () => handleInputChange())

inputElement.addEventListener('keyup', function(event){
    if(event.keyCode == 13){
        event.preventDefault()
        addTaskButton.click()
    }
})