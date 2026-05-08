let questions = [

{
q:"When working in a team you prefer:",
type:["D","I","C","S"]
},

{
q:"Your ideal work style:",
type:["D","I","C","S"]
},

{
q:"People describe you as:",
type:["D","I","C","S"]
},

{
q:"Your decision style:",
type:["D","I","C","S"]
},

{
q:"Your communication style:",
type:["D","I","C","S"]
},

{
q:"In stressful situations you:",
type:["D","I","C","S"]
},

{
q:"Your biggest strength:",
type:["D","I","C","S"]
},

{
q:"You prefer work that is:",
type:["D","I","C","S"]
},

{
q:"Your leadership style:",
type:["D","I","C","S"]
},

{
q:"You usually make decisions:",
type:["D","I","C","S"]
}

];

let current = 0;

let scores = {
D:0,
I:0,
C:0,
S:0
};

function startQuiz(){

document.getElementById("landing").style.display="none";

document.getElementById("quiz").style.display="block";

showQuestion();

}

function showQuestion(){

document.getElementById("question").innerText =
questions[current].q;

let percent = Math.round((current/questions.length)*100);

document.getElementById("progressFill").style.width =
percent+"%";

document.getElementById("progressText").innerText =
percent+"% Done";

removeSelection();

}

function choose(index){

let options = document.querySelectorAll(".option");

options[index].classList.add("selected");

setTimeout(()=>{

if(index==0){
scores.D+=2;
}

else if(index==1){
scores.I+=2;
}

else if(index==3){
scores.S+=2;
}

else if(index==4){
scores.C+=2;
}

current++;

if(current<questions.length){

showQuestion();

}else{

showResult();

}

},400);

}

function removeSelection(){

document.querySelectorAll(".option").forEach(opt=>{

opt.classList.remove("selected");

});

}

function showResult(){

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

let max = "D";

for(let key in scores){

if(scores[key] > scores[max]){

max = key;

}

}

let title = "";
let desc = "";
let strengths = "";
let weaknesses = "";
let careers = "";

if(max=="D"){

title = "Dominant Personality";
desc = "You are confident, ambitious and leadership oriented.";

strengths = `
<li>Leadership</li>
<li>Confidence</li>
<li>Quick Decisions</li>
`;

weaknesses = `
<li>Impatient</li>
<li>Aggressive</li>
`;

careers = `
<li>CEO</li>
<li>Entrepreneur</li>
<li>Manager</li>
`;

}

if(max=="I"){

title = "Influential Personality";
desc = "You are social, energetic and highly expressive.";

strengths = `
<li>Communication</li>
<li>Motivation</li>
<li>Creativity</li>
`;

weaknesses = `
<li>Impulsive</li>
<li>Emotional</li>
`;

careers = `
<li>Marketing</li>
<li>Sales</li>
<li>Public Relations</li>
`;

}

if(max=="C"){

title = "Conscientious Personality";
desc = "You are analytical, detail-oriented and logical.";

strengths = `
<li>Accuracy</li>
<li>Analysis</li>
<li>Discipline</li>
`;

weaknesses = `
<li>Overthinking</li>
<li>Perfectionism</li>
`;

careers = `
<li>Engineer</li>
<li>Scientist</li>
<li>Data Analyst</li>
`;

}

if(max=="S"){

title = "Steady Personality";
desc = "You are calm, reliable and supportive.";

strengths = `
<li>Patience</li>
<li>Loyalty</li>
<li>Supportive Nature</li>
`;

weaknesses = `
<li>Slow Decisions</li>
<li>Avoid Conflict</li>
`;

careers = `
<li>Teacher</li>
<li>HR</li>
<li>Counselor</li>
`;

}

document.getElementById("resultTitle").innerText = title;

document.getElementById("resultDesc").innerText = desc;

document.getElementById("strengths").innerHTML = strengths;

document.getElementById("weaknesses").innerHTML = weaknesses;

document.getElementById("careers").innerHTML = careers;

let total =
scores.D + scores.I + scores.C + scores.S;

document.getElementById("percentages").innerHTML = `

<li>Dominance : ${Math.round(scores.D/total*100)}%</li>

<li>Influence : ${Math.round(scores.I/total*100)}%</li>

<li>Conscientiousness : ${Math.round(scores.C/total*100)}%</li>

<li>Steadiness : ${Math.round(scores.S/total*100)}%</li>

`;

}

function restartQuiz(){

location.reload();

}