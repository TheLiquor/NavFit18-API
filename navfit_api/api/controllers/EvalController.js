var _ = require('lodash');
var pdfFiller =  require('pdffiller-stream');
var sourcePDF = "C:/Users/joseph.fowler/Desktop/Military/NAVPERS_1616-26_Rev11-11.pdf";
module.exports = {
  makePDF: function (req, res) {
    try{
      const data = {
        "desig" : "John"
      };

      pdfFiller.fillForm( sourcePDF, data)
        .then((outputStream) => {
          console.log(outputStream);
          // use the outputStream here;
          // will be instance of stream.Readable
        }).catch((err) => {
        console.log(err);
      });
      return res.ok();
    }catch(e){
      console.log(e);
      return res.negotiate(e);
    }
  }
}
// module.exports = {
//
//
//   friendlyName: 'Make PDF',
//
//
//   description: 'Creates evaluation PDF.',
//
//
//   extendedDescription:
//     `Blah`,
//
//
//   exits: {
//
//     success: {
//       description: 'It worked'
//     },
//
//     redirect: {
//       description: 'The requesting user agent looks to be a web browser.',
//       extendedDescription: 'After logging out from a web browser, the user is redirected away.',
//       responseType: 'nothing'
//     }
//
//   },
//
//
//   fn: async function (inputs, exits) {
//     console.log(inputs);
//   }
//
//
// };
