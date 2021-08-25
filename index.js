//
// Initialize Tableau Javascript API Embed
//
var viz, sheet, table;

function initViz() {
    var containerDiv = document.getElementById("basicEmbed");
    var url = "https://public.tableau.com/views/StarbucksCustomerSurveyDashboard/CustomerSurvey";
    var options = {
    width: "1240px",
    height: "640px",
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      document.getElementById('getData').disabled = false; // Enable our button
    }
  };
    
  viz = new tableau.Viz(containerDiv, url, options);
}


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
    viz.showExportPDFDialog();
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