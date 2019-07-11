  function update() {
    var btech = ["Tirana", "Durres", "Vlore", "Shkoder"];
    var diploma = ["Prishtina", "Mitrovica", "Peje", "Gjakove"];
    var bsc = ["Berlin", "Frankfurt", "Hannover", "Bonn"];
    var bca = ["Berlin", "Frankfurt", "Hannover", "Bonn"];

    var courses = document.getElementById("1");
    var colleges = document.getElementById("2");
    var selected_course = courses.options[courses.selectedIndex].value;

    if (selected_course == "btech") {
      for (var i = 0; i < btech.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = btech[i];
        opt1.value = btech[i];
        colleges.appendChild(opt1);
      }
    } else if (selected_course == "diploma") {
      for (var j = 0; j < diploma.length; j++) {
        var opt2 = document.createElement('option');
        opt2.innerHTML = diploma[j];
        opt2.value = diploma[j];
        colleges.appendChild(opt2);
      }
    } else if (selected_course == "bsc") {
      for (var k = 0; k < bsc.length; k++) {
        var opt3 = document.createElement('option');
        opt3.innerHTML = bsc[k];
        opt3.value = bsc[k];
        colleges.appendChild(opt3);
      }
    } else if (selected_course == "bca") {
      for (var m = 0; m < bca.length; m++) {
        var opt4 = document.createElement('option');
        opt4.innerHTML = bca[m];
        opt4.value = bca[m];
        colleges.appendChild(opt4);
      }
    } else
      var t = 0;
  }

  function secondupdate() {

    var tirana = ["Durres", "Vlore", "Shkoder"];

    var colleges = document.getElementById("2");
    var streams = document.getElementById("3");
    var selected_stream = colleges.options[colleges.selectedIndex].value;
    if (selected_stream == "Tirana") {
      for (var i = 0; i < tirana.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = tirana[i];
        opt1.value = tirana[i];
        streams.appendChild(opt1);
      }
    } else
      var t = 0;
  }

  function thirdupdate() {

    var shift = ["Morning","Evening"];

    var streams = document.getElementById("3");
    var shifts = document.getElementById("4");
    var selected_shift = streams.options[streams.selectedIndex].value;
    if (selected_shift == "Vlore") {
      for (var i = 0; i < shift.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = shift[i];
        opt1.value = shift[i];
        shifts.appendChild(opt1);
      }
    } else
      var t = 0;
  }
