var _ = require('lodash');
var pdfFiller =  require('pdffiller-stream');
var sourcePDF = "C:/Users/joseph.fowler/Desktop/Military/NAVPERS_1616-26_Rev11-11.pdf";
module.exports = {
  makePDF: function (req, res) {
    try{
      const destinationPDF = "C:\Users\fowle\Desktop\NavFitProject"; // local download location
      const data = {
        "Name_Last_First_MI_Suffix" : req.param('lastName') +  req.param('firstName') + req.param('middleInitial') + req.param('suffix'),
        "GradeRate" : req.param('rate'),
        "Desig" : req.param('desig'),
        "SSN" : req.param('ssn'),
        "Periodic" : req.param('reportOccasion'),
        "UIC" : req.param('uic'),
        "ShipStation" : req.param('station'),
        "Promotion_Status" : req.param('promotionStatus'),
        "Date_Reported" : req.param('reportDate'),
        "NOB" : req.param('nob'),
        "Report_Regular" : req.param('reportType'),
        "Physical_Readiness" : req.param('physical'),
        "Billet" : req.param('billet')
      };

      pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err) {
        if (err) throw err;
        console.log("In callback (we're done).");
    });
      return res.ok();
    }catch(e){
      console.log(e);
      return res.negotiate(e);
    }
  }
}

