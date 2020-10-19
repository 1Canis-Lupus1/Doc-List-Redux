import {makePostRequest} from './http-service'

export const docData = () => {
  return new Promise((resolve, reject) => {
      makePostRequest(
          //Error 404 Not Found
          "https://api-dev.askvaidya.in/admin/v1/doctors",
          true,
          {pageNumber: 1,pageSize: 10, filters:{}}
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