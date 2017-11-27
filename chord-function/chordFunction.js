// Can be replaced by any symbols (such as the notes themselves)
var tonics = ["i", "ii", "iii", "iv", "v", "vi", "vii"];
var tonicColor = "#eee";
var subColor = "#77bfff"
var dominantColor = "#ff636b"
var domDimColor = "#ad5def"
var subDimColor = "#42f4b9"

function resetNotes(notes) {
  for (var i = 0; i < notes.length; i++) {
    notes[i] = notes[i].toLowerCase();
  }
}

function majorKey(notes) {
  resetNotes(notes);
  notes[0] = notes[0].toUpperCase();
  notes[3] = notes[3].toUpperCase();
  notes[4] = notes[4].toUpperCase();
}

function minorKey(notes) {
  resetNotes(notes);
  notes[1] = notes[1].toUpperCase();
  notes[2] = notes[2].toUpperCase();
  notes[5] = notes[5].toUpperCase();
  notes[6] = notes[6].toUpperCase();
}

function printStrings() {
  $("string").empty();
  for (var i = 0; i < tonics.length; i++) {
    var fifth = (i + 4) % tonics.length;
    var fourth = (i + 3) % tonics.length;
    $("#above").append("<fret>" + tonics[fifth] + "</fret>");
    $("#main").append("<fret>" + tonics[i] + "</fret");
    $("#below").append("<fret>" + tonics[fourth] + "</fret>");
  }
}

function printStringsMultiple(octaves) {
  $("string").empty();

  for (var o = 0; o < octaves; o++) {
    for (var i = 0; i < tonics.length; i++) {
      var fifth = (i + 4) % tonics.length;
      var fourth = (i + 3) % tonics.length;
      $("#above").append("<fret>" + tonics[fifth] + "</fret>");
      $("#main").append("<fret>" + tonics[i] + "</fret");
      $("#below").append("<fret>" + tonics[fourth] + "</fret>");
    }
  }
}

function chordFunctionMajor() {
  // $("fret:contains('i')").css("color", "yellow");
  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "i";
    }).css("color", tonicColor);

  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "iii";
    }).css("color", tonicColor);

  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "vi";
    }).css("color", tonicColor);

  //Subdominant
  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "iv";
    }).css("color", subColor);

  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "ii";
    }).css("color", subColor);

  //Dominant
  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "v";
    }).css("color", dominantColor);

  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "vii";
    }).css("color", dominantColor);

}

function chordFunctionMinor() {
  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "i";
    }).css("color", tonicColor);

  $("fret").filter(function() {
    return $(this).text().toLowerCase() === "iii";
  }).css("color", tonicColor);

  //Subdominant
  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "iv";
    }).css("color", subColor);

  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "vi";
    }).css("color", subColor);

//Subdominant diminished
$("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "ii";
    }).css("color", subColor);

  //Dominant
  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "v";
    }).css("color", dominantColor);

  $("fret")
    .filter(function() {
      return $(this).text().toLowerCase() === "vii";
    }).css("color", dominantColor);
}
