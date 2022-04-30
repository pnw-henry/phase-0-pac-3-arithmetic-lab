function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function increment(n)
{
    n++;
    return n;
}

function decrement(n)
{
    n--;
    return n;
}

function makeInt(n)
{
    let newInt = parseInt(n, 10);
    return newInt;
}

function preserveDecimal(n)
{
    let decimalValue = parseFloat(n);
    return decimalValue;
}