/* 1. Creare un oggetto che descriva uno studente,
      con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(),
   di aggiungere all’array creato in precedenza,
   un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente! */

//** 1. Creo l'oggetto student con le seguenti proprietà: nome, cognome e età.
const student = {
    name: 'Marco',
    lastName: 'Truncellito',
    age: '26',
}
console.log(student);
//** 2. Stampo a schermo le prorietà dell'oggetto

// Recupero elemento in pagina
const stuPropField = document.getElementById('student-properties');

// Dichiaro la variabile che mi consente di montare 
let studPropElement = '';
// Ciclo for in per recuperare tutte le proprietà
for (let key in student) {
    studPropElement += `${student[key]} `;
}
stuPropField.innerHTML = studPropElement;

//** 3. Creare un array di oggetti di studenti(ossìa oggetti con le proprietà sopra descritte).
const students = [
    {
        name: 'Marco',
        lastName: 'Truncellito',
        age: '26',
    },
    {
        name: 'Pippo',
        lastName: 'Rossi',
        age: '52',
    },
    {
        name: 'Paperino',
        lastName: 'Bianchi',
        age: '38',
    }
];

console.table(students);

//** 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
// Recupero elemento in pagina per stampare
const studNameLastname = document.getElementById('stud-name-lastname');


let message = '';
for (let i = 0; i < students.length; i++) {
    // Dichiaro la variabile che mi consente di prendere un oggetto i nell'array
    const currentStudents = students[i];
    console.log(currentStudents.name, currentStudents.lastName);
    const nameProp = currentStudents.name;
    const lastNameProp = currentStudents.lastName;
    const fullName = nameProp + lastNameProp;
    message += `Il ${(i + 1)} studente si chiama ${fullName} <br>`;
}
studNameLastname.innerHTML = `${message}`;


//** 5. Dare la possibilità all’utente, attraverso 3 prompt(),
//**    di aggiungere all’array creato in precedenza,
//**    un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età 

const button = document.getElementById('button');
const register = document.getElementById('register');

// Funzione che mi costruisce una tabella
const tableCostruction = (currentElement) => {
    const keysArray = Object.keys(currentElement);
    console.log(keysArray);

    register.innerHTML = '';

    const table = document.createElement('table');
    const trHead = document.createElement('tr');
    table.appendChild(trHead);

    for (let i = 0; i < keysArray.length; i++) {
        currentKey = keysArray[i];
        const td = document.createElement('td');
        td.innerHTML = `${currentKey}`;
        trHead.appendChild(td);
    }

    for (let y = 0; y < students.length; y++) {
        const currentStudents = students[y];
        const trBody = document.createElement('tr');
        for (let j = 0; j < keysArray.length; j++) {
            currentKey = keysArray[j];
            const tdValue = document.createElement('td');
            tdValue.innerHTML = `${currentStudents[currentKey]}`;
            trBody.appendChild(tdValue);

        }
        table.appendChild(trBody);
    }
    return table
}


// Funzione che mi gestisce le operazioni al click
const onClick = () => {
    const nameValue = document.getElementById('name').value;
    const lastNameValue = document.getElementById('last-name').value;
    const ageValue = document.getElementById('age').value;
    const containerTable = document.getElementById('container-table')

    let currentStudents;

    const currentElement = {
        name: nameValue,
        lastName: lastNameValue,
        age: ageValue,
    }

    students.push(currentElement)
    const table = tableCostruction(currentElement);
    register.appendChild(table);

    containerTable.classList.remove('d-none');
    register.classList.remove('d-none');

}
button.addEventListener('click', onClick);