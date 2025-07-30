const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
  
// new Date() - отдает встроенный объект с информацией о дате и времени
function startSecundomer() {
    const time = new Date()
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    const hours   = time.getHours()
    
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    
    hoursBox.textContent = hours < 10 ? '0' + hours : hours
    minutesBox.textContent = minutes < 10 ? '0' + minutes : minutes
    
    // setTimeout(() => startSecundomer(), 1000);
    
}
startSecundomer()


// рекурсия - это когда функция вызывает саму себя
// setTimeout() - Это встроенная функция которая добавляет задержку



const tabsItem = document.querySelectorAll('.tabsItem');
const contentItem = document.querySelectorAll('.tabsContentItem')
const stopHours = document.querySelector('.stopwatch__hours')
const stopMinutes = document.querySelector('.stopwatch__minutes')
const stopSeconds = document.querySelector('.stopwatch__seconds')
const stopBtn = document.querySelector('.stopwatch__btn')
const spans = document.querySelectorAll('.tabsLink__span')


tabsItem.forEach((tabs, i) => {
    tabs.addEventListener('click', () => {
        removeActive()
        tabs.classList.add('active')
        contentItem[i].classList.add('active')
    })
})

function removeActive() {
    tabsItem.forEach((tabs,i) => {
        tabs.classList.remove('active')
        contentItem[i].classList.remove('active')
    })
}


spans.forEach(span => {
    span.addEventListener('click', () => {
        removeActive();
    });
});


let hours = 0;
let minutes = 0;
let seconds = 0;


function update() {
    stopHours.textContent = hours;
    stopMinutes.textContent = minutes;
    stopSeconds.textContent = seconds;
}

function secundomer() {
    if (!secundomer) return;
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    update();
    setTimeout(secundomer, 1000);
}

stopBtn.addEventListener('click', () => {
    if (stopBtn.textContent === 'start') {
        stopBtn.textContent = 'stop';
        secundomer();
    } else if (stopBtn.textContent === 'stop') {
        stopBtn.textContent = 'clear';
    } else if (stopBtn.textContent === 'clear') {
        hours = 0;
        minutes = 0;
        seconds = 0;
        update();
        stopBtn.textContent = 'start';
    }
});




