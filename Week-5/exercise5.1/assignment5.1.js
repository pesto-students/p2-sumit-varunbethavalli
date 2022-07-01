// Using async/await:

function asyncAwait(){
    console.log("starting the gen*async method");
    const usersData = fetchUsersAA();
    usersData.then(resp => console.log(resp));
    const task2 = doTask2AA();
    task2.then(resp => console.log(resp));
    const task3 = doTask3AA();
    task3.then(resp => console.log(resp));
}

async function fetchUsersAA() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

async function dotask2AA() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const task2AA = await response.json();
    return task2AA;
}

async function doTask3AA() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const task3AA = await response.json();
    return task3AA;
}


// Using Generators:

function genAsync(){
    console.log("starting the gen*async method");
    const usersIt = fetchUsers();
    usersIt.next().value.then(resp => console.log(resp));
    const task2 = doTask2();
    task2.next().value.then(resp => console.log(resp));
    const task3 = doTask3();
    task3.next().value.then(resp => console.log(resp));
}

function* fetchUsers() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => { return users; })
      .catch(err => {console.log(`${err} errored`)})
      .finally(() => {console.log("Finally has been printed")});
}

function* doTask2() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(res2 => { return res2; })
        .catch(err => {console.log(`${err} errored`)})
        .finally(() => {console.log("Finally has been printed")});
}

function* doTask3() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(res3 => { return res3; })
      .catch(err => {console.log(`${err} errored`)})
      .finally(() => {console.log("Finally has been printed")});
}cd