document.getElementById('usersList').style.display = 'none';
document.getElementById('usersDetails').style.display = 'none';
alert("Please don't enter more than 10");
document.getElementById('load-users').addEventListener('click', () => {
    const inputValue = document.getElementById('input').value;
    const value = parseInt(inputValue);
    if (value <= 10) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => getUsers(data))

        function getUsers(users) {
            document.getElementById('usersList').style.display = 'block';
            let usersList = document.getElementById('users-list');
            usersList.innerHTML = '';
            for (let i = 0; i < value; i++) {
                const user = users[i];
                const p = document.createElement('p');
                p.innerHTML = `<p>Name: <strong>${user.name}</strong> <button onclick='getUserDetail(${user.id})'>Details</button></p>`;
                usersList.appendChild(p);
            }
        }
    }
    else{
        alert(`You want ${value} user. But we haven't this much data`);
    }
})

function getUserDetail(id) {
    document.getElementById('usersDetails').style.display = 'block';
    let usersDetails = document.getElementById('users-details');
    usersDetails.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(user => {
            const address = `${user.address.street}, ${user.address.city}`
            const p = document.createElement('p');
            p.innerHTML = `Name: <strong>${user.name}</strong>
            <br>Email: <strong>${user.email}</strong>
            <br>Address : ${address}`
            usersDetails.appendChild(p);
        }
        )
}