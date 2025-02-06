function animateCounter(id, target){
    const element = document.getElementById(id);
    const speed = 10000;

    let count = 0;

    const updateCounter = () => {
        const increment = Math.ceil(target / speed);
        count += increment;

        if (count >= target){
            element.textContent = target;

        }else{
            element.textContent = count;
            setTimeout(updateCounter, 10);
        }
    };
    updateCounter();
}

document.addEventListener("DOMContentLoaded", () => {
    animateCounter("universities", 26);
    animateCounter("colleges", 50);
    animateCounter("bursaries", 100);
});