const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.addMessage = functions.https.onRequest(async (req, res) => {

  const original = req.query.text;
 
  const snapshot = await admin.database().ref('/messages').push({original: original});
 
  res.redirect(303, snapshot.ref.toString());
});




  // = firebase.firestore().
  exports.deleteCampos = functions.https.onRequest(async (req, res) => {

    const colid = req.query.colid; 
  
  
  var db = admin.firestore();
    db.collection("GreatDevs").doc(colid).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  
     /* // Grab the text parameter.
      const original = req.query.text;
      // Push the new message into the Realtime Database using the Firebase Admin SDK.
      const snapshot = await admin.database().ref('/messages').push({original: original});
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      res.redirect(303, snapshot.ref.toString());*/
    });

