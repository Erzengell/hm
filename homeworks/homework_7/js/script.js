const input1 = document.getElementById('value1');
const input2 = document.getElementById('value2');
const signInput = document.getElementById('sign');
const button = document.querySelector('button');
const result = document.getElementById('result');

button.addEventListener('click', () => {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();
    const signs = signInput.value.trim();
    
    if (signs !== '/' && signs !== '*' && signs !== '-' && signs !== '+') {
        result.textContent = ('Не верно введен знак. Допустимые символы  \'+\', \'-\', \'/\', \'*\'.');
    } else if (signs == '/' && value2 == 0) {
        result.textContent = ("Деление на 0 невозможно");
    } else if (value1 === '') {
        result.textContent = ("Введите первое число");
    } else if (value2 === '') {
        result.textContent = ("Введите второе число");
    } else if (signs === '-') {
        const result1 = Number(value1) - Number(value2);
        result.textContent = result1;
    } else if (signs === '*') {
        const result1 = Number(value1) * Number(value2);
        result.textContent = result1;
    } else if (signs === '/') {
        const result1 = Number(value1) / Number(value2);
        result.textContent = result1;
    } else if (signs === '+') {
        const result1 = Number(value1) + Number(value2);
        result.textContent = result1;
    } else if (signs === '+') {
        const result1 = Number(value1) + Number(value2);
        result.textContent = result1;
    }
});