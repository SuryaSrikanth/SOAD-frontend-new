function arrayToTable(tableData) {
  var table = document.createElement("table");
  var datastr = '<table class="responsive-table highlight"><tr><td>';
  var headend = tableData.indexOf("\n");
  console.log(headend);
  for (i = 0; i < tableData.length; i++) {
    // console.log(tableData[i]);}
    if (tableData[i] === ",") {
      if (i <= headend) {
        datastr = datastr.concat("</th><th>");
      } else {
        datastr = datastr.concat("</td><td>");
      }
    } else if (tableData[i] === "\n") {
      if (i <= headend) {
        datastr = datastr.concat("</th></tr><tr><td>");
      } else {
        datastr = datastr.concat("</td></tr><tr><td>");
      }
    } else {
      datastr = datastr.concat(tableData[i]);
    }
  }
  datastr.concat(datastr, "</td></tr></table>");
  document.getElementById("csvdata").innerHTML = datastr;
}

var c = document.getElementById("pic");
var d = document.getElementById("disp");
var f = new FileReader();
c.onchange = () => {
  if (c.files && c.files[0]) {
    var f = new FileReader();
    f.onload = () => {
        document.getElementById("disp").style.display = 'block';
        document.getElementById("disp").src = f.result;
    };
    f.readAsDataURL(c.files[0]);
  }
};

var count = 0;
document.getElementById("login").onclick = () => {
  document.getElementById(
    "btncounter"
  ).innerHTML = `You have clicked it ${++count} times.`;
};




var c2 = document.getElementById("CSV");
var f2 = new FileReader();
c2.onchange = () => {
  if (c2.files && c2.files[0]) {
    var f2 = new FileReader();
    f2.onload = () => {
      arrayToTable(f2.result);
    };
    f2.readAsText(c2.files[0]);
  }
};




VANTA.FOG({
  el: "#login",
  highlightColor: 0xed00ff,
  midtoneColor: 0x11ff,
  lowlightColor: 0xffc0,
  baseColor: 0x6ff03,
  speed: 5.0,
  zoom: 0.1
});


document.getElementById('downbtnclk').onclick = () => {
  var a = document.getElementById('downfile');

  
  console.log('hi');
  var txt = document.getElementById('txtarea').value;
  console.log(txt);
  var MIME_TYPE, theBlob;

  MIME_TYPE = "text/plain";
  theBlob = new Blob([txt], {type: MIME_TYPE});
  
  a.download = "Download-text.txt";
  a.href = window.URL.createObjectURL(theBlob);
  a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(":");
}