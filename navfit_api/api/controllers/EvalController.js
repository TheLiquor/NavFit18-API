var _ = require('lodash');

module.exports = {
  makePDF: function (req, res) {
    try{
      console.log(req.allParams());
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
