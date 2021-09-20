/*Визуальные эффекты нажатия клавиш*/
const piano = document.querySelector('.piano');
const pianoКey = document.querySelectorAll('.piano-key');

const startEffect = (event) => {
    event.target.classList.add('piano-key-active');
}
const stopEffect = (event) => {
    event.target.classList.remove('piano-key-active');
}
const startCorrespondOver = (event) => {
    if (event.target.classList.contains('piano-key')) {
        event.target.classList.add('piano-key-active');
    }
    
    pianoКey.forEach((elem) => {
        elem.addEventListener('mouseover', startEffect);
        elem.addEventListener('mouseout', stopEffect);
    });
}
const stopCorrespondOver = () => {
    pianoКey.forEach((elem) => {
        elem.classList.remove('piano-key-active');
        elem.removeEventListener('mouseover', startEffect);
        elem.removeEventListener('mouseout', stopEffect);
    });
}

piano.addEventListener('mousedown', startCorrespondOver, false);
window.addEventListener('mouseup', stopCorrespondOver);
/*Визуальные эффекты нажатия клавиш конец кода*/


/*Переключение кнопок*/
notes.onclick = function () {
    if(notes.classList.contains('btn-active')) return;
    notes.classList.add('btn-active');
    letters.classList.remove('btn-active');
    pianoКey.forEach(element => element.classList.remove('piano-key-letter'));
};
letters.onclick = function () {
    if(letters.classList.contains('btn-active')) return;
    notes.classList.remove('btn-active');
    letters.classList.add('btn-active');
    pianoКey.forEach(element => element.classList.add('piano-key-letter'));
};
/*Переключение кнопок конец кода*/


/*Эффекты нажатия клавиш на клавиатуре*/
window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.piano-key[data-key='${e.keyCode}']`)
    key.classList.add('piano-key-active');
});

const stopKey = () => {
    pianoКey.forEach((elem) => {
        elem.classList.remove('piano-key-active');
    });
}

window.addEventListener('keyup', stopKey);
/*Эффекты нажатия клавиш на клавиатуре конец кода*/


/*Звуки клавиш через мышь*/
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

let isMouseDown;

piano.addEventListener('mousedown', (event) => {
    if(event.target.classList.contains('piano-key')){
        isMouseDown = true;
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);  
    }
});

window.addEventListener('mouseup', (event) => {
    isMouseDown = false;
});

piano.addEventListener('mouseover', (event) => {
    if(isMouseDown === true) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
        }
    else if(isMouseDown = false) {return;}
    }  
);
/*Звуки клавиш через мышь конец кода*/


/*Звуки клавиш через клавиатуру*/
window.addEventListener('keydown', (event) => {
    if (event.repeat) { //убирает автоповтор
        return;
    }
    const key = document.querySelector(`.piano-key[data-key='${event.keyCode}']`);
    const note = key.dataset.note; 
    const src = `assets/audio/${note}.mp3`;
    playAudio(src); 
});
/*Звуки клавиш через клавиатуру конец кода*/


/*Переход и выход из полноэкранного режима*/
document.addEventListener('click', function(event) {
    // игнорирование событий, которые произошли не на данной кнопке
    if( !event.target.classList.contains('fullscreen')) return; 
    // если элемент уже в полноэкранном режиме, выйти из него
    // В противном случае войти в полный экран
    if (document.fullscreenElement) {
     document.exitFullscreen();
    } else {
     document.documentElement.requestFullscreen();
    }
}, false);
/*Переход и выход из полноэкранного режима конец кода*/