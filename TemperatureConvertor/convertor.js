let celcius=document.getElementById("celcius");
let fahrenheit=document.getElementById("fahrenheit");
let kelvin=document.getElementById("kelvin");

      /*  function convertTemp(){
            const currentValue=+event.target.value;

            switch(event.target.name){
                case "Celcius":
                fahrenheit.value=(currentvalue*9)/5+32;
                kelvin.value=currentvalue+273.15;
                break;

                case "Fahrenheit":
                celcius.value=((currentvalue-32)*5)/9;
                kelvin.value=((currentvalue-32)*5)/9 + 273.15;
                break;

                case "Kelvin":
                celcius.value=currentvalue-273.15;
                fahrenheit.value=((currentvalue-273.15)*9)/5 +32;
                break;

                default :
                break;
            }
        }*/

        function convertCelcius(){
            fahrenheit.value=(parseFloat(celcius.value)*9/5)+32;
            kelvin.value=(parseFloat(celcius.value)+273.15);
        }

        function convertFahrenheit(){
            celcius.value=((parseFloat(fahrenheit.value)-32)*5)/9;
            kelvin.value=((parseFloat(fahrenheit.value)-32)*5)/9 +273.15;
        }

        function convertKelvin(){
            celcius.value=(parseFloat(kelvin.value)-273.15);
            fahrenheit.value=((parseFloat(kelvin.value)-273.15)*9)/5 +32;
        }