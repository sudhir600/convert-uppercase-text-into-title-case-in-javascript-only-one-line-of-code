$('#yourTableId tbody td:not(".noUc")').each(function(e){ //put noUc class on those td where you dont want title-case
  var elm = $(this);  
  var ThisVal = elm.text(); 
  elm.text(changeToTitleCase(ThisVal))
  
})



//function for convert text into title case
function changeToTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

