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