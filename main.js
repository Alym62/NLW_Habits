const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert('Dia já incluso!🚨')
        return
    }
    
    nlwSetup.addDay(today)
}

function save(){
    localStorage.setItem('NLWHabits-Go', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWHabits-Go')) || {}
nlwSetup.setData(data)
nlwSetup.load()