function cariBuku(){
  let input = document.getElementById("search-book").value.toLowerCase();
  let rows = document.querySelectorAll("#table tr")
  
  for (let i = 1;i < rows.length;i++) {
    let judul = rows[i].cells[1].innerText.toLowerCase();
    rows[i].style.display = judul.includes(input) ? "":"none";
  }
}
