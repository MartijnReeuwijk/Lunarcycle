function getBattery() {
  var battery =
    navigator.battery ||
    navigator.webkitBattery ||
    navigator.mozBattery ||
    navigator.msBattery;
  if (battery) {
    console.log("battery level: ", Math.floor(battery.level * 100) + "%");
  } else {
    console.log("battery level not supported");
  }
}

function drawSpace() {
  for (var i = 0; i < 500; i++) {
    // console.log(window.innerHeight * Math.random());
    document.getElementById("l-galaxy").innerHTML += `
      <div class="galaxy-star" style="top:${1280 * Math.random()}px;left:${1280 *
      Math.random()}px"></div>
`;
  }
}

// {

//   console.log(data);
// element = document.getElementById("list");
// element.innerHTML = `${data
//   .map(item =>
//     `
// <div class="incident ${item.statistical_murder_flag ? "death" : "alive"}">
// <p>Casenumber:${item.incident_key}</p>
// <p>Location:${item.boro}</p>
// <p>Death:${item.statistical_murder_flag ? "Yes" : "No"}</p>
// <p>Victim age: ${item.vic_age_group}</p>
// <p>Precinct:${item.precinct}</p>
// ${
// item.statistical_murder_flag
//   ? '<img class="spinlol" id="spinlol" src="./public/img/rip.png" alt="">'
//   : ""
// }
// </div>
// `.trim()
//   )
//   .join("")}`;
// })

// $(document).ready(function(){
//
//   function freshDot(){
//     this.obj = document.createElement("div");
//     this.obj.classList.add("box");
//     this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
//     this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
//     this.size = Math.floor(5 * Math.random()) + 7;
//     this.obj.style.height =  this.size + 'px';
//     this.obj.style.width = this.size + 'px';
//
//     document.body.appendChild(this.obj);
//   }
//   var dot = [];
//   for(var i = 0 ; i < 200 ; i++ ){
//     dot.push(new freshDot());
//   }
/*
  $(window).resize(function(){
    for(i=0;i<200;i++){
      document.body.removeChild(dot[i]);
    }
  });
  */
// });

getBattery();
