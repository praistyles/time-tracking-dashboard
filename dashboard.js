//SELECTING BUTTONS 

const dailyBtn = document.querySelector('.js-daily');
const weeklyBtn = document.querySelector('.js-weekly');
const monthlyBtn = document.querySelector('.js-monthly');

//SELECTING PARAGRAPHS 

const currentWork = document.querySelector('.js-current');
const previousWork = document.querySelector('.js-previous');

const currentPlay = document.querySelector('.js-play-current');
const previousPlay = document.querySelector('.js-play-previous');

const currentStudy = document.querySelector('.js-study-current');
const previousStudy = document.querySelector('.js-study-previous');

const currentExercise = document.querySelector('.js-exercise-current');
const previousExercise = document.querySelector('.js-exercise-previous');

const currentSocial = document.querySelector('.js-social-current');
const previousSocial = document.querySelector('.js-social-previous');

const currentCare = document.querySelector('.js-care-current');
const previousCare = document.querySelector('.js-care-previous');

//ADDING EVENTLISTENER & FUNCTIONS

dailyBtn.addEventListener("click", changeWorkTable );

function changeWorkTable() {
  currentWork.innerHTML = '5hrs';
  previousWork.innerHTML = 'Previous - 7hrs';

  currentPlay.innerHTML = '1hrs';
  previousPlay.innerHTML = '2hrs';

  currentStudy.innerHTML = '0hrs';
  previousStudy.innerHTML = '1hrs';

  currentExercise.innerHTML = '1hrs';
  previousExercise.innerHTML = '1hrs';

  currentSocial.innerHTML = '1hrs';
  previousSocial.innerHTML = '3hrs';

  currentCare.innerHTML = '0hrs';
  previousCare.innerHTML = '1hrs';

  
}



weeklyBtn.addEventListener("click", changeWorkTable2 );

function changeWorkTable2() {
  currentWork.innerHTML = '32hrs';
  previousWork.innerHTML = 'Previous - 36hrs';
  currentPlay.innerHTML = '10hrs';
  previousPlay.innerHTML = '8hrs';

  currentStudy.innerHTML = '4hrs';
  previousStudy.innerHTML = '7hrs';

  currentExercise.innerHTML = '4hrs';
  previousExercise.innerHTML = '5hrs';

  currentSocial.innerHTML = '5hrs';
  previousSocial.innerHTML = '10hrs';

  currentCare.innerHTML = '2hrs';
  previousCare.innerHTML = '2hrs';

  
}
monthlyBtn.addEventListener("click", changeWorkTable3 );

function changeWorkTable3() {
  currentWork.innerHTML = '23hrs';
  previousWork.innerHTML = 'Previous - 29hrs'
  currentPlay.innerHTML = '23hrs';
  previousPlay.innerHTML = '29hrs';

  currentStudy.innerHTML = '13hrs';
  previousStudy.innerHTML = '19hrs';

  currentExercise.innerHTML = '11hrs';
  previousExercise.innerHTML = '18hrs';

  currentSocial.innerHTML = '21hrs';
  previousSocial.innerHTML = '23hrs';

  currentCare.innerHTML = '7hrs';
  previousCare.innerHTML = '11hrs';
  
  
}


