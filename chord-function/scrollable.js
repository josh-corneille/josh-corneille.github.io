majorKey(tonics);
printStringsMultiple(3);
chordFunctionMajor();

$("select").on("change", function() {
  var selection = $("select").val();

  if (selection == "Major") {
    majorKey(tonics);
    printStringsMultiple(3);
    chordFunctionMajor();
  } else if (selection == "Minor") {
    minorKey(tonics);
    printStringsMultiple(3);
    chordFunctionMinor();
  }
});
