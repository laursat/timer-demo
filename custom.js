if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }
let msUTC = Date.now();


//document.getElementById('timer-count').innerHTML = msUTC;
setInterval(function() { 
    msUTC++;
    document.getElementById('timer-count').innerHTML = msUTC;
}, 1);

