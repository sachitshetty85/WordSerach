function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ed9tUqhHj1":
        Script1();
        break;
  }
}

function Script1()
{
  var myCode = function() {
	$(document).on("keydown", function(e) {
    if (e.keyCode == 9) {
        e.preventDefault();
        return false;
    }
	})
}
if (window.$ != null) { // If jQuery has already loaded, run myCode.

	myCode();

} else { // Else, load jQuery and then run myCode.

	var jQueryLoader = document.createElement("script");

	jQueryLoader.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js";
	

	jQueryLoader.onload = function() {

		jQueryLoader.onload = null;

		myCode();

	}

	document.head.appendChild(jQueryLoader);

}
}

