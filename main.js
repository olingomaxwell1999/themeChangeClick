function chageColor(event) {
 //reset and remove active class first
 document.querySelectorAll('span.active').forEach(function (item) {
  item.classList.remove('active')
 })

 //add active class to selected
 event.target.classList.add('active')
}