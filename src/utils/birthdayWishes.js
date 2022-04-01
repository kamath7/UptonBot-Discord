const birthDays = [new Date("4/1/2022")]
const checkForBirthday = (someotherDate)=>{
    for (let i = 0 ; i < birthDays.length; i++){
        if (birthDays[i].getDate() === someotherDate.getDate() && birthDays[i].getMonth() === someotherDate.getMonth()){
            return true;
        }
        return false;
    } 
}

module.exports = checkForBirthday