let now = Date();
alert( now );

function updateClock() {
    var now = new Date();
    var date = now.toLocaleDateString('fr-FR');
    var time = now.toLocaleTimeString('fr-FR');
    var clockElement = document.getElementById('clock');
    clockElement.innerHTML = date + ' ' + time;
  }
  
  function updateCalendar() {
    var now = new Date();
    var weekStart = new Date(now.getTime() - now.getDay() * 24 * 60 * 60 * 1000);
    var weekEnd = new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000);
    var weekStartStr = weekStart.toLocaleDateString('fr-FR');
    var weekEndStr = weekEnd.toLocaleDateString('fr-FR');
    var calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = 'Semaine du ' + weekStartStr + ' au ' + weekEndStr;
  }
  
  function updateDateTime() {
    updateClock();
    updateCalendar();
  }
  
  // Mettre à jour la date et l'heure toutes les secondes
  setInterval(updateDateTime, 1000);

  function startCountdown() {
    var selectedDate = document.getElementById('dateInput').value;
    var currentDate = new Date();
    var selectedDateTime = new Date(selectedDate);
    var countdownElement = document.getElementById('countdown');
    var messageElement = document.getElementById('message');
  
    if (selectedDateTime <= currentDate) {
      countdownElement.innerHTML = '';
      messageElement.innerHTML = 'Veuillez sélectionner une date postérieure à celle d\'aujourd\'hui.';
      return;
    }
  
    messageElement.innerHTML = '';
  
    var countdownInterval = setInterval(function() {
      var now = new Date();
      var timeDifference = selectedDateTime - now;
  
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'Compte à rebours terminé !';
      } else {
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = 'Temps restant : ' + days + ' jours, ' + hours + ' heures, ' + minutes + ' minutes, ' + seconds + ' secondes';
      }
    });
  }
  