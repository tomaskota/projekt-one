const d=loadData();
today.textContent=new Date().toLocaleDateString('cs-CZ',{weekday:'long',day:'numeric',month:'long'});
weight.value=d.profile.current;
function render(){
 const p=Math.max(0,Math.min(100,((d.profile.start-d.profile.current)/(d.profile.start-d.profile.goal))*100));
 bar.style.width=p+'%';
 weightText.textContent=`Aktuální váha: ${d.profile.current} kg`;
 const wd=new Date().getDay();
 plan.textContent=wd===2?'Dnes trénink A':wd===5?'Dnes trénink B':wd===0?'Dnes trénink C':'Dnes regenerace nebo 30 minut chůze';
}
saveWeight.onclick=()=>{
 d.profile.current=parseFloat(weight.value)||d.profile.current;
 saveData(d);
 render();
}
render();
