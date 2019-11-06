
function hdInit(){

    /*text*/
    var inputTextDivList = document.querySelectorAll(".hd-input-text-div");
    var inputTextElementList = document.querySelectorAll(".hd-input-text");

    for(var i = 0; i < inputTextDivList.length; i++)
    {
        inputTextDivList[i].setAttribute("onclick", "hdTextFocusIn(this)");
        inputTextDivList[i].setAttribute("onfocusout", "hdTextFocusOut(this)");
    }

    for(var i = 0; i < inputTextElementList.length; i++)
    {
        inputTextElementList[i].setAttribute("onfocusin", "hdTextFocusIn(this.parentElement)");
    }

    /*TextArea*/
    var inputTextAreaDivList = document.querySelectorAll(".hd-input-textarea-div");
    var inputTextAreaElementList = document.querySelectorAll(".hd-input-textarea");

    for(var i = 0; i < inputTextAreaDivList.length; i++)
    {
        inputTextAreaDivList[i].setAttribute("onclick", "hdTextAreaFocusIn(this)");
        inputTextAreaDivList[i].setAttribute("onfocusout", "hdTextAreaFocusOut(this)");
    }

    for(var i = 0; i < inputTextAreaElementList.length; i++)
    {
        inputTextAreaElementList[i].setAttribute("onfocusin", "hdTextAreaFocusIn(this.parentElement)");
    }

    /*Select*/
    var selectDivList = document.querySelectorAll(".hd-input-textarea-div");
    var selectElementList = document.querySelectorAll(".hd-input-textarea");

    for(var i = 0; i < selectDivList.length; i++)
    {
        selectDivList[i].setAttribute("onclick", "hdTextAreaFocusIn(this)");
        selectDivList[i].setAttribute("onfocusout", "hdTextAreaFocusOut(this)");
    }

    for(var i = 0; i < selectElementList.length; i++)
    {
        selectElementList[i].setAttribute("onfocusin", "hdTextAreaFocusIn(this.parentElement)");
    }
}

function hdTextFocusIn(e){
    input = e.querySelector(".hd-input-text");
    placeholder = e.querySelector(".hd-input-text-placeholder");

    placeholder.style.animationName = "yukari";
    placeholder.style.animationDuration = ".15s";
    placeholder.style.animationFillMode = "forwards";
    placeholder.style.color = "#1a73e8";

    input.focus();

}

function hdTextFocusOut(e){
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

function hdTextAreaFocusIn(e){
    input = e.querySelector(".hd-input-textarea");
    placeholder = e.querySelector(".hd-input-textarea-placeholder");

    placeholder.style.animationName = "yukari";
    placeholder.style.animationDuration = ".15s";
    placeholder.style.animationFillMode = "forwards";
    placeholder.style.color = "#1a73e8";

    input.focus();

}

function hdTextAreaFocusOut(e){
    input = e.querySelector(".hd-input-textarea");
    placeholder = e.querySelector(".hd-input-textarea-placeholder");

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