function askName() {
    const name = prompt("What is your name?");
    document.getElementById("myName").innerText = name;
}

function showTime() {
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let weekdayNumber = date.getDay();

    let arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let weekdayName = arrayOfWeekdays[weekdayNumber]

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    let year = date.getFullYear();

    let time = h + ":" + m + ":" + s + " " + weekdayName + " " + year;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}

askName();
showTime();
