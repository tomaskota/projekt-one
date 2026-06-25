const db=loadDB();
today.textContent=new Date().toLocaleDateString('cs-CZ',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
function draw(){
weight.value=db.profile.current;
weightLabel.textContent='Aktuální váha: '+db.profile.current+' kg';
const p=Math.max(0,Math.min(100,((db.profile.start-db.profile.current)/(db.profile.start-db.profile.goal))*100));
bar.style.width=p+'%';
const d=new Date().getDay();
plan.textContent=d===2?'Úterní trénink':d===5?'Páteční trénink':d===0?'Nedělní trénink':'Regenerace / 30 minut chůze';
}
saveBtn.onclick=()=>{db.profile.current=parseFloat(weight.value)||db.profile.current;saveDB(db);draw();}
draw();
