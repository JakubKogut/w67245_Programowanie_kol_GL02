class book {
    constructor(title, year, surname, name) {
        this.title = title;
        this.name = name;
        this.year = year;
        this.surname = surname;
    }}

    const book1 = new book('Wladca piersieni', 1954, 'J.R.R', 'Tolkien')
    const book2 = new book('Krzyk', 1990, 'Jackson', 'Jeremy')
    const book3 = new book('test3', 2019, 'Janusz', 'Kowalski')
    const book4 = new book('test4', 2020, 'Jarek', 'Paczkowski')



    const books = [book1,book2,book3,book4];

books.forEach(element => {
    if(element.year === 2020) {
        console.log(`${element.title}` , `${element.surname}` , `${element.name}`);
    }
});
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.value.trim());
}

function isStrongPassword(password) {
    return password.value.trim().length >= 8;
}

