const printDiv = () => {
   var divContents = document.getElementById('printable-content').innerHTML
   var a = window.open('', '')
   a.document.write('<html>')
   a.document.write('<body >')
   a.document.write(divContents)
   a.document.write('</body></html>')
   a.print()
   a.close()
}

const printBtn = document.getElementById('printBtn')

printBtn.addEventListener('click', () => {
   printDiv()
})
