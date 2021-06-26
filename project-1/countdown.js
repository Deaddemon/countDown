const months= ['jan','feb','Mar','April','May','June','July','August','September', 'Oct','Nov','Dec'

];
const week=[
    'sun',
    'Mon',
    'Tue',
    'Wed',
    'Thur',
    'Fri',
    'Sat'
    
]

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
 

let date = new Date(2021,6,10,11,30,0);
  
 
const year = date.getFullYear();
const hour = date.getHours();
const min = date.getMinutes();

let month = months[date.getMonth()];
let weekday = week[date.getDay()];
const d= date.getDate();

giveaway.textContent=
// 'Give away Ends on '+
// weekday+","
// +d +
// " "+
// month +
// " "+ 
// year +
// "  "+
// hour+
// ':'+
// min;
`Your test starts on
${weekday}, ${d} ${month} ${year}  ${hour}:${min}
 `

//we will subtract milliseconds of future time and today

const futureTime = date.getTime();
function getRemaningTime(){
    let today = new Date().getTime();
    let t = futureTime- today;
     // 1 day = 24 * 60 *60 * 1000 milliseconds
    const oneDay = 24 * 60 *60 * 1000;
    const oneHour=  60 *60 * 1000;
    const oneMin= 60 * 1000;
   

    let days = Math.floor(t/oneDay);
    let hours= Math.floor((t%oneDay)/oneHour);
    let minitues = Math.floor((t%oneHour)/oneMin);
    let sec = Math.floor((t%oneMin)/1000);
    

    let data= [days,hours,minitues,sec];
    let s=['days..','hours.','min...','sec...'];//noob arrangment
    function format(item,s){
        if (item<10){
            return item = `0${item} ${s}`;
        }
        else{
            return  `${item} ${s}`;
        }
    }
     
    items.forEach(function(item,index){
        item.innerHTML= format(data[index],s[index]);
    })

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML= `<h4 class='expired' >Sorry! This giveaway has expired</h4>`;
    }


}
let countdown = setInterval(getRemaningTime,1000);
 
 
