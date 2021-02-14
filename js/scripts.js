/*
Portfolio - Tek.
Developed by Amedeo Giuseppe Rizzo aka Tek.
All rights reserved.

---JS SCRIPTS---

- 1) Variables
- 2) Loader
- 3) Main function
    - 3.1) Logo Hover
        - logoTransformUp
        - textFadeIn
        - logoTranslateUpOpacity
        - verticalBarOpen
        - horizontalBarOpen
        - verticalBarsOpen
        - allPDisplay
        - pText
        - arrowsOpacityLow
    - 3.2) Logo not hover
        - logoTransformTranslateDown
        - verticalBarsClose
        - horizontalBarClose
        - verticalBarclose
        - textFadeout
        - logoOpacityDown
        - allpClose
        - allpTop
        - allPDisplayNot
        - arrowsOpacityUp
    - 3.3) pTextLeft click
        - arrowpLeftDisplay
        - pLeftIntDisplay
        - arrowpLeftOpacity
        - allBarsOpacityDown
        - pCenterOpacityDown
        - pRightOpacityDown
        - pLeftBorderDown
        - pLeftIntOpacityUp
        - logoMarginCenter
        - leftpTopLeftTransform
    - 3.4) pTextCenter click
        - arrowpCenterDisplay
        - pCenterIntDisplay
        - arrowpCenterOpacity
        - allBarsOpacityDown
        - pLeftOpacityDown
        - pRightOpacityDown
        - pCenterBorderDown
        - pCenterIntOpacityUp
        - logoMarginCenter
        - centerpTopLeftTransform
    - 3.5) pTextRight click
        - arrowpRightDisplay
        - pRightIntDisplay
        - arrowpRightOpacity
        - allBarsOpacityDown
        - pLeftOpacityDown
        - pCenterOpacityDown
        - pRightBorderDown
        - pRightIntOpacityUp
        - logoMarginCenter
        - rightpTopLeftTransform
    - 3.6) arrow1 click
        - pLeftIntOpacityDown
        - arrowpLeftOpacityDown
        - pLeftDefault
        - verticalBarOpen
        - horizontalBarOpen
        - verticalBarsOpen
        - pBorderLeft
    - 3.7) arrow2 click
        - pCenterIntOpacityDown
        - arrowpCenterOpacityDown
        - pCenterDefault
        - verticalBarOpen
        - horizontalBarOpen
        - verticalBarsOpen
        - pBorderCenter
    - 3.8) arrow3 click
        - pRightIntOpacityDown
        - arrowpRightOpacityDown
        - pRightDefault
        - verticalBarOpen
        - horizontalBarOpen
        - verticalBarsOpen
        - pBorderRight
- 4) Functions
    - 4.1) logoTransformUp
    - 4.2) textFadeIn
    - 4.3) logoTranslateUpOpacity
    - 4.4) verticalBarOpen
    - 4.5) horizontalBarOpen
    - 4.6) verticalBarsOpen
    - 4.7) pText
        - 4.7.1) pTextOpacity1
        - 4.7.2) pTextTransform1
        - 4.7.3) pTextBorder
        - 4.7.4) pTextLeft
        - 4.7.5) pTextTop
    - 4.8) arrowsOpacityLow
    - 4.9) logoTransformTranslateDown
    - 4.10) verticalBarsClose
    - 4.11) horizontalBarClose
    - 4.12) verticalBarclose
    - 4.13) textFadeout
    - 4.14) logoOpacityDown
    - 4.15) allpClose
    - 4.16) allpTop
    - 4.17) arrowsOpacityUp
    - 4.18) arrowpLeftDisplay
    - 4.19) pLeftIntDisplay
    - 4.20) arrowpLeftOpacity
    - 4.21) allBarsOpacityDown
    - 4.22) pLeftOpacityDown
    - 4.23) pCenterOpacityDown
    - 4.24) pRightOpacityDown
    - 4.25) pLeftBorderDown
    - 4.26) pCenterBorderDown
    - 4.27) pRightBorderDown
    - 4.28) pLeftIntOpacityUp
    - 4.29) logoMarginCenter
    - 4.30) leftpTopLeftTransform
    - 4.31) arrowpCenterDisplay
    - 4.32) pCenterIntDisplay
    - 4.33) arrowpCenterOpacity
    - 4.34) pCenterIntOpacityUp
    - 4.35) centerpTopLeftTransform
    - 4.36) arrowpRightDisplay
    - 4.37) pRightIntDisplay
    - 4.38) arrowpRightOpacity
    - 4.39) pRightIntOpacityUp
    - 4.40) rightpTopLeftTransform
    - 4.42) pLeftDefault
        - 4.42.1) pLeftDefaultTopLeft
        - 4.42.2) pLeftTransformDown
        - 4.42.3) pLeftDisplayNot
    - 4.43) logoMarginUp
    - 4.44) pCenterDefault
        - 4.44.1) pCenterDefaultTopLeft
        - 4.44.2) pCenterTransformDown
        - 4.44.3) pCenterDisplayNot
    - 4.45) pRightDefault
        - 4.45.1) pRightDefaultTopLeft
        - 4.45.2) pRightTransformDown
        - 4.45.3) pRightDisplayNot
    - 4.46) pLeftIntOpacityDown
    - 4.47) pCenterIntOpacityDown
    - 4.48) pRightIntOpacityDown
    - 4.49) arrowpLeftOpacityDown
    - 4.50) arrowpCenterOpacityDown
    - 4.51) arrowpRightOpacityDown
    - 4.52) pBorderLeft
    - 4.53) pBorderCenter
    - 4.54) pBorderRight
    - 4.55) allPDisplay
    - 4.56) allPDisplayNot
*/

// 1) Variables
var timer;

// 2) Loader
function loader() {
    timer = setTimeout(loaderopacity, 3000);
    timer = setTimeout(showMain, 3500);
    timer = setTimeout(logoopacity, 4000);
}
        
function loaderopacity() {
    $("#loaderdiv").css("opacity", "0");
    $("#loader").css("opacity", "0");
}

function showMain(){
    $("#loaderdiv").css("display", "none");
    $("#main").css("display", "block");
}

function logoopacity(){
    $("#main").css("opacity", "1");
    $("#logo").css("opacity", "1");
}

//3) Main function
$(document).ready(function(){
    //3.1) Logo hover
    $(".container").hover(function(){
        logoTransformUp();
        textFadeIn();
        timer = setTimeout(logoTranslateUpOpacity, 500);
        timer = setTimeout(verticalBarOpen, 700);
        timer = setTimeout(horizontalBarOpen, 900);
        timer = setTimeout(verticalBarsOpen, 1200);
        timer = setTimeout(allPDisplay, 1300);
        timer = setTimeout(pText,1500);
        arrowsOpacityLow();
    },function(){
        //3.2) Logo not hover
        timer = setTimeout(logoTransformTranslateDown, 1100);
        verticalBarsClose();
        timer = setTimeout(horizontalBarClose, 400);
        timer = setTimeout(verticalBarclose, 700);       
        timer = setTimeout(textFadeout, 1000);
        logoOpacityDown();
        timer = setTimeout(allpClose, 400);
        timer = setTimeout(allpTop, 800);
        timer = setTimeout(allPDisplayNot, 900);
        timer = setTimeout(pLeftDisplayNot, 900);
        timer = setTimeout(pCenterDisplayNot, 900);
        timer = setTimeout(pRightDisplayNot, 900);
        arrowsOpacityUp();
    });
    //3.3) pTextLeft click
    $("#ptextLeft").click(function(){
        arrowpLeftDisplay();
        pLeftIntDisplay();
        timer = setTimeout(arrowpLeftOpacity, 500);
        allBarsOpacityDown();
        pCenterOpacityDown();
        pRightOpacityDown();
        pLeftBorderDown();
        timer = setTimeout(pLeftIntOpacityUp,500);
        timer = setTimeout(logoMarginCenter, 100);
        timer = setTimeout(leftpTopLeftTransform,200);
    });
    //3.4) pTextCenter click
    $("#ptextCenter").click(function(){
        arrowpCenterDisplay();
        pCenterIntDisplay();
        timer = setTimeout(arrowpCenterOpacity, 500);
        allBarsOpacityDown();
        pLeftOpacityDown();
        pRightOpacityDown();
        pCenterBorderDown();
        timer = setTimeout(pCenterIntOpacityUp, 500);
        timer = setTimeout(logoMarginCenter, 100);
        timer = setTimeout(centerpTopLeftTransform,200);
    });
    //3.5) pTextRight click
    $("#ptextRight").click(function(){
        arrowpRightDisplay();
        pRightIntDisplay();
        timer = setTimeout(arrowpRightOpacity, 500);
        allBarsOpacityDown();
        pLeftOpacityDown();
        pCenterOpacityDown();
        pRightBorderDown();
        timer = setTimeout(pRightIntOpacityUp, 500);
        timer = setTimeout(logoMarginCenter, 100);
        timer = setTimeout(rightpTopLeftTransform,200);
    });
    //3.6) arrow1 click
    $("#arrow1").click(function(){
        pLeftIntOpacityDown();
        arrowpLeftOpacityDown();
        timer = setTimeout(pLeftDefault,500);
        timer = setTimeout(verticalBarOpen, 900);
        timer = setTimeout(horizontalBarOpen, 1100);
        timer = setTimeout(verticalBarsOpen, 1400);
        timer = setTimeout(pBorderLeft, 1600);
    });
    //3.7) arrow2 click
    $("#arrow2").click(function(){
        pCenterIntOpacityDown();
        arrowpCenterOpacityDown();
        timer = setTimeout(pCenterDefault,500);
        timer = setTimeout(verticalBarOpen, 900);
        timer = setTimeout(horizontalBarOpen, 1100);
        timer = setTimeout(verticalBarsOpen, 1400);
        timer = setTimeout(pBorderCenter, 1600);
    });
    //3.8) arrow3 click
    $("#arrow3").click(function(){
        pRightIntOpacityDown();
        arrowpRightOpacityDown();
        timer = setTimeout(pRightDefault,500);
        timer = setTimeout(verticalBarOpen, 900);
        timer = setTimeout(horizontalBarOpen, 1100);
        timer = setTimeout(verticalBarsOpen, 1400);
        timer = setTimeout(pBorderRight, 1600);
    });
});

//4.1) logoTransformUp 
function logoTransformUp(){
    $("#logo").css("transform", "scale(1.5)");
}

//4.2) textFadeIn
function textFadeIn(){
    $("#text").css("-webkit-animation", "1s ease 0s normal forwards 1 fadein");
    $("#text").css("animation", "1s ease 0s normal forwards 1 fadein");
}

//4.3) logoTranslateUpOpacity
function logoTranslateUpOpacity(){
    $("#image").css("margin-top", "10%");
    logoMarginUp();
    $("#logo").css("opacity", "50%");
}

//4.4) verticalBarOpen
function verticalBarOpen(){
    $("#verticalLine").css("height", "50px");  
    $("#verticalLine").css("opacity", "1");        
}

//4.5) horizontalBarOpen
function horizontalBarOpen(){
    $("#horizontalLine").css("width", "600px");
    $("#horizontalLine").css("opacity", "1");
}

//4.6) verticalBarsOpen
function verticalBarsOpen(){
    $("#verticalsmallLeft").css("opacity", "1");
    $("#verticalsmallCenter").css("opacity", "1");
    $("#verticalsmallRight").css("opacity", "1");
    $("#verticalsmallLeft").css("height", "50px");
    $("#verticalsmallCenter").css("height", "50px");
    $("#verticalsmallRight").css("height", "50px");
}

//4.7) pText
function pText(){
    pTextOpacity1();
    pTextTransform1();
    pTextBorder();
    pTextLeft();
    pTextTop();
}

    //4.7.1) pTextOpacity1
    function pTextOpacity1(){
        $("#ptextLeft").css("opacity", "1");
        $("#ptextCenter").css("opacity", "1");
        $("#ptextRight").css("opacity", "1");
    }

    //4.7.2) pTextTransform1
    function pTextTransform1(){
        $("#ptextLeft").css("transform", "scale(1)");
        $("#ptextCenter").css("transform", "scale(1)");
        $("#ptextRight").css("transform", "scale(1)");
    }

    //4.7.3) pTextBorder
    function pTextBorder(){
        $("#ptextLeft").css("border", "1px solid");
        $("#ptextCenter").css("border", "1px solid");
        $("#ptextRight").css("border", "1px solid");
    }

    //4.7.4) pTextLeft
    function pTextLeft(){
        $("#ptextLeft").css("left", "-7%");
        $("#ptextCenter").css("left", "43.5%");
        $("#ptextRight").css("left", "93.5%");
    }

    //4.7.5) pTextTop
    function pTextTop(){
        $("#ptextLeft").css("top", "68%");
        $("#ptextCenter").css("top", "68%");
        $("#ptextRight").css("top", "68%");
    }

//4.8) arrowsOpacityLow
function arrowsOpacityLow(){
    $("#arrow1").css("opacity", "0");
    $("#arrow2").css("opacity", "0");
    $("#arrow3").css("opacity", "0");
}

//4.9) logoTransformTranslateDown
function logoTransformTranslateDown(){
    $("#logo").css("transform", "scale(1)");
    $("#image").css("margin", "0%");
}

//4.10) verticalBarsClose
function verticalBarsClose(){
    $("#verticalsmallLeft").css("height", "0px");
    $("#verticalsmallCenter").css("height", "0px");
    $("#verticalsmallRight").css("height", "0px");
}

//4.11) horizontalBarClose
function horizontalBarClose(){
    $("#horizontalLine").css("width", "0px"); 
}

//4.12) verticalBarclose
function verticalBarclose(){
    $("#verticalLine").css("height", "0px");
}

//4.13) textFadeout
function textFadeout(){
    $("#text").css("-webkit-animation", "0.2s ease 0s normal forwards 1 fadeout");
    $("#text").css("animation", "0.2s ease 0s normal forwards 1 fadeout");
    $("#logo").css("margin-top", "35%");
}

//4.14) logoOpacityDown
function logoOpacityDown(){
    $("#logo").css("opacity", "100%");
}

//4.15) allpClose
function allpClose(){
    $("#pWhoAmI").css("opacity", "0");
    $(".skills").css("opacity", "0");
    $("#pWorks").css("opacity", "0");
    $("#pContacts").css("opacity", "0");
    $("#ptextLeft").css("opacity", "0");
    $("#ptextCenter").css("opacity", "0");
    $("#ptextRight").css("opacity", "0");
}

//4.16) allpTop
function allpTop(){
    $("#ptextLeft").css("top", "68%");
    $("#ptextCenter").css("top", "68%");
    $("#ptextRight").css("top", "68%");
}

//4.17) arrowsOpacityUp
function arrowsOpacityUp(){
    $("#arrow1").css("opacity", "0");
    $("#arrow2").css("opacity", "0");
    $("#arrow3").css("opacity", "0");
}

//4.18) arrowpLeftDisplay
function arrowpLeftDisplay(){
    $("#arrow1").css("display", "block");
}

//4.19) pLeftIntDisplay
function pLeftIntDisplay(){
    $("#pWhoAmI").css("display", "block");
    $(".skills").css("display", "block");
}

//4.20) arrowpLeftOpacity
function arrowpLeftOpacity(){
    $("#arrow1").css("opacity", "1");
}

//4.21) allBarsOpacityDown
function allBarsOpacityDown(){
    $("#verticalLine").css("opacity", "0");
    $("#horizontalLine").css("opacity", "0");
    $("#verticalsmallLeft").css("opacity", "0");
    $("#verticalsmallCenter").css("opacity", "0");
    $("#verticalsmallRight").css("opacity", "0");
}

//4.22) pLeftOpacityDown
function pLeftOpacityDown(){
    $("#ptextLeft").css("opacity", "0");
}

//4.23) pCenterOpacityDown
function pCenterOpacityDown(){
    $("#ptextCenter").css("opacity", "0");
}

//4.24) pRightOpacityDown
function pRightOpacityDown(){
    $("#ptextRight").css("opacity", "0");
}

//4.25) pLeftBorderDown
function pLeftBorderDown(){
    $("#ptextLeft").css("border", "0");
}

//4.26) pCenterBorderDown
function pCenterBorderDown(){
    $("#ptextCenter").css("border", "0");
}

//4.27) pRightBorderDown
function pRightBorderDown(){
    $("#ptextRight").css("border", "0");
}

//4.28) pLeftIntOpacityUp
function pLeftIntOpacityUp(){
    $("#pWhoAmI").css("opacity", "1");
    $(".skills").css("opacity", "1");
}

//4.29) logoMarginCenter
function logoMarginCenter(){
    $("#logo").css("margin-top", "35%");
}

//4.30) leftpTopLeftTransform
function leftpTopLeftTransform(){
    $("#ptextLeft").css("top", "-100%");
    $("#ptextLeft").css("left", "42%");
    $("#ptextLeft").css("transform", "scale(1.5)");
}

//4.31) arrowpCenterDisplay
function arrowpCenterDisplay(){
    $("#arrow2").css("display", "block");
}

//4.32) pCenterIntDisplay
function pCenterIntDisplay(){
    $("#pWorks").css("display", "block");
}

//4.33) arrowpCenterOpacity
function arrowpCenterOpacity(){
    $("#arrow2").css("opacity", "1");
}

//4.34) pCenterIntOpacityUp
function pCenterIntOpacityUp(){
    $("#pWorks").css("opacity", "1");
}

//4.35) centerpTopLeftTransform
function centerpTopLeftTransform(){
    $("#ptextCenter").css("top", "-120%");
    $("#ptextCenter").css("left", "42%");
    $("#ptextCenter").css("transform", "scale(1.5)");
}

//4.36) arrowpRightDisplay
function arrowpRightDisplay(){
    $("#arrow3").css("display", "block");
}

//4.37) pRightIntDisplay
function pRightIntDisplay(){
    $("#pContacts").css("display", "block");
}

//4.38) arrowpRightOpacity
function arrowpRightOpacity(){
    $("#arrow3").css("opacity", "1");
}

//4.39) pRightIntOpacityUp
function pRightIntOpacityUp(){
    $("#pContacts").css("opacity", "1");
}

//4.40) rightpTopLeftTransform
function rightpTopLeftTransform(){
    $("#ptextRight").css("top", "-100%");
    $("#ptextRight").css("left", "42%");
    $("#ptextRight").css("transform", "scale(1.5)");
}

//4.42) pLeftDefault
function pLeftDefault(){
    pLeftDefaultTopLeft();
    pLeftTransformDown();
    logoTransformUp();
    logoMarginUp();
    pLeftDisplayNot();
}

    //4.42.1) pLeftDefaultTopLeft
    function pLeftDefaultTopLeft(){
        $("#ptextLeft").css("top", "68%");
        $("#ptextLeft").css("left", "-7%");
    }

    //4.42.2) pLeftTransformDown
    function pLeftTransformDown(){
        $("#ptextLeft").css("transform", "scale(1)");
    }

    //4.42.3) pLeftDisplayNot
    function pLeftDisplayNot(){
        $("#pWhoAmI").css("display", "none");
        $(".skills").css("display", "none");
    }

//4.43) logoMarginUp
function logoMarginUp(){
    $("#logo").css("margin-top", "20%");
}

//4.44) pCenterDefault
function pCenterDefault(){
    pCenterDefaultTopLeft();
    pCenterTransformDown();
    logoTransformUp();
    logoMarginUp();
    pCenterDisplayNot();
}

    //4.44.1) pCenterDefaultTopLeft
    function pCenterDefaultTopLeft(){
        $("#ptextCenter").css("top", "68%");
        $("#ptextCenter").css("left", "43.5%");
    }

    //4.44.2) pCenterTransformDown
    function pCenterTransformDown(){
        $("#ptextCenter").css("transform", "scale(1)");
    }

    //4.44.3) pCenterDisplayNot
    function pCenterDisplayNot(){
        $("#pWorks").css("display", "none");
    }

//4.45) pRightDefault
function pRightDefault(){
    pRightDefaultTopLeft();
    pRightTransformDown();
    logoTransformUp();
    logoMarginUp();
    pRightDisplayNot();
}

    //4.45.1) pRightDefaultTopLeft
    function pRightDefaultTopLeft(){
        $("#ptextRight").css("top", "68%");
        $("#ptextRight").css("left", "93.5%");
    }

    //4.45.2) pRightTransformDown
    function pRightTransformDown(){
        $("#ptextRight").css("transform", "scale(1)");
    }

    //4.45.3) pRightDisplayNot
    function pRightDisplayNot(){
        $("#pContacts").css("display", "none");
    }

//4.46) pLeftIntOpacityDown
function pLeftIntOpacityDown(){
    $("#pWhoAmI").css("opacity", "0");
    $(".skills").css("opacity", "0");
}

//4.47) pCenterIntOpacityDown
function pCenterIntOpacityDown(){
    $("#pWorks").css("opacity", "0");
}

//4.48) pRightIntOpacityDown
function pRightIntOpacityDown(){
    $("#pWorks").css("opacity", "0");
}

//4.49) arrowpLeftOpacityDown
function arrowpLeftOpacityDown(){
    $("#arrow1").css("opacity", "0");
}

//4.50) arrowpCenterOpacityDown
function arrowpCenterOpacityDown(){
    $("#arrow2").css("opacity", "0");
}

//4.51) arrowpRightOpacityDown
function arrowpRightOpacityDown(){
    $("#arrow3").css("opacity", "0");
}

//4.52) pBorderLeft
function pBorderLeft(){
    $("#ptextLeft").css("border", "1px solid");
    $("#ptextCenter").css("opacity", "1");
    $("#ptextRight").css("opacity", "1");
    $("#arrow1").css("display", "none");
}

//4.53) pBorderCenter
function pBorderCenter(){
    $("#ptextLeft").css("opacity", "1");
    $("#ptextCenter").css("border", "1px solid");
    $("#ptextRight").css("opacity", "1");
    $("#arrow2").css("display", "none");
}

//4.54) pBorderRight
function pBorderRight(){
    $("#ptextLeft").css("opacity", "1");
    $("#ptextCenter").css("opacity", "1");
    $("#ptextRight").css("border", "1px solid");
    $("#arrow3").css("display", "none");
}

//4.55) allPDisplay
function allPDisplay(){
    $("#ptextLeft").css("display", "block");
    $("#ptextCenter").css("display", "block");
    $("#ptextRight").css("display", "block");
}

//4.56) allPDisplayNot
function allPDisplayNot(){
    $("#ptextLeft").css("display", "none");
    $("#ptextCenter").css("display", "none");
    $("#ptextRight").css("display", "none");
}