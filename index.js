
function myFunction() {
    let input = document.getElementById("myInput").value.toUpperCase();
    let table = document.getElementById("mytable");
    let tr = table.getElementsByTagName("tr");
    let found = false;  
  
    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      let ta = tr[i].getElementsByTagName("td")[1];
      let tb = tr[i].getElementsByTagName("td")[2];
      console.log(ta);
      console.log(tb);

      if (td || ta ||tb) {

        let name = td.textContent || td.innerText;
        let age = ta.textContent || ta.innerText;
        let country = tb.textContent || tb.innerText;

        if (name.toUpperCase().indexOf(input) > -1 || age.toUpperCase().indexOf(input) > -1 || country.toUpperCase().indexOf(input) > -1) {
          tr[i].style.display = "";  
          found = true;  
        } else {
          tr[i].style.display = "none";  
        }
      }
    }
  
    
    if (!found) {
      alert("Data Not Found");
    }
  }
  