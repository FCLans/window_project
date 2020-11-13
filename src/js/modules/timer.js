const timer = (timerSelector, deadline) => {
    
    function getTime() {
        const time = new Date(deadline) - new Date(),
              days = Math.floor(time / (1000 * 60 * 60 * 24)),
              hours = Math.floor(time / (1000 * 60 * 60) % 24),
              minutes = Math.floor(time / (1000 * 60) % 60),
              seconds = Math.floor(time / 1000 % 60);

        return {
            total: time,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num < 10 && num > 0){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock() {
        
        const timerBlock = document.querySelector(timerSelector),
            days = timerBlock.querySelector('#days'),
            hours = timerBlock.querySelector('#hours'),
            minutes = timerBlock.querySelector('#minutes'),
            seconds = timerBlock.querySelector('#seconds'),
            clockId = setInterval(updateClock, 1000);
        
            updateClock();

        function updateClock() {
            const t = getTime(),
                  form = document.querySelector('.col-lg-5.fadeInLeft'),
                  text = form.querySelector('.sale_subtitle');

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.total < 0) {
                text.textContent = `Акция была завершена - ${deadline}`;
                timerBlock.classList.add('hide');
                clearInterval(clockId);
            }
        }
    }

    setClock();
};

export default timer;