function compute()
{
    // Variable will returns the element ID attribute with the value principal.
    var principal = document.getElementById("principal").value;
    
    // Otherwize will show the alert message.
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    // Variables will returns the element ID attribute with the value rate and years.
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Interest is calculated using the following formula
    var interest = principal * years * rate / 100;

    // This will calculated the inputed year.
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    // This element id will printout the input results text, and numbers highlited.
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> In the year " + "<span class='highlight'>" + yearNow + "</span>";
}

// This is the rate slider function rate display
function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}
