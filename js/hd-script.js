
function hdInit(){
    var inputDivList = document.querySelectorAll(".hd-input-text-div");
    var inputElementList = document.querySelectorAll(".hd-input-text");

    for(var i = 0; i < inputDivList.length; i++)
    {
        inputDivList[i].setAttribute("onclick", "hdFocusIn(this)");
        inputDivList[i].setAttribute("onfocusout", "hdFocusOut(this)");
    }

    for(var i = 0; i < inputElementList.length; i++)
    {
        inputElementList[i].setAttribute("onfocusin", "hdFocusIn(this.parentElement)");
    }
}

function hdFocusIn(e){
    input = e.querySelector(".hd-input-text");
    placeholder = e.querySelector(".hd-input-text-placeholder");

    placeholder.style.animationName = "yukari";
    placeholder.style.animationDuration = ".15s";
    placeholder.style.animationFillMode = "forwards";
    placeholder.style.color = "#1a73e8";

    input.focus();

}

function hdFocusOut(e){
    input = e.querySelector(".hd-input-text");
    placeholder = e.querySelector(".hd-input-text-placeholder");

    if(input.value == "")
    {
        placeholder.style.animationName = "asagi";
        placeholder.style.animationDuration = ".15s";
        placeholder.style.animationFillMode = "forwards";
    }
    placeholder.style.color = "#80868b";

    input.focusout();
}

hdInit();