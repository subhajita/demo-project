function convertsec(seconds)
{
    var hours=Math.floor(seconds/60);
    var minutes=(hours % 60);
    var sec=seconds % 60;
    hours=Math.floor(hours/ 60);
    console.log("HH:MM:SS-"+hours+":"+minutes+":"+sec);
}
convertsec(126);
convertsec(45);
convertsec(3700);