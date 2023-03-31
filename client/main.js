const fortuneBtn = document.querySelector('#fortuneButton')
const complimentBtn = document.getElementById("complimentButton")
const submitCompBtn = document.querySelector('#submitCompliment')
const compInput = document.querySelector('#complimentInput')
const insultBtn = document.querySelector('#insultButton')
const submitInsultBtn = document.querySelector('#submitInsult')
const deleteBtn = document.querySelector('#deleteInsult')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
    
};

const getFortune = () => {

    axios.get("http://localhost:4000/api/fortune")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch((err) => {
        console.log(err)
    })
};

const submitComp = () => {
    
    let bodyObj = {
        compliment: compInput.value
    }
    
    axios.post('http://localhost:4000/api/compliment', bodyObj)
    .then(res => {
        console.log(res.data)
        alert('That\'s so sweet, thanks!')
    })
    .catch((err) => {
        console.log(err)
    })
};

const getInsult = () => {

    axios.get("http://localhost:4000/api/insult")
    .then(res => {
        const data = res.data;
        alert(data);
    })
    .catch((err) => {
        console.log(err)
    })
}

const submitInsult = () => {
    
    let bodyObj = {
        insult: insultInput.value
    }
    
    axios.post('http://localhost:4000/api/insult', bodyObj)
    .then(res => {
        console.log(res.data)
        alert('Wow a lil spicey, don\'t ya think?')
    })
    .catch((err) => {
        console.log(err)
    })
};

const deleteInsult = () => {

    axios.delete('http://localhost:4000/api/insult')
    .then(res => {
        console.log(res.data)
        alert('Good call, your mom would have not been proud of that one...')
    })
    .catch((err) => {
        console.log(err)
    })
}


fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
submitCompBtn.addEventListener('click', submitComp)
insultBtn.addEventListener('click', getInsult)
submitInsultBtn.addEventListener('click', submitInsult)
deleteBtn.addEventListener('click', deleteInsult)

