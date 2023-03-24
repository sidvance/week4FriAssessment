const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const submitCompBtn = document.querySelector('#submitComliment')
const compInput = document.querySelector('#complimentInput')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });

};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
        })
        .catch((err) => {
            console.log(err)
        })
}

fortuneBtn.addEventListener('click', getFortune)

const submitComp = () => {

    let bodyObj = {
        compliment: compInput.value
    }

    axios.post('http://localhost:4000/api/compliment', bodyObj)
    .then(res => {
        cconsole.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

submitCompBtn.addEventListener('click', submitComp)


// const postComp = () => {
//     axios.get('http://localhost:4000/api/compliment')
//     .then(res => {

//     })
// }
