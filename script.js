
function calculo(){
    let circunferencia = document.getElementById("box").value;
    let SuaAltura = document.getElementById("box1").value;
    let quad = Math.sqrt(SuaAltura);
    let result = (circunferencia / (SuaAltura * quad ) - 18);

    if(result < 8)
    {
        document.getElementById('range').innerHTML = ("seu IAC é de "  + "<br><br>" + result.toFixed(2) + "<br><br>" + " e você está SUBNUTRÍDO")
    };
    if(result >= 8 && result <= 20.99 )
    {
        document.getElementById('range').innerHTML = ("seu IAC é de "  + "<br><br>" + result.toFixed(2) + "<br><br>" + " e você está com peso NORMAL")
    };
    if(result >= 21 && result <= 24.99 )
    {
        document.getElementById('range').innerHTML = ("seu IAC é de "  + "<br><br>" + result.toFixed(2) + "<br><br>" + " e você está com SOBREPESO")
    };
    if(result >= 25)
    {
        document.getElementById('range').innerHTML = ("seu IAC é de "  + "<br><br>" + result.toFixed(2) + "<br><br>" + " e você está OBESO")
    };
};
