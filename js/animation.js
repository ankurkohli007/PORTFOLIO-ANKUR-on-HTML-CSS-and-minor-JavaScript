const values = [
    { id: "circle1", textIdA: "text1a", target: 12 },
    { id: "circle2", textIdA: "text2a", target: 2 },
    { id: "circle3", textIdA: "text3a", target: 2 },
    { id: "circle4", textIdA: "text4a", target: 24.2 },
    { id: "circle5", textIdA: "text5a", target: 29 },
    { id: "circle6", textIdA: "text6a", target: 3 }
];

const maxOffset = 251.2;

function animateValue(circleId, textIdA, targetValue) {
    let progress = 0;
    const circle = document.getElementById(circleId);
    const textA = document.getElementById(textIdA);

    let interval = setInterval(() => {
        if (progress >= targetValue) {
            clearInterval(interval);
            textA.textContent = Math.round(targetValue);
            circle.style.strokeDashoffset = maxOffset - (targetValue / 100) * maxOffset;
        } else {
            progress += targetValue / 50;
            textA.textContent = Math.round(progress);
            circle.style.strokeDashoffset = maxOffset - (progress / 100) * maxOffset;
        }
    }, 20);
}

values.forEach((item, index) => {
    setTimeout(() => animateValue(item.id, item.textIdA, item.target), index * 500);
});