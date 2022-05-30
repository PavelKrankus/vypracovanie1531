var regexFindNum = /\d+/g;

// FN PRE ANALYZU ↓------------------------------------------------
function klikloSaTlacitko(event) {
  event.preventDefault();

  if (textA == null) {
    textA = [0];
  }

  let textAA = textA.value.split(" ");
  //----------------------------------------------------------------

  // VYHLADAVANIE CISIEL ↓ -----------------------------------------
  let cislaText = textA.value.match(regexFindNum);
  console.log(cislaText);
  document.getElementById("cislaText").value = cislaText;

  if (cislaText != null) {
    let cislaText1 = cislaText.toString().replaceAll(",", "").length;
    console.log(cislaText.toString().replaceAll(",", "").length);
    document.getElementById("cislaText").value = cislaText1;
  }

  // OBSAH INPUT POLA ↓---------------------------------------------
  console.log(textA.value);

  //DLZKA TEXTU ↓---------------------------------------------------
  let dlzka = textA.value.length;
  document.getElementById("dlzka").value = dlzka;
  console.log(textA.value.length);

  //DLZKA TEXTU BEZ MEDZIER ↓---------------------------------------
  let dlzkaBM = textA.value.replaceAll(" ", "").length;
  document.getElementById("dlzkaBM").value = dlzkaBM;
  console.log(textA.value.replaceAll(" ", "").length);

  // TEXT ROZDELENY MEDZERAMI ↓-------------------------------------
  console.log(textA.value.split(" "));

  // FN NA ZISTENIE NAJDLHSIEHO V TEXTE ↓---------------------------
  function longest_string(textAA) {
    var max = textAA[0].length;
    textAA.map((v) => (max = Math.max(max, v.length)));
    result = textAA.filter((v) => v.length == max);
    return result;
  }
  // OUTPUT NAJDLHSIEH OV TEXTE ↓-----------------------------------
  let nSlovo = longest_string(textAA);
  document.getElementById("nSlovo").value = nSlovo;
  console.log(longest_string(textAA));

  // DLZKA NAJDLHSIEHO V TEXTE ↓------------------------------------
  let dSlovo = longest_string(textAA);
  let indSlovo = dSlovo[0].length;
  document.getElementById("dSlovo").value = indSlovo;
  console.log(dSlovo[0].length);
}

//FN PRE VYHLADAVANIE ↓---------------------------------------------
function button2(event) {
  event.preventDefault();

  let textAAA = textA.value.split(" ");
  let searchRes = textAAA.includes(textSearch.value);
  if (searchRes == true) {
    searchRes = "nachadza sa";
  } else {
    searchRes = "nenachadza sa";
  }

  document.getElementById("searchRes").value = searchRes;

  console.log(textAAA.includes(textSearch.value));
}

// INIT PRE SIFRU ↓--------------------------------------------------
let textB = textA.value.split(" ");

// FN SIFROVANIE ↓---------------------------------------------------
function replaceCypher(event) {
  event.preventDefault();

  let pol = textA.value
    .replaceAll("o", "0")
    .replaceAll("O", "0")
    .replaceAll("I", "1")
    .replaceAll("i", "1")
    .replaceAll("E", "3")
    .replaceAll("e", "3")
    .replaceAll("A", "4")
    .replaceAll("a", "4")
    .replaceAll("S", "5")
    .replaceAll("s", "5")
    .replaceAll("B", "8")
    .replaceAll("b", "8");

  document.getElementById("cypherResult").value = pol;

  console.log(pol);
}
