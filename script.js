// script.js mein
const timerElement = document.getElementById("timer");

function updateClock() {
    const now = new Date();

    // AccioJob format: M/D/YYYY, hh:mm:ss AM/PM
    const options = {
        year: 'numeric',
        month: 'numeric', // Single digit month ke liye
        day: 'numeric',   // Single digit day ke liye
        hour: 'numeric',  // Single digit hour ke liye
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    let format = now.toLocaleString('en-US', options);
    
    // Test case comma aur space dono check karta hai
    // Agar test fail ho toh replace mat karna, simple format use karna
    timerElement.innerText = format.replace(',', ","); 
}

// Clock ko har second update karne ke liye
setInterval(updateClock, 1000);

// Pehli baar turant dikhane ke liye function call karein
updateClock();