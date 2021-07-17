var num = 2;
function changeNumber() {
    num = num + 2;
    console.log(num)
    document.getElementById("evn").innerHTML = num
}

function reset() {
    num = 0;
    console.log(num)
    document.getElementById("evn").innerHTML = num;
}