setInterval(() => {
   let hour = document.querySelector('#hr');
   let min = document.querySelector('#mn');
   let sec = document.querySelector('#sc');

   let date = new Date();
   let hh = date.getHours() * 30;
   let mm = date.getMinutes() * 6;
   let ss = date.getSeconds() * 6;

   hour.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
   min.style.transform = `rotateZ(${(mm)}deg)`;
   sec.style.transform = `rotateZ(${(ss)}deg)`;

   const  dateString= document.querySelector('.date');

   let day = date.getDate();
   let month = date.getMonth();
   let year = date.getFullYear();
   let weekDay = date.getDay();

   const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   let showWeek = (week[weekDay]);

   const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   let showMonth = (monthString[month]);

   dateString.innerHTML = `${showWeek}, ${day} ${showMonth} ${year}`;


},1000);