# Simple-Interest-Calculator-master
This readme file created according to the Simple Interest Calculater Hands-On Lab and completed the project as per requirements as follow:

<br>

## HTML
### Modifyed the HTML File
1. Added the doctype to the file and moved all the content which from the <body> to a <div> tag.
2. Set't the class attribute of this div to 'maindiv'and  modifyed the input text box for interest rate to a slider using the <input type="range"> tag.
3. For the rate input, setted the attributes min to 1, max to 20 and step to 0.25 and the default value to 10.25, to show the value selected by the range, create a <span> element right after the range.
4. Inside the '` tag added the text "10.25 %" and modifyed the input text box for "No of years" into a dropdown box with the options 1 to 10.
5. Change the name of "Compute" button to "Compute Interest" and below the "Compute Interest" button create an empty <span> and set its id to 'result'.
6. Add a copyright message using the <footer> tag with my name.

<br>

## CSS
### Modifyed the CSS File
1. Seted the body color to 'black', font to arial and font color to white and the <h1> color to 'grey' and font to verdana.
2. Created an entry for class 'maindiv', and Set the background color to white, font color to black, width to 300 pixels, and padding to 20px in the maindiv class.
3. Set the border radius to 25 px, and aligned the div to the center of the page. And completed the class as follow

```css
.maindiv {
    background-color:white;
    color:black;
    width:300px;
    padding:20px;
    border-radius:25px;
    align:center
}
```
4. Also added extra styles to the windows that eppears in broweser, and outputed text results e.g. principle, interest and year.

<br>

## CSS
### Modifyed the JavaScript File

1. Created a variables called 'principal', "rate" and "years" and assigned to it the value of the input elements, also added to the html button onclick to attribute set to "compute()".
2. Created a variable called interest and assign to it the value of principal * years * rate / 100. This to calculate the interest formula.
3. Write the logic to convert the 'No of Years' into the actual year in the future.
4. Added the function that reads the value of the range slider and displays it the <span> adjacent to the slider.

```javascript
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
```
5. Linked this function with an "onchange" event on the range input, and changeed the slider to test if the display in the span is being updated dynamically and gets the reference to the element named 'result'. 
6. When "Compute Interest" is clicked, set its inner html property correctly as requested, and highlited the output results.

<br>

### Test the app
Tested the app all functions works correctly and the ouput results shows the correct results.

<br>

### Uploading the project to GitHub and submit the github pages URL for peer review.
From the beginning of these lessons, I was not able to complete any of the HTML, CSS, JavaScript Hands-On Labs exercises. "due to errors in servers and later it shows maintenance massages".

Now! Completed Simple Interest Calculator Hands-On assignment and still have no access to Theia Lab to upload my project.?????
So I've to find another solution to upload this manually awaiting for the results without losing any points for this final project.







