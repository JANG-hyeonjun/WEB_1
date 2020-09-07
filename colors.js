var Links = {
  setColor : function(color){
    // var alist = document.querySelectorAll('a');
    //   var i = 0;
    //  while(i < alist.length)
    //  {
    //    alist[i].style.color = color;
    //    i = i + 1;
    //  }
     $('a').css('color',color);
  }
}

var Body = {
  setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor : function(color){
      // document.querySelector('body').style.backgroundColor = color;
          $('body').css('backgroundColor',color);
  }
}
function nightdaHandler(){
if(document.querySelector('#night_day').value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  document.querySelector('#night_day').value = 'day';

  Links.setColor('yellow');
}
else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    document.querySelector('#night_day').value = 'night';

      Links.setColor('blue');
}
}
