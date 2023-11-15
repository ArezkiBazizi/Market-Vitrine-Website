
             var bar = document.getElementById('bar');
             var border = document.getElementById('border'); 
             var rest = document.getElementById('rest');

             let back = document.getElementById('back');
             let design = document.getElementById('design');
             let food = document.getElementById('food');
             let logo = document.getElementById('logo');
             let text = document.getElementById('text');

        window.addEventListener('scroll', function(){
            var value = window.scrollY;
            back.style.top = '0 px';
            design.style.left = -value * 0.5 + 'px';
            food.style.top = -value * 0.15 + 'px';
            logo.style.top = -value * 0.15 + 'px';
            text.style.top =  value * 0.4 + 'px';
        

        } )

        bar.addEventListener('click', function(){
            border.classList.toggle("border");
            rest.classList.toggle("blur");

    
        })
        
    var words = ['Hi i like HTML', 'I also like css', 'Lorem ipsum dolor sit amet', ' consectetur adipiscing elit', 'sed do eiusmod tempor incididunt'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 70;
    var wordflick = function () {
    setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});

