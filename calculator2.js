let error = 'Error! Enter the numbers';

let addition = () => {
let firstNumber = document.getElementById("firstnumber").value;
let secondNumber = document.getElementById("secondnumber").value;
let n1 = parseFloat(firstNumber);
    let n2 = parseFloat(secondNumber);
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        document.getElementById('result').value = error;
        return;
    }
let sum = +n1 + +n2;
document.getElementById('result').value = sum;
}

let subtraction = () => {
    let firstNumber = document.getElementById("firstnumber").value;
    let secondNumber = document.getElementById("secondnumber").value;
    let n1 = parseFloat(firstNumber);
        let n2 = parseFloat(secondNumber);
        if (Number.isNaN(n1) || Number.isNaN(n2)) {
            document.getElementById('result').value = error;
            return;
        }
    let sub = n1 - n2;
    document.getElementById('result').value = sub;
    }

let multiplication = () => {
        let firstNumber = document.getElementById("firstnumber").value;
        let secondNumber = document.getElementById("secondnumber").value;
        let n1 = parseFloat(firstNumber);
            let n2 = parseFloat(secondNumber);
            if (Number.isNaN(n1) || Number.isNaN(n2)) {
                document.getElementById('result').value = error;
                return;
            }
        let mul = n1 * n2;
        document.getElementById('result').value = mul;
        }

let division = () => {
            let firstNumber = document.getElementById("firstnumber").value;
            let secondNumber = document.getElementById("secondnumber").value;
            let n1 = parseFloat(firstNumber);
                let n2 = parseFloat(secondNumber);
                if (Number.isNaN(n1) || Number.isNaN(n2)) {
                    document.getElementById('result').value = error;
                    return;
                }
            let div = n1 / n2;
            document.getElementById('result').value = div;
            }