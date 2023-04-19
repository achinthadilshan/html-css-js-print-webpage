const printDiv = () => {
   const divContents = document.getElementById('printDiv').innerHTML
   const printWindow = window.open()
   printWindow.document.write('<html><head>')
   printWindow.document.write('<title>Print View</title>')
   printWindow.document.write('</head><body>')
   printWindow.document.write(divContents)
   printWindow.document.write('</body></html>')
   printWindow.print()
   printWindow.close()
}

const printBtn = document.getElementById('printBtn')

printBtn.addEventListener('click', () => {
   printDiv()
})
