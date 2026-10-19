/* ── OPEN BOTH WHATSAPP NUMBERS ── */
var WA_TEXT = 'Hi%20Kap%20Warriors%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.';
var WA_NUM1 = '919923113199';
var WA_NUM2 = '919923113199';

function openBothWA(e) {
  if (e) e.preventDefault();
  window.open('https://api.whatsapp.com/send?phone=' + WA_NUM1 + '&text=' + WA_TEXT, '_blank');
  setTimeout(function () {
    window.open('https://api.whatsapp.com/send?phone=' + WA_NUM2 + '&text=' + WA_TEXT, '_blank');
  }, 1500);
}
