// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
// .then(res => res.json)
// .then(object => console.log(object))

function submitData(usersName, usersEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
        },
        body: JSON.stringify({
            name: usersName,
            email: usersEmail,
        })
    })
    .then(res => res.json())
    .then(object => {console.log(object)
        document.body.innerHTML = object.id
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}



