function ReverseString(userString) {
    if (userString === null || userString === undefined) {
        console.log("Введите строку");
    } else {
        console.log(userString + " -> " + userString.split('').reverse().join(''));
    }
 }
 
 const userString = prompt('Введите текст для переворота');
 ReverseString(userString)
 
 function PalindromeCheck(userString) {
    let reverseString = userString.split('').reverse().join('')
    userString === reverseString ? console.log("переданная строка является палиндромом") :
      console.log("переданная строка не является палиндромом");
 
   }
 
   const userStringnull = prompt('Введите текст');
   PalindromeCheck(userString)
 
   function ReturnMinNumber(userNumber1, userNumber2) {
    return (userNumber1 > userNumber2 ? userNumber2 : userNumber1);
   }
 
   var userNumber1 = prompt("Введите первое число");
   var userNumber2 = prompt("Введите второе число")
   console.log(ReturnMinNumber(userNumber1, userNumber2))
 
   function ValidationTaxIdentificationNumber(taxIdentificationNumber) {
    if (taxIdentificationNumber.length === 14) {
        if (taxIdentificationNumber[0] === '0' ||
            taxIdentificationNumber[0] === '1' ||
            taxIdentificationNumber[0] === '2') {
            console.log("Ваш ИНН прошел проверку")
        } else {
            console.log("Первый символ должен быть 0,1,2");
        }
    } else {
        console.log("Длина должна быть 14 символов");
    }
 }
 const taxIdentificationNumber = "4177490154510475";
 ValidationTaxIdentificationNumber(taxIdentificationNumber)
 function CountChar(userString, char) {
    let countChar = 0
    for (let i = 0; i < userString.length; i++) {
        if (userString.toLowerCase()[i] === char) {
            countChar += 1;
        }
    }
    console.log(" -> " + countChar)
 }
 
 CountChar("Abrakadabra", "a")
 
 // символа в строке. Например: CountChar("Abrakadabra", "a") -> 5, CountChar("Hello world", "o" ) -> 2