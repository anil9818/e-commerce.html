$(document).ready(function(){
    $(".nav i").click(function(){
        $(".nav ul li").slideToggle();
    });
    $("#shorting").click(function(){
        var x = document.getElementById('shorting').value;
        if(x=="popularity"){
            $("#filter1").html("<img src='images/product-8.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1190.00 &#x20B9; </span></h3>");

            $("#filter2").html("<img src='images/product-10.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1475.25 &#x20B9; </span></h3>");

            $("#filter3").html("<img src='images/product-9.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>2950.00 &#x20B9; </span></h3>");

            $("#filter4").html("<img src='images/product-2.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>375.25 &#x20B9; </span></h3>");

            $("#filter5").html("<img src='images/product-12.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>490.58 &#x20B9; </span></h3>");

            $("#filter6").html("<img src='images/product-1.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>250.00 &#x20B9; </span></h3>");

            $("#filter7").html("<img src='images/product-3.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>150.72 &#x20B9; </span></h3>");

            $("#filter8").html("<img src='images/product-4.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.00 &#x20B9; </span></h3>");

            $("#filter9").html("<img src='images/product-5.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>796.20 &#x20B9; </span></h3>");

            $("#filter10").html("<img src='images/product-6.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.25 &#x20B9; </span></h3>");

            $("#filter11").html("<img src='images/product-7.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>148.72 &#x20B9; </span></h3>");

            $("#filter12").html("<img src='images/product-11.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>948.72 &#x20B9; </span></h3>");
           
       
        }

        if(x=="rating"){
            $("#filter1").html("<img src='images/product-4.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</h4> <br> <span class='crncy'>190.00 &#x20B9; </span></h3>");

            $("#filter2").html("<img src='images/product-5.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</h4> <br> <span class='crncy'>796.20 &#x20B9; </span></h3>");

            $("#filter3").html("<img src='images/product-10.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</h4> <br> <span class='crncy'>1475.25 &#x20B9; </span></h3>");

            $("#filter4").html("<img src='images/product-12.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</h4> <br> <span class='crncy'>490.58 &#x20B9; </span></h3>");

            $("#filter5").html("<img src='images/product-1.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</h4> <br> <span class='crncy'>250.00 &#x20B9; </span></h3>");

            $("#filter6").html("<img src='images/product-2.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</h4> <br> <span class='crncy'>375.25 &#x20B9; </span></h3>");

            $("#filter7").html("<img src='images/product-7.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</h4> <br> <span class='crncy'>148.72 &#x20B9; </span></h3>");

            $("#filter8").html("<img src='images/product-9.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2605;&#x2606;</h4> <br> <span class='crncy'>2950.00 &#x20B9; </span></h3>");

            $("#filter9").html("<img src='images/product-3.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>150.72 &#x20B9; </span></h3>");

            $("#filter10").html("<img src='images/product-11.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>948.72 &#x20B9; </span></h3>");

            $("#filter11").html("<img src='images/product-8.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2606;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1190.00 &#x20B9; </span></h3>");

            $("#filter12").html("<img src='images/product-6.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2606;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.25 &#x20B9; </span></h3>");
           
       
        }

        if(x=="sale"){
            $("#filter1").html("<img src='images/product-1.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>250.00 &#x20B9; </span></h3>");

            $("#filter2").html("<img src='images/product-4.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.00 &#x20B9; </span></h3>");

            $("#filter3").html("<img src='images/product-6.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.25 &#x20B9; </span></h3>");

            $("#filter4").html("<img src='images/product-3.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>150.72 &#x20B9; </span></h3>");

            $("#filter5").html("<img src='images/product-7.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>148.72 &#x20B9; </span></h3>");

            $("#filter6").html("<img src='images/product-12.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>490.58 &#x20B9; </span></h3>");

            $("#filter7").html("<img src='images/product-2.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>375.25 &#x20B9; </span></h3>");

            $("#filter8").html("<img src='images/product-5.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>796.20 &#x20B9; </span></h3>");

            $("#filter9").html("<img src='images/product-8.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1190.00 &#x20B9; </span></h3>");

            $("#filter10").html("<img src='images/product-9.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>2950.00 &#x20B9; </span></h3>");

            $("#filter11").html("<img src='images/product-10.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1475.25 &#x20B9; </span></h3>");

            $("#filter12").html("<img src='images/product-11.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>948.72 &#x20B9; </span></h3>");
           
       
        }

        if(x=="price"){
            $("#filter1").html("<img src='images/product-3.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>150.72 &#x20B9; </span></h3>");

            $("#filter2").html("<img src='images/product-7.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>148.72 &#x20B9; </span></h3>");

            $("#filter3").html("<img src='images/product-4.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.00 &#x20B9; </span></h3>");

            $("#filter4").html("<img src='images/product-6.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>190.25 &#x20B9; </span></h3>");

            $("#filter5").html("<img src='images/product-1.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>250.00 &#x20B9; </span></h3>");

            $("#filter6").html("<img src='images/product-2.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>375.25 &#x20B9; </span></h3>");

            $("#filter7").html("<img src='images/product-12.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>490.58 &#x20B9; </span></h3>");

            $("#filter8").html("<img src='images/product-5.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>796.20 &#x20B9; </span></h3>");

            $("#filter9").html("<img src='images/product-11.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>948.72 &#x20B9; </span></h3>");

            $("#filter10").html("<img src='images/product-8.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1190.00 &#x20B9; </span></h3>");

            $("#filter11").html("<img src='images/product-10.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>1475.25 &#x20B9; </span></h3>");

            $("#filter12").html("<img src='images/product-9.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>2950.00 &#x20B9; </span></h3>");
           
       
        }

        
    });


    $(".rem-1").click(function(){
        $(".image-1 img, .text-1, .much-1, .price-1").hide();
    })
    $(".rem-2").click(function(){
        $(".image-2 img, .text-2, .much-2, .price-2").hide();
    })
    $(".rem-3").click(function(){
        $(".image-3 img, .text-3, .much-3, .price-3, .subtotal2, .explore").hide();
    })
});


    //  yeh bhi ho sakta hai 
 
// function getddl(){
//     var x = document.getElementById('shorting').value;
//     var filter3 = document.getElementById('filter3');
//     if (x=="popularity"){
//         document.getElementById('filter2').innerHTML="<img src='images/product-4.jpg' width='100% 240px'> <h3 class='txt-3'>HRX Gray Trackpants<br><h4 class='icn'>&#x2605;&#x2605;&#x2605;&#x2606;&#x2606;</h4> <br> <span class='crncy'>148.72 &#x20B9; </span></h3>";
//     }

// }