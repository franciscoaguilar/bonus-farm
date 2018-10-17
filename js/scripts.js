$(document).ready(function() {



  $('#button').on('click', function(e){
    e.preventDefault();
    var numberOfPPl = parseFloat($('#number-of-ppl').val());
    var bins = parseFloat($('#bins').val());
    var hoursWorked = parseFloat($('#hours').val());
    var minBins = parseFloat($('#minBins').val());
    var binBonusRate = parseFloat($('#binBonusRate').val());
    var crewBossBonusRate = parseFloat($('#crewBossBonusRate').val());

    let binsPerPerson = bins / numberOfPPl;
    let employeeBinsPerhour= binsPerPerson / hoursWorked;
    let extraBins = employeeBinsPerhour - minBins;
    let extrabinsDay = extraBins * hoursWorked;
    let numberOfBinsBonus = extrabinsDay * numberOfPPl;
    let crewBonusTotal = numberOfBinsBonus * binBonusRate;
    let employeeTotalBonus = crewBonusTotal / numberOfPPl;
    console.log(crewBossBonusRate);
    let crewBossBonus = numberOfBinsBonus * crewBossBonusRate;
    $('#crewBonusTotal').html('<span> Crew Bonus Total: ' + crewBonusTotal + '</span>')
    $('#employeeTotalBonus').html('<span> Employee Total Bonus: ' + employeeTotalBonus + '</span');
    $('#crewBossBonus').html('<span> Crew Boss Bonus: ' + crewBossBonus + '</span>');
    alert('hey');
  });
});
