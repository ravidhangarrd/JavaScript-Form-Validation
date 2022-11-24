// current time functiom start here
function timeClock()
{
    setInterval(function(){

        const MORNING_GRADIENT = "linear-gradient(rgb(250, 238, 125),orange,red)";
        const AFTERNOON_GRADIENT = "linear-gradient(skyblue,orange,red)";
        const EVINING_GRADIENT = "linear-gradient(rgb(84, 98, 249),rgb(37, 49, 186),rgb(8, 12, 52))";
        const NIGHT_GRADIENT = "linear-gradient(rgb(104, 165, 183),rgb(18, 35, 59),rgb(4, 4, 4))";

        const MORNING_IMG = "URL(./img/good-morning-pic.gif)";
        const AFTERNOON_IMG = "URL(./img/good-afternoon-pic.gif)";
        const EVINING_IMG = "URL(./img/good-evining-pic.gif)";
        const NIGHT_IMG = "URL(./img/good-night-pic.gif)";
        
        var d = new Date();
        var currentTime = d.toLocaleTimeString();
        var currentTimeHours = d.getHours();
        var respectiveMassegeText = document.getElementById("good-respact");
        var respectiveGradientBackground = document.getElementsByClassName("left-container")[0];
        var respectiveBackgroundImg = document.getElementById("img-container-insider");
        var digitalClockText = document.getElementById("digital-clock");
        digitalClockText.innerHTML = currentTime;
        if(currentTimeHours >= 5 && currentTimeHours <= 11)
        {
            respectiveMassegeText.innerHTML = "Good Morning";
            respectiveMassegeText.style.color = "red";
            respectiveGradientBackground.style.backgroundImage = MORNING_GRADIENT;
            respectiveBackgroundImg.style.backgroundImage = MORNING_IMG;
        }
        else if(currentTimeHours >= 12 && currentTimeHours <= 16)
        {
            respectiveMassegeText.innerHTML = "Good Afternoon";
            respectiveMassegeText.style.color = "rgb(174, 52, 8)";
            respectiveGradientBackground.style.backgroundImage = AFTERNOON_GRADIENT;
            respectiveBackgroundImg.style.backgroundImage = AFTERNOON_IMG;
        }
        else if(currentTimeHours >= 17 && currentTimeHours <= 20)
        {
            respectiveMassegeText.innerHTML = "Good Evining";
            respectiveMassegeText.style.color = "whitesmoke";
            respectiveGradientBackground.style.backgroundImage = EVINING_GRADIENT;
            respectiveBackgroundImg.style.backgroundImage = EVINING_IMG;
        }
        else if(currentTimeHours >= 21 && currentTimeHours <= 23)
        {
            respectiveMassegeText.innerHTML = "Good Night";
            respectiveMassegeText.style.color = "white";
            respectiveGradientBackground.style.backgroundImage = NIGHT_GRADIENT;
            respectiveBackgroundImg.style.backgroundImage = NIGHT_IMG;
        }
        else if(currentTimeHours >= 0 && currentTimeHours <= 4)
        {
            respectiveMassegeText.innerHTML = "Good Night";
            respectiveMassegeText.style.color = "white";
            respectiveGradientBackground.style.backgroundImage = NIGHT_GRADIENT;
            respectiveBackgroundImg.style.backgroundImage = NIGHT_IMG;
        }

    }, 1000);
}

// form fill timmer function

function formfillTime()
{
    console.log("start here");
    var timmerText = document.getElementById("timmer-text");
    var timeMinutes = 04;
    var timeSeconds = 59;
    setInterval(function(){
        timmerText.innerText = "0" + timeMinutes + ":" + timeSeconds;
            timeSeconds--;
            if(timeSeconds == 0)
            {
                timeMinutes--;
                timeSeconds = 59;
            }

            if(timeMinutes == -1 && timeSeconds == 59)
            {
                window.location.href = "time_out.html";
            }

    }, 1000);
}

// try again function
function tryAgainBtn()
{
    window.location.href = "index.html";
}

// This function will change input text to upper case
function changeTextToUpper()
{
    var fullName = document.getElementById("fullname-value").value.toUpperCase();
    document.getElementById("fullname-value").value = fullName;
}

//This function chacking password is min of 8 character
function validPassword()
{
    var password = document.getElementById("password-value");
    var img = document.getElementById("pass-valid-icon");
    var passwordLen = password.value.length;

    if(passwordLen >= 1)
        img.style.display = "inline-block";
    else
        img.style.display = "none";

    if(passwordLen >= 8)
        img.src = "./img/green-img.png";
    else
        img.src = "./img/red-img.png";
}

//This function check that phone number is valid of not
function validPhone()
{
    var phoneNum = document.getElementById("phoneno-value");
    var phoneValidIcon = document.getElementById("phone-valid-icon");
    var phoneNumLen = phoneNum.value.length;

    if(phoneNumLen < 1)
    {
        phoneValidIcon.style.display = "none";
    }

    if(phoneNumLen < 10 && phoneNumLen >= 1)
    {
        phoneValidIcon.style.display = "inline-block";
        phoneValidIcon.src = "./img/red-img.png";
    }
    else if(phoneNumLen > 10)
    {
        phoneValidIcon.style.display = "inline-block";
        phoneValidIcon.src = "./img/red-img.png";
    }
    else if(phoneNumLen == 10)
    {
        phoneValidIcon.style.display = "inline-block";
        phoneValidIcon.src = "./img/green-img.png";
    }
}

//This function change phone number country code
function selectCountry()
{
    var sellectedCountryValue = document.getElementById("country-value");
    var countryCode = sellectedCountryValue.value;
    var phoneNumCode = document.getElementById("phoneno-code-value");
    phoneNumCode.value = "+" + countryCode;
}

//only select image function
function imgSelect()
{
    var imgValue = document.getElementById("image-value");
    imgValue.accept = ".jpg, .jpeg, .png";
}

//this evable create account btn
function btnEnable()
{
    var btn = document.getElementById("ca-btn");
    var fullName = document.getElementById("fullname-value").value;
    var password = document.getElementById("password-value").value;
    var passLen = password.length;
    var phoneno = document.getElementById("phoneno-value").value;
    var phoneLen = phoneno.length;
    var email = document.getElementById("email-value").value;
    var imagev = document.getElementById("image-value").value;
    var country = document.getElementById("country-value").value;
    var agree = document.getElementById("agree-value");
    var disValue;
    if(fullName == "" || password == "" || phoneno == "" || email =="" || imagev == "" || country == "" || !(agree.checked) || passLen < 8 || (phoneLen > 10 || phoneLen < 10))
    {
        disValue = false;
    } 
    else{
        disValue = true;
    }

    if(disValue == true)
    {
        btn.style.backgroundColor = "black";
        btn.disabled = false;
    }
    else
    {
        btn.style.backgroundColor = "grey";
        btn.disabled = true;
    }
    console.log(disValue);
}

//successed
function successed()
{
    window.location.href = "index.html";   
}