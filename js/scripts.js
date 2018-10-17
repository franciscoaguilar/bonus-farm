$(document).ready(function(){
  // var numberOfPPl = 19;
  // var numberOfPPl = $('#number-of-ppl').val();

  //var bins = 88;
  var bins = parseInt($('#bins').val());

  var hoursWorked = parseInt($('#hours').val());
  //var hoursWorked = 7;

  var minBins = parseInt($('minBins').val();
  //var minBins = .480;

  var binBonusRate = parseInt($('#binBonusRate').val());
  //var binBonusRate = 10;





  $('#button').on('click', function(e){
    var numberOfPPl = parseInt($('#number-of-ppl').val());
    e.preventDefault();
    console.log(numberOfPPl);
    let binsPerPerson = bins / numberOfPPl;
    console.log(binsPerPerson);
    let employeeBinsPerhour= binsPerPerson / hoursWorked;
    console.log(employeeBinsPerhour);
    let extraBins = employeeBinsPerhour - minBins;
    let extrabinsDay = extraBins * hoursWorked;
    let numberOfBinsBonus = extrabinsDay * numberOfPPl;
    let totalCrewBonus = numberOfBinsBonus * binBonusRate;
    console.log(totalCrewBonus);
    let crew = document.getElementById('crew-total');
    crew.innerHTML = totalCrewBonus;
    alert('hey');
  })
})
