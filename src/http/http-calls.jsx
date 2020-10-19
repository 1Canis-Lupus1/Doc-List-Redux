import {makeGetRequest} from './http-service'

export const docData = () => {
  return new Promise((resolve, reject) => {
      makeGetRequest(
          //Error 404 Not Found
          "https://api-dev.askvaidya.in/admin/v1/doctors",
          true,
          null
      )
      .then(res => {
          resolve(res);
          console.log("In Calls:",res)
        })
        .catch(e => {
          console.log("API call error: ", e);
          reject(e);
        });
  });
};

// export const search = (input) => {
//   return new Promise((resolve, reject) => {
//     makeGetRequest(
//         "https://api.giphy.com/v1/gifs/search",
//         false,
//         {
//           "api_key" : "AupKJH29iQcqubiIMOhzdC9H6HVY1UsJ",
//           "q" : input
//         }
//     )
//     .then(res => {
//         resolve(res.data);
//       })
//       .catch(e => {
//         console.log("API call error: ", e);
//         reject(e);
//       });
//   });
// }