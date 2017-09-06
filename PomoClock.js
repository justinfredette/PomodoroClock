$( document ).ready(function() {

  var count = parseInt($("#number").html());
  var count2 = parseInt($("#breakNum").html());
  
  $("#session").hide();
  
  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60;
    
    function timer() {
      $("#minusFive, #addFive, #minusBreak, #addBreak, #resetBtn, #start, #breakNum, #timeTitle, #titleBreak").hide();
      $("#session").show();
      $("#session").html("Countdown: ");
      
      count -= 1;
      if (count === 0) {
        alert("TIME IS UP!");
        clearInterval(counter);
        $("#number").hide();
        
        var counter2 = setInterval(breakTimer, 1000);
        
      }
      
      $("#number").html(count);
      
       if (count % 60 >= 10) {
         $("#number").html(Math.floor(count / 60) + ":" + count % 60)
       } else {
         $("#number").html(Math.floor(count / 60) + ":" + "0" + count % 60)
       }
      
      function breakTimer() {
        
        $("#session").html("Break Countdown: ");
        $("#breakNum").show();
        
        count2 -= 1;
        
        if (count2 === 0) {
          clearInterval(counter2)
          $("#resetBtn").show();
          $("#breakNum, #session").hide();
        }
        
        $("#breakNum").html(count2);
        
        if (count2 % 60 >= 10) {
         $("#number").html(Math.floor(count2 / 60) + ":" + count2 % 60)
       } else {
         $("#number").html(Math.floor(count2 / 60) + ":" + "0" + count2 % 60)
      }
      }            
    }
    
  });
  
  $("#minusFive").click(function() {
    if(count > 0) {
      count -= 5;
      $("#number").html(count);
    }
    event.preventDefault();
  });
  
  $("#addFive").click(function() {
    count += 5;
    $("#number").html(count);
    event.preventDefault();
  });
  
    $("#minusBreak").click(function() {
    if(count > 0) {
      count -= 5;
      $("#breakNum").html(count);
    }
    event.preventDefault();
  });
  
  $("#addBreak").click(function() {
    count += 5;
    $("#breakNum").html(count);
    event.preventDefault();
  });
  
  $("resetBtn").click(function() {
    location.reload();
  });
});