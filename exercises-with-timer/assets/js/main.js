
function stopwatch() {
const time = window.document.querySelector('.time');
const btnStart = window.document.querySelector('.btn-start');
const btnStop = window.document.querySelector('.btn-stop');
const btnReset = window.document.querySelector('.btn-reset');
let seconds = 0;
let setTime;

function createTimerSeconds(second) {
  const date = new Date(second * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC"
  });
}

function startTimer() {
  setTime = setInterval(() => {
    seconds++;
    time.innerHTML = createTimerSeconds(seconds);
  }, 1000);
}

window.document.addEventListener('click', (e) => {

  const el = e.target;

  if(el.classList.contains('btn-start')) {
    clearInterval(setTime);
    startTimer()
    time.classList.remove("pause");
    return;
  }

  if(el.classList.contains('btn-stop')) {
    clearInterval(setTime);
    time.classList.add("pause");
    return;
  }

  if(el.classList.contains('btn-reset')) {
    clearInterval(setTime);
    time.innerHTML = '00:00:00';
    time.classList.remove("pause");
    seconds = 0;
    return;
  }
});

}

stopwatch();
