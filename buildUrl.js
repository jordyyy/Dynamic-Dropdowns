// The buildUrl function creates the query string on the values of the IDs in the HTML below

function buildUrl() {
  var url = "http://www.darspoilers.com/";  // Change this line to your home page URL
  var make = document.querySelector('#makeSel').value;
  var model = document.querySelector('#modelSel').value;
  var year = document.querySelector('#yearSel').value;
  var qs = encodeURIComponent(make + ' ' + model + ' ' + year);
  if (qs.length > 0) {
    url = url + "search?q=" + qs;
  }
  return url;
}
