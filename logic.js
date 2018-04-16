$(document).ready(function(){
var config = {
    apiKey: "AIzaSyB0YLafTTO9umAdukMdeT0T9NKO6g-BoCw",
    authDomain: "my-awesome-project-205d2.firebaseapp.com",
    databaseURL: "https://my-awesome-project-205d2.firebaseio.com",
    projectId: "my-awesome-project-205d2",
    storageBucket: "my-awesome-project-205d2.appspot.com",
    messagingSenderId: "30286152114"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    var trName = $("#train-name").val().trim();
    var trDestination = $("#destination-input").val().trim();
    var trFirstTime = moment($("#train-time").val().trim(), "DD/MM/YY").format("X");
    var trFrequency = $("#train-frequency").val().trim();


  var newTrain = {
    name: trName,
    destination: trDestination,
    time: trFirstTime,
    frequency: trFrequency
  };

  
  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);
    
    
  })
  database.ref().on("child_added", function(snap) {
    // console.log(snap.val());
    var data=snap.val();
    var newRow, numTd, artistTd, titleTd;
    // for (var i in data ){
    //   console.log(data[i]);
      newRow= $('<tr>')
			nameTd = $('<td>');
			destinationTd = $('<td>');
      frequencyTd = $('<td>');
      timeTd = $('<td>');

      // nameTd.text(data[i].name)
      // destinationTd.text(data[i].destination)
      // frequencyTd.text(data[i].frequency)
      // timeTd.text(data[i].time)

      nameTd.text(snap.val().name)
      destinationTd.text(snap.val().destination)
      frequencyTd.text(snap.val().frequency)
      timeTd.text(snap.val().time)

      newRow.append(nameTd).append(destinationTd).append(frequencyTd).append(timeTd);
      $('#tbody').append(newRow)
    })
  })
  

    
//     })
