
//
//CI Solutions, Thomas C. Downes..  ----6/22/2019 td  
//
//    TextMover_T2.js
//
//         (Used by LayoutText2Controller/Index.cshtml)
//
//         (Eventually this script will depend upon Scripts/Elements_T2.js)
//

var aT2;
aT2 = 5;
//alert("T2  This is TextMover1  !!");

//Make the DIV element draggable:
//
// 6/26/2019 td//dragElement(document.getElementById("id__mydivheader1"));

//
//Added 6/26/2019 thomas downes
//
var moveable_textT2 = document.getElementById("id__mydivheaderT2");

var textbox_TopEdgeT2 = document.getElementsByName('T2.TopEdgePositionPixels')[0];
var textbox_LeftEdgeT2 = document.getElementsByName('T2.LeftEdgePositionPixels')[0];

var badge_backT2 = document.getElementsByName('badge_back')[0];
badge_backT2 = document.getElementById("badge_back");

//
//Added 6/26/2019 thomas downes
//
dragElement_T2(moveable_textT2);
var intPosTopT2 = 20;
var intPosLeftT2 = 20;

//
//Added 6/26/2019 thomas downes
//
moveable_textT2.offsetTop = document.getElementsByName('T2.TopEdgePositionPixels')[0].value; // = intTopEdge;
moveable_textT2.offsetLeft = document.getElementsByName('T2.LeftEdgePositionPixels')[0].value; // = intLeftEdge;  

//
//Added 6/26/2019 thomas downes
//
//moveable_text.offsetLeft = textbox_LeftEdge.value;
//moveable_text.offsetTop = textbox_TopEdge.value;

intPosLeftT2 = (badge_backT2.offsetLeft + Number(textbox_LeftEdgeT2.value));
moveable_textT2.style.left = (intPosLeftT2) + "px";

intPosTopT2 = (badge_backT2.offsetTop + Number(textbox_TopEdgeT2.value));
moveable_textT2.style.top = (intPosTopT2) + "px";

//dragElement(document.getElementById("id__mydivheader2"));
//dragElement(document.getElementById("id__mydivheader3"));
//dragElement(document.getElementById("id__mydivheader4"));
//dragElement(document.getElementById("id__mydivheader5"));

var curr_heightButtonT2 = 100;
curr_heightButtonT2 = 10;
//var curr_widthButton = 100;

//function heightButtonMore() {
//    //Added 5/26/2019 td
//    curr_heightButton = (curr_heightButton + 5);
//    return (curr_heightButton);
//}

//function heightButtonLess() {
//    //Added 5/26/2019 td
//    curr_heightButton = (curr_heightButton - 5);
//    return (curr_heightButton);
//}

//function widthButtonMore() {
//    //Added 5/26/2019 td
//    curr_widthButton = (curr_widthButton + 5);
//    return (curr_widthButton);
//}

//function widthButtonLess() {
//    //Added 5/26/2019 td
//    curr_widthButton = (curr_widthButton - 5);
//    return (curr_widthButton);
//}


//A parameter variable is declared by being listed as a parameter.
//
function dragElement_T2(parameter_element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var boolResize = false;  //true; // false;//Added 5/26/2019 td

    // 6-26-2019 //var badge_back = jQuery("#badge_back");
    // #1 6-26-2019 //var badge_back = document.getElementsByName('badge_back')[0].value;   //Oops!! .value is wrong.  
    //  #2 6-26-2019 //var badge_back = document.getElementsByName('badge_back')[0];   //Oops!!  6-26-2019 // [0].value;

    var box_topedge = $("#T2.TopEdgePositionPixels");
    var box_leftedge = jQuery("#T2.LeftEdgePositionPixels");
    var elem_TEXT = document.getElementsByName('T2.TopEdgePositionPixels')[0].value;

    var boxHeightPixels = document.getElementsByName('T2.HeightPixels')[0];
    var boxWidthLengthPixels = document.getElementsByName('T2.WidthLengthPixels')[0];
    var badge_back = document.getElementById("badge_back");

    var intLeftEdge = 20;
    var intTopEdge = 20;

    console.log('T2 Is it found or not?  0 < TopEdgePositionPixels.Length = ' + $('#T2_TopEdgePositionPixels').length)
    console.log('T2 Is it found or not?  0< LeftEdgePositionPixels.Length = ' + $('#T2_LeftEdgePositionPixels').length)
    console.log('T2 Is it found or not?  0 < badge_back.Length = ' + $('badge_back').length)
    console.log('T2 Is it found or not?  0 < box_topedge.Length = ' + box_topedge.Length);

    parameter_element.onmousedown = dragMouseDown;

    //Is the programmer declaring a function __inside__ function dragElement?  yes its legal
    //
    function dragMouseDown(par_event_e) {

        //if (boolResize | true) {

        //}
        //else {
        par_event_e = par_event_e || window.event;
        par_event_e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = par_event_e.clientX;
        pos4 = par_event_e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        //}
    }

    //Is the programmer declaring a function __inside__ function dragElement?  yes it's legal
    //
    function elementDrag(event_e) {
        event_e = event_e || window.event;
        event_e.preventDefault();

        // calculate the new cursor position:
        pos1 = pos3 - event_e.clientX;
        pos2 = pos4 - event_e.clientY;

        pos3 = event_e.clientX;
        pos4 = event_e.clientY;

        // set the element's new position:
        if (boolResize) {
            //Resize the element.
            //   -----5/26/2019 td
            //parameter_element.style.height = (parameter_element.offsetTop - pos2 ) + "px";
            //parameter_element.style.width = (parameter_element.offsetLeft - pos1 ) + "px";

            //parameter_element.style.height = "100px";
        }
        else {
            //Move the element.
            parameter_element.style.top = (parameter_element.offsetTop - pos2) + "px";
            parameter_element.style.left = (parameter_element.offsetLeft - pos1) + "px";

            // 6/26 td//var badge_back = document.getElementById('badge_back');   // Added 6/24/2019 thomas downes.
            //Added 6/26/2019 td 
            var badge_back = document.getElementsByName('badge_back')[0];
            badge_back = document.getElementById("badge_back");

            //Added 6/23/2019 thomas d.
            var intTopEdge = (parameter_element.offsetTop);  // - badge_back.offsetTop);
            var intLeftEdge = (parameter_element.offsetLeft); // - badge_back.offsetLeft);

            //Added 6/23/2019 thomas d.
            intTopEdge = (parameter_element.offsetTop - badge_back.offsetTop);
            intLeftEdge = (parameter_element.offsetLeft - badge_back.offsetLeft);

            document.getElementsByName('T2.TopEdgePositionPixels')[0].value = intTopEdge;
            document.getElementsByName('T2.LeftEdgePositionPixels')[0].value = intLeftEdge;

            //box_topedge.value = intTopEdge; // parameter_element.offsetTop - badge_back.offsetTop;
            //box_leftedge.value = intLeftEdge; // parameter_element.offsetLeft - badge_back.offsetLeft;

            //box_topedge.text = intTopEdge; 
            //box_leftedge.text = intLeftEdge; 

            //console.log('intTopEdge = ' + intTopEdge);
            //console.log('intLeftEdge = ' + intLeftEdge);
            //console.log('badge_back.offsetLeft = ' + badge_back.offsetLeft);
            //console.log('Current value of TopEdge = ' + box_topedge.value)

            // $("input[name='TopEdgePositionPixels']").value = 'Testing my javacript.....'; //intTopEdge;
            //elem.value = "Testing....";
            //console.log('Is it found or not?  ' + $('#id').length)


        }
    }

    //Is the programmer declaring a function __inside__ function dragElement?
    //
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;

        //var box_topedge = $("#TopEdgePositionPixels");
        //var box_leftedge = jQuery("#LeftEdgePositionPixels");

        //box_topedge.val = this.dragElement.offsetTop;
        //box_leftedge.val = this.dragElement.offsetLeft;

        //6/28 td---if (intTopEdge < 0 && intLeftEdge < 0) {
        if (intTopEdge > 0 && intLeftEdge < 0) {

            // 6/28/2019 td //parameter_element.style.height = changedHeightPX(-10);
            parameter_element.style.height = changedHeightPX(10);
        }

        //Added 6/28/2019 thomas D.
        //if (intTopEdge < 0 && intLeftEdge > 0) {

        //    parameter_element.style.width = changedWidthPX(-10);
        //}

        ////Added 6/28/2019 thomas D.
        //if (intTopEdge > (badge_back.offsetTop + badge_back.offsetHeight) && intLeftEdge > 0) {

        //    parameter_element.style.width = changedWidthPX(+10);
        //}

        ////Added 6/28/2019 thomas D.
        //if (intTopEdge > 0 && intLeftEdge > (badge_back.offsetLeft + badge_back.offsetWidth)) {

        //    parameter_element.style.height = changedHeightPX(+10);
        //}


    }

    function changedHeightPX(intAmount) {
        //
        //  Added 6/28/2019 Thomas DOWNES
        //
        var intHeight = parseInt(parameter_element.style.height, 10);
        var intHeight_new = (intHeight + intAmount);
        if (Number.isNaN(intHeight_new)) { intHeight_new = 40; }
        boxHeightPixels.value = intHeight_new;
        return (intHeight_new + "px");
    }

    function changedWidthPX(intAmount) {
        //
        //  Added 6/28/2019 Thomas DOWNES
        //
        var intWidth = parseInt(parameter_element.style.width, 10);
        var intWidth_new = (intWidth + intAmount);

        if (Number.isNaN(intWidth_new)) { intWidth_new = 40; }
        boxWidthPixels.value = intWidth_new;
        return (intWidth_new + "px");

    }  //End of "function changedWidthPX(intAmount)"

}


//button_printpositions.addEventListener('click', function (event) {
    //
    // Click event-handler for the Save button.
    //
    //var output_box = document.getElementById("textarea_values");

    //var moveable_div1 = document.getElementById("id__mydivheader1");

    //var moveable_div2 = document.getElementById("id__mydivheader2");
    //var moveable_div3 = document.getElementById("id__mydivheader3");
    //var moveable_div4 = document.getElementById("id__mydivheader4");
    //var moveable_div5 = document.getElementById("id__mydivheader5");

    //output_box.value = "mydivheader1, OffsetLeft: " + moveable_div1.offsetLeft + "  " +
    //    " , OffsetTop:  " + moveable_div1.offsetTop + " \n  " +
    //    "mydivheader1, ClientHeight: " + moveable_div1.clientHeight + " \n " +
    //    " , ClientWidth:  " + moveable_div1.clientWidth + " \n ";  // +
        //"mydivheader2, OffsetLeft: " + moveable_div2.offsetLeft + "  \n " +
        //" , OffsetTop:  " + moveable_div2.offsetTop + " \n  "

    //alert("Div #1  Left coordinate: " + moveable_div1.offsetLeft + ", Top coordinate: " + moveable_div1.offsetTop);
    //var m oveable_div2 = document.getElementById("mydiv2");
    //alert("Div #2  Left coordinate: " + moveable_div2.offsetLeft + ", Top coordinate: " + moveable_div2.offsetTop);

// });


//buttonBtnHeightMore.addEventListener('click', function (event) {
//    //
//    // Click event-handler for the Save button.
//    //
//    var moveable_div5 = document.getElementById("id__mydivheader5");
//    moveable_div5.style.height = heightButtonMore() + "px";
//});

//buttonBtnHeightLess.addEventListener('click', function (event) {
//    //
//    // Click event-handler for the Save button.
//    //
//    var moveable_div5 = document.getElementById("id__mydivheader5");
//    moveable_div5.style.height = heightButtonLess() + "px";
//});

//buttonBtnWidthMore.addEventListener('click', function (event) {
//    //
//    // Click event-handler for the Save button.
//    //
//    var moveable_div5 = document.getElementById("id__mydivheader5");
//    moveable_div5.style.height = heightButtonMore() + "px";
//});


