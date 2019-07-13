  function update() {
    var btech = ["Indira Gandhi Delhi Institute Of Technology",
                 "Delhi Technical University",
                 "Maharaja Agrasen Institute Of Technology",
                 "Jamia Milia Islamia",
                 "Bharti Vidyapeeth Institute Of Technology",
                 "Netaji Subhas Institute Of Technology",
                 "Indraprasth Institute Of Information Technology",
                 "National Institute Of Technology",
                 "JIMS Engineering Management Technical Campus, NOIDA",
                 "Maharaja Surajmal Institute Of Technology",
                 "Bhagwan Parshuram Institute Of Technology",
                 "HMR Institute Of Technology",
                 "Northern India Engineering Collage",
                 "Noida Institute Of Education And Technology",
                 "Amity University",
                 "Sharda University",
                 "Manav Rachna University",
                 "BML Munjal University"];
    var diploma = ["Guru Nanak Dev Institute Of Technology","Ambedkar Institute Of Technology",
                     "Aryabhatt Institute Of Technology",
                     "Pusa Institute Of Technology",
                     "Rajokri Institute Of Technology",
                     "Integrated Institute of Technology",
                     "Govind Ballabh Pant Institute of Technology",
                     "Guru Teg Bahadur Institute Of Technology",
                     "Delhi Institute Of Tool Engineering",
                     "Kasturba Institute Of Technology",
                     "Meerabai Institute Of Technology",
                     "Chhotu Ram Rural Institute Of Technology"];
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

    var gurunanak = ["Polymer Engineering"," Chemical Engineering", "Electrical Engineering",
                        "Electronics Communicataion & Engineering", "Mechanical Engineering",
                       "Computer Science & Engineering"];
    var ambedkar =   ["Electrical Engineering","Information Technology",
                      "Digital Electronics","Medical Electronics","Bachelor in Computer Application",
                      "Bachelor of Vocational","Computer Science & Engineering"];
    var aryabhatt = ["Electrical Engineering", "Mechanical Engineering", "Mechanical Maintainence & Engineering",
                      "Architecht Assistantship","Garment Fabrication & Technology", "Bachelor of Vocational"];
    var pusa = ["Electrical Engineering", "Electronics Communicataion & Engineering", "Mechanical Engineering",
                "Civil Engineering", "Civil Engineering(spl. In Construction)", "Automobile Engineering",
                "Printing Technology"];
    var rajokri = ["Computer Science Engineering", "Information Technology"];
    var integrated = ["Electrical Engineering", "Electrical Communicataion & Engineering", "Mechanical Engineering",
                      "Civil Engineering", "Information Technology"];
    var gbpant = ["Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Automobile Engineering",
                  "Production Engineering"];
    var gtbit = ["Electrical Engineering", "Electronics Communicataion & Engineering", "Computer Science Engineering"];
    var dite = ["Mechanical Engineering", "Tools & Die Engineering"];
    var kasturba = ["Computer Science & Engineering", "Civil Engineering", "Digital Electronics", "Medical Electronics",
                     "Fashion Designing"];
    var meerabai = ["Electronics Communicataion & Engineering", "Architecht Assistantship"];
    var chhotu = ["Electrical Engineering", "Electronics Communicataion & Engineering", "Mechanical Engineering",
                  "Civil Engineering", "Architecht Assistantship", "Information Technology", "Digital Electronics"];
    var igdtu = ["Polymer Engineering","Chemical Engineering","Electrical Engineering","Electronics Communicataion & Engineering",
                "Mechanical Engineering","Mechanical Maintainence & Engineering","Computer Science & Engineering","Civil Engineering",
                "Civil Engineering(spl. In Construction)","Architecht Assistantship","Information Technology","Digital Electronics",
                "Medical Electronics","Bachelor  in Computer Application","Bachelor of Vocational","Garment Fabrication & Technology",
                "Automobile Engineering","Printing Technology","Production Engineering","Tool And Die Making","Fashion Designing",
                "Applied Chemistry","Applied Mathematics","Applied Physics","Biotechnology	design","Instrumentation And Control	Management",
                "Applied Science","Electrical Electronics & Engineering","Nano Technology","Food Technology","Aero Space"];

    var colleges = document.getElementById("2");
    var streams = document.getElementById("3");
    var selected_stream = colleges.options[colleges.selectedIndex].value;
    if (selected_stream == "Ambedkar Institute Of Technology") {
      for (var i = 0; i < ambedkar.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = ambedkar[i];
        opt1.value = ambedkar[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Guru Nanak Dev Institute Of Technology") {
      for (var i = 0; i < gurunanak.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = gurunanak[i];
        opt1.value = gurunanak[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Aryabhatt Institute Of Technology") {
      for (var i = 0; i < aryabhatt.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = aryabhatt[i];
        opt1.value = aryabhatt[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Pusa Institute Of Technology") {
        for (var i = 0; i < pusa.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = pusa[i];
        opt1.value = pusa[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Rajokri Institute Of Technology") {
        for (var i = 0; i < rajokri.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = rajokri[i];
        opt1.value = rajokri[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Integrated Institute of Technology") {
        for (var i = 0; i < integrated.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = integrated[i];
        opt1.value = integrated[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Govind Ballabh Pant Institute of Technology") {
        for (var i = 0; i < gbpant.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = gbpant[i];
        opt1.value = gbpant[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Guru Teg Bahadur Institute Of Technology") {
        for (var i = 0; i < gtbit.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = gtbit[i];
        opt1.value = gtbit[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Delhi Institute Of Tool Engineering") {
        for (var i = 0; i < dite.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = dite[i];
        opt1.value = dite[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Kasturba Institute Of Technology") {
        for (var i = 0; i < kasturba.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = kasturba[i];
        opt1.value = kasturba[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Meerabai Institute Of Technology") {
        for (var i = 0; i < meerabai.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = meerabai[i];
        opt1.value = meerabai[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream == "Chhotu Ram Rural Institute Of Technology") {
        for (var i = 0; i < chhotu.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = chhotu[i];
        opt1.value = chhotu[i];
        streams.appendChild(opt1);
      }
    }
    else if (selected_stream) {
        for (var i = 0; i < igdtu.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = igdtu[i];
        opt1.value = igdtu[i];
        streams.appendChild(opt1);
      }
    }

    else
      var t = 0;
  }

  function thirdupdate() {

    var shift = ["Morning","Evening"];

    var streams = document.getElementById("3");
    var shifts = document.getElementById("4");
    var selected_shift = streams.options[streams.selectedIndex].value;
    if (selected_shift) {
      for (var i = 0; i < shift.length; i++) {
        var opt1 = document.createElement('option');
        opt1.innerHTML = shift[i];
        opt1.value = shift[i];
        shifts.appendChild(opt1);
      }
    } else
      var t = 0;
  }
