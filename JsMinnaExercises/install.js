// let deferredInstallPrompt = null;
// const installButton = document.querySelector('.install__button');
// installButton.addEventListener('click', installPWA);

// window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);


// const saveBeforeInstallPromptEvent = (evt) => {
//     //Add code to save event and show the install button
//     deferredInstallPrompt = evt;
//     installButton.removeAttribute('hidden');
// }

// const installPWA = (evt) => {
//     //Add code to show install prompt and hide the install button
//     deferredInstallPrompt.prompt();
//     //Hide install button, it cant be called twice
//     evt.srcElement.setAttribute('hidden', true);

//     //Log user response to prompt
//     deferredInstallPrompt.userChoice
//     .then((choice) => {
//         if (choice.outcome === 'accepted') {
//             console.log('User accepted the A2HS prompt', choice);
//         } else {
//             console.log('User dismissed the A2HS prompt', choice);
//         }
//         deferredInstallPrompt = null;
//     });
// }

// window.addEventListener('appinstalled', logAppInstalled);

// const logAppInstalled = (evt) => {


//     //Add code to log event
//     console.log('WeatherPlus App was installed', evt);
// }

// const getDateFromTimeStamp = (timeStamp, day, month, dateNumber, year) => {

//     // Create a new JavaScript Date object based on the timestamp
//     // multiplied by 1000 so that the argument is in milliseconds, not seconds.
//     let date = new Date(timeStamp * 1000);

//     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//     day = days[date.getDay()];
//     month = months[date.getMonth()];
//     year = date.getFullYear();
//     dateNumber = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

//     console.log(day, month, dateNumber, year);
//     return(day, month, dateNumber, year);
// }
