
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
    hdSelectInit();
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

function hdSelectInit(){
    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("hd-select");
    var abc = document.querySelector('.hd-input-text'); 
    
    for (i = 0; i < x.length; i++) {
      
        selElmnt = x[i].getElementsByTagName("select")[0];
        
        a = document.createElement("div");
        a.setAttribute("class", "hd-select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);  
    
        b = document.createElement("div");
        b.setAttribute("class", "hd-select-items hd-select-hide");
    
        for (j = 1; j < selElmnt.length; j++) {
            
            c = document.createElement("div");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) { //seçim değiştirildiğinde
                
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
    
                for (i = 0; i < s.length; i++) {
    
                    if (s.options[i].innerHTML == this.innerHTML) {
                        
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("hd-same-as-selected");
    
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
    
                        this.setAttribute("class", "hd-same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c); 
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("hd-select-hide");
          this.classList.toggle("hd-select-arrow-active");              
        });
    
    }
    function closeAllSelect(elmnt) {
        
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("hd-select-items");
        y = document.getElementsByClassName("hd-select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("hd-select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("hd-select-hide");
            }
        }
    }
    
    document.addEventListener("click", closeAllSelect);
}

hdInit();