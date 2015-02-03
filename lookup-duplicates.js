var selector = ".session h3";
var elements = document.querySelectorAll(selector);

var names = [];
var duplicateNames = [];
for(i=0; i < elements.length; i++) {
  var currentName = elements[i].textContent.trim();
  if(currentName != "") {
    if(names.indexOf(currentName) > -1) {
      duplicateNames.push(currentName);
    }
    names.push(currentName);
  }
}

if(duplicateNames.length > 0) {
  var returnText = "";
  returnText += duplicateNames.length + " duplicate names found in " + names.length + " names searched:<br/>";
  for(i=0; i < duplicateNames.length; i++) {
    returnText += duplicateNames[i] + "<br/>";
  }
  returnText;
}else{
  names.length + " names searched and no duplicates found.";
}
