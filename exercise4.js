let raceNumber = Math.floor(Math.random()*1000); 
let registeredEarly = true; 
let runnersAge = 22;
if (runnersAge >= 18 && registeredEarly ) { 
  raceNumber+=1000;
}
if ( registeredEarly && runnersAge >= 18 ) {
  console.log (`Runner ${raceNumber} you race at 9:30 am.`) ;
} 
else if (runnersAge >= 18 !== registeredEarly ) {
  console.log (`Runner ${raceNumber} you will race at 11:00 am.`) ;
}
else if (runnersAge < 18) {
  console.log ( `Runner ${raceNumber} you will race at 12:30 am.`);
}
else if (runnersAge = 18) { 
  console.log ( `Runner ${raceNumber} you will race at 12:30 am.`);

}
