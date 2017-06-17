/*function doGet(){
  var e =HtmlService.createTemplateFromFile('Index')
  var ss = SpreadsheetApp.openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk');
    e.datapb = ss.getSheetByName('poorBoy').getDataRange().getValues();
    e.datavd = ss.getSheetByName('vapeDroid').getDataRange().getValues();
    e.dataef = ss.getSheetByName('elfin').getDataRange().getValues();
    e.datama = ss.getSheetByName('malvinas').getDataRange().getValues();
    e.dataat = ss.getSheetByName('atomizers').getDataRange().getValues();
    e.datasl = ss.getSheetByName('sClass').getDataRange().getValues();
    e.dataab = ss.getSheetByName('angryBeaver').getDataRange().getValues();
  return e.evaluate();
};
*/
function doGet(){
  var ss = SpreadsheetApp.openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk');
    var sheets = ss.getSheets();
    var data = [];
    for (i in sheets){
    var c = sheets[i];
    var name = c.getName();
    var cData = c.getDataRange().getValues();
      data.push([name,cData]);
  }
  data = JSON.stringify(data);
  var html = HtmlService.createTemplateFromFile('index.html');
  html.data = data;
  html = html.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)  
  .setWidth(600)
  return(html);
}

function getWhatsHot(){
  return SpreadsheetApp
 .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
 .getSheetByName('whatsHot')
 .getdataRage()
 .getValues();
 Logger.log(data);
    }; 
    
function getHardwareHeaders(){
  return SpreadsheetApp
 .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
 .getRangeByName('hardwareHeaders')
 .getValues();
 Logger.log(data);
};

function getPoorBoy(){ 
   return SpreadsheetApp
 .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
 .getSheetByName('poorBoy')
 .getRange(1, 1, 4, 13)
 .getValues();
 };

function getVapeDroidData(){
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("vaprDroid")
  .getValues();
};


function getPoorBoyData(){ 
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("poorBoy")
  .getValues();
};

function getElfinData(){ 
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("elfin")
  .getValues();
};

function getMalData(){ 
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("malvinas")
  .getValues();
};

function getAttyData(){ 
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("atomizers")
  .getValues();
};

function getsClassData(get){ 
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("sClass")
  .getValues();
};


function getAngryBeavData(get){ 
  return SpreadsheetApp
  .openById('1Yi4txfn330tpoWmGTrPLycV3-zqmkKjHMtO59IHsnjk')
  .getRangeByName("angryBeaver")
  .getValues();
};

// setRowsData fills in one row of data per object defined in the objects Array.
// For every Column, it checks if data objects define a value for it.
// Arguments:
//   - sheet: the Sheet Object where the data will be written
//   - objects: an Array of Objects, each of which contains data for a row
//   - optHeadersRange: a Range of cells where the column headers are defined. This
//     defaults to the entire first row in sheet.
//   - optFirstDataRowIndex: index of the first row where data should be written. This
//     defaults to the row immediately below the headers.


function processForm(formObject) {
  var sheet = SpreadsheetApp
              .openById('1hXOSu8Ahv9c2zOrYfVgsGoJA_rL-N0fJSocLHHU5o3I')
              .getSheetByName("Orders")
  var optFirstDataRowIndex = sheet.getlastRow()+1; 
  var objects = formObject();
  var headersRange = sheet.getRange(1, 1, 1, sheet.getMaxColumns());
  var firstDataRowIndex = optFirstDataRowIndex;
  var headers = headersRange.getValues()[0];
  var data = []
  
  for (var i = 0; i < objects.length; ++i) {
    var values = []
    for (var j = 0; j < headers.length; ++j) {
      var header = headers[j];

      // If the header is non-empty and the object value is 0...
      if ((header.length > 0)&&(objects[i][header] === 0)&&(!(isNaN(parseInt(objects[i][header]))))) {
        values.push(0);
      }
      // If the header is empty or the object value is empty...
      else if ((!(header.length > 0)) || (objects[i][header]=='') || (!objects[i][header])) {
        values.push('');
      }
      else {
        values.push(objects[i][header]);
      }
    }
    data.push(values);
  }

  var destinationRange = sheet.getRange(firstDataRowIndex, headersRange.getColumnIndex(),
                                        objects.length, headers.length);

  destinationRange.setValues(data);
    Logger.log(data);
    
       }
 /* <i class="material-icons">opacity</i>
 <i class="material-icons">colorize</i>
 <i class="material-icons">whatshot</i>
 <i class="material-icons">memory</i>
 <i class="material-icons">device_hub</i>
 <i class="material-icons">build</i>
 <i class="material-icons">battery_full</i> */