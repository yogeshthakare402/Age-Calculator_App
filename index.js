
// document.getElementById('submitbtn')
function getAge(){
    let date = parseInt(document.getElementById("date").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    // console.log(date)
    if(date && month && year){
        let day = new Date().getDate();
        let mon = new Date().getMonth() + 1;
        let nyear = new Date().getFullYear();

        let days = Math.abs(date-day);
        let months;
        let years;
        if(month>mon){
            let num = month-mon;
             months = Math.abs(mon);
            years = parseInt(nyear-year)-num;
        }else{
             months = Math.abs(month-mon);
             years = parseInt(nyear-year);
        }
       
        // console.log(days,months,years)
        document.getElementById("output").innerHTML= `Your Age is ${years} Years ${months} Months ${days} Days `
    }else{
        console.log(date)
        document.getElementById("output").innerHTML= "Please input valid data for date month year"
    }
    
}