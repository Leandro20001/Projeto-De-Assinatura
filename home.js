const planContainer = document.querySelector('#PlanContainer')
const getCard = document.querySelectorAll('.planCard.hide')
const firstDisplay = document.querySelector('#firstDisplay')


const startButton = document.querySelector('#mainButton')
startButton.addEventListener('click',()=>{
    firstDisplay.classList.add()
    planContainer.classList.remove('hide')
    getCard.forEach((c)=>{
        c.classList.remove('hide')
    })
    
})
