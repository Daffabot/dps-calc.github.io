// DPS Calculator - JavaScript edition By Daffabot!
//============================================================================
// v0.01 - initial start of project totally works
//============================================================================
//Visit Daffabot (https://github.com/Daffabot) for script in github
//Credit must stay intact for use

function ErrAlert(eCode, objName){
	let oN = objName;
	switch(eCode){
		case 0:
			AlertMSG = "[Error 0] - Cannot compute, " + oN + " is less than one";
			document.getElementById("showinputhere").innerHTML = AlertMSG;
			document.getElementById("showinputhere1").innerHTML = "";
			document.getElementById("showinputhere2").innerHTML = "";
			document.getElementById("showinputhere3").innerHTML = "";
		break;
		case 1:
			AlertMSG = "[Error 1] - " + oN + " does not contain valid numbers";
			document.getElementById("showinputhere").innerHTML = AlertMSG;
			document.getElementById("showinputhere1").innerHTML = "";
			document.getElementById("showinputhere2").innerHTML = "";
			document.getElementById("showinputhere3").innerHTML = "";
		break;
	}
}
function clearText(){ //clears out old values on form.
	document.getElementById("damagebasic").value = "";
	document.getElementById("magazine").value = "";
	document.getElementById("reload").value = "";
	document.getElementById("rps").value = "";
	document.getElementById("projectiles").value = "";
	//optional
	document.getElementById("chan").value = "";
	document.getElementById("multi").value = "";
	document.getElementById("effvalue").value = "";
	document.getElementById("period").value = "";
	document.getElementById("eleper").value = "";
	document.getElementById("elevalue").value = "";
	//calc
	document.getElementById("showinputhere").innerHTML = "";
	document.getElementById("showinputhere1").innerHTML = "";
	document.getElementById("showinputhere2").innerHTML = "";
	document.getElementById("showinputhere3").innerHTML = "";
}
function openGitHub(){
	window.open("https://github.com/Daffabot")
}
function openDonate(){
	window.open("https://paypal.me/daffabot")
}
function displayMessage(){
    let magazine = document.getElementById("magazine").value;
    let rps = document.getElementById("rps").value;
    let reload = document.getElementById("reload").value;
    let damagebasic = document.getElementById("damagebasic").value;
    let projectiles = document.getElementById("projectiles").value;
    let chan = document.getElementById("chan").value;
    let multi = document.getElementById("multi").value;
    let effvalue = document.getElementById("effvalue").value;
    let period = document.getElementById("period").value;
    let eleper = document.getElementById("eleper").value;
    let elevalue = document.getElementById("elevalue").value;
    let crit = (Number(magazine) * (Number(chan) / Number(100))) * ((Number(damagebasic) * Number(multi)) - Number(damagebasic));
    let effect
    = Number(effvalue) / Number(period);
    let element = Number(elevalue) * (Number(magazine) * (Number(eleper) / Number(100)));
    let dps = ((Number(magazine) * Number(damagebasic)) / ((Number(magazine) / Number(rps)) + Number(reload))) * Number(projectiles);
	let eff = Number(dps) + Number(effect);
	let ele = (((Number(magazine) * Number(damagebasic)) + Number(element)) / ((Number(magazine) / Number(rps)) + Number(reload))) * Number(projectiles);
	let cri = Number(dps) + Number(crit);
    dps += " DPS (Damage Per Second)";
	eff += " DPS (Damage Per Second) with Effect Damage";
	ele += " DPS (Damage Per Second) with Element Damage";
	cri += " DPS (Damage Per Second) with Critical Damage";
    if (dps){
        document.getElementById("showinputhere").innerHTML = dps;
		document.getElementById("showinputhere1").innerHTML = eff;
		document.getElementById("showinputhere2").innerHTML = ele;
		document.getElementById("showinputhere3").innerHTML = cri;
    }
    if (isNaN(magazine)) {
		ErrAlert(1,"Magazine Size");
	}
	if (isNaN(rps)) {
		ErrAlert(1,"Round Per Second");
	}
	if (isNaN(reload)) {
		ErrAlert(1,"Reload Time");
	}	
	if (isNaN(damagebasic)) {
		ErrAlert(1,"Damage Per Bullet");
	}
	//if base values are less than 1 than we cannot compute.
	if (magazine < 1) {
		ErrAlert(0,"Magazine Size");
	}
	if (rps < 1) {
		ErrAlert(0,"Round Per Second");
	}
	if (damagebasic < 1) {
		ErrAlert(0,"Damage Per Bullet");
	}
	if (reload < 1) {
		ErrAlert(0,"Reload Time");
	}
}