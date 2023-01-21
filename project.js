console.log("This is alarm js file");

let submit = document.getElementById("btnsubmit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let alarm = document.getElementById("setalarm");
    let setDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarm.value}....`);
    now = new Date();
    let validate = setDate - now;
    if (validate >= 0) {
        console.log(`Your remaining time for alarm is ${validate}`);

        setTimeout(() => {
            console.log("Ringing now")
            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
            audio.play();
        }, validate);
    }
    else {
        console.log(`Your remaining time for alarm is ${validate}`);

    }
})