import apiManager from "./apiManager.js"
import placesDomMan from "./places/placesDomManager.js"
import formManager from "./places/placesForm.js"
// //Test api call by getting all places
// apiManager.allDataByKey("places").then(placesArray => {
//     console.table(placesArray)
// });

// //fetches all interests
// apiManager.allDataByKey("interests").then(interestsArray => {
//     console.table(interestsArray)
// });

// //fetches a single key from the api by the id of the item in the array
// apiManager.dataById("interests", "1").then(interestsData => {
//     console.log(interestsData)
// });

formManager.addPlaceForm();
placesDomMan.listAllPOI();
placesDomMan.childInterestsContainer();