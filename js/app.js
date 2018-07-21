const http = new easyHTTP;

// Get Posts
http.get('/json/retrive.json', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    var obj = JSON.parse(posts);
    console.log(obj);
    if(obj!=null){
      console.log(obj[0].type);
      var result = "";
      var loaders = {"1":"loader","2":"loader1","3":"loader2"};
      var template = '<div class="catalogue_container" id = "container{ids}">\
      <div class="image_contain">\
             <div class="opacity_container">\
              </div>\
              <div class = "text_contain">\
                      <i class = "pb_officer">{heading}</i>\
                      <span class = "eng_text">ENGINEERING</span>\
              </div>\
              <label class="container1 check_title1">\
                          <input type="checkbox" id = "check{ids}" onclick = "checkfunction(this)" value = "container{ids}" placeholder = "basic{ids}">\
                          <span class="checkmark1"></span>\
              </label>\  </div>\
             <div class="basic" id = "basic{ids}">\
                  <div class = "badge_div">\
                          <img class = "badge_timer" src = "/images/level.png" alt = "badge_image"/>\
                          <p class = "basic_def">{type}</p>\
                  </div>\
                   <div class = "mins_div">\
                          <img class = "badge_timer" src = "/images/time.png" alt = "timer_image"/>\
                          <p class="timer_def">{time} mins</p>\
                   </div>\
            </div>\
            <div class="availability">\
               <span class="{class}"></span>\
               <span class = "license_title">{license} licenses available</span>\
            </div>\ </div>';
            for(var i = 0;i < obj.length;i++){
               result += template.replace("{heading}",obj[i].heading).replace("{type}",obj[i].type).replace("{time}",obj[i].time).replace("{license}",obj[i].license_availability).replace("{class}",loaders[obj[i].tag_id]).replace("{ids}",i).replace("{ids}",i).replace("{ids}",i).replace("{ids}",i).replace("{ids}",i);
            }
            console.log(result);
            document.getElementById('template_here').innerHTML = result;
    }
  }
});