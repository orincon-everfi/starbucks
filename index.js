let viz = document.getElementById('tableauViz').appendChild(viz); 

console.log('Get viz from HTML instead of the other way around', viz);

//
// View Raw Data: Pretty Prints the raw JSON
//
function getUnderlyingData() {
  sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Meta");
  options = {
		maxRows: 20, // Only showing first 20 rows for this exercise
		ignoreAliases: true,
		ignoreSelection: true,
		includeAllColumns: true
	  };

	  sheet.getUnderlyingTablesAsync().then(tables => {
		return sheet.getUnderlyingTableDataAsync(tables[0].getTableId(), options).then(dataTable => {
    	          var tgt = document.getElementById("dataTarget");
                tgt.innerHTML = "<pre>" + JSON.stringify(dataTable.getData(), undefined, 2) + "</pre>";
               });
         });
     }


//
// Dashboard Download Options: PDF, CSV, XSLX, PNG
//
function exportToPDF() {
  console.log('PDF 1', viz) ;
  viz.showExportPDFDialog();
  console.log('PDF 2'); 
}

function exportToCSV() {
    viz.showExportCrossTabDialog();
}

function exportToExcel() {
    viz.exportCrossTabToExcel();
}

function exportImage() {
    viz.showExportImageDialog();
}

// function getsize() {
//   var h = viz.getWorkbook().getActiveSheet().getSize().maxSize.height;
//   return h
// }


function printVizSize() {
  var h = viz.getWorkbook().getActiveSheet().getSize();
  console.log('GET SIZE: ', h);
  return h
}