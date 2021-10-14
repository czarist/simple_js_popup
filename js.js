// POP UP 

function showpopup(triangulo) {
    // insert text function
    function insertText(div, text) {
      div.innerHTML = "";
      let insertText = document.createTextNode(text);
      return div.appendChild(insertText);
    }
  
    // variables content
    let data_value = triangulo.querySelector("input[name='data']").value;
    let cidade_value = triangulo.querySelector("input[name='cidade']").value;
    let titulo_value = triangulo.querySelector("input[name='titulo']").value;
    let texto_value = triangulo.querySelector("input[name='texto']").value;
    let onde_value = triangulo.querySelector("input[name='onde']").value;
    let quando_value = triangulo.querySelector("input[name='quando']").value;
    let horas_value = triangulo.querySelector("input[name='horas']").value;
    let cidade_popup = document.getElementById("cidade-popup");
    let data_popup = document.getElementById("data-popup");
    let titulo_popup = document.getElementById("titulo-popup");
    let texto_popup = document.getElementById("texto-popup");
    let onde_popup = document.getElementById("onde-popup");
    let horas_popup = document.getElementById("horas-popup");
    let quando_popup = document.getElementById("quando-popup");
    let triangulo_popup = document.getElementById("triangulo-popup");
    let classes_tringulo = triangulo.classList;
  
    // insert content
    insertText(cidade_popup, cidade_value);
    insertText(data_popup, data_value);
    insertText(titulo_popup, titulo_value);
    insertText(texto_popup, texto_value);
    insertText(onde_popup, onde_value);
    insertText(quando_popup, quando_value);
    insertText(horas_popup, horas_value);
    triangulo_popup.className = "";
    triangulo_popup.classList.add(classes_tringulo[0]);
    triangulo_popup.classList.add(classes_tringulo[1]);
    triangulo_popup.classList.add("rotate-135");
  
    // show popup
    document.getElementById("body").classList.add("overflow-hidden");
    document.getElementById("outside-popup").classList.add("d-flex");
    document.getElementById("outside-popup").classList.remove("d-none");
  }
  
  function closepopup() {
    // close popup
    document.getElementById("body").classList.remove("overflow-hidden");
    document.getElementById("outside-popup").classList.remove("d-flex");
    document.getElementById("outside-popup").classList.add("d-none");
  }
  
  // ends POPUP
  