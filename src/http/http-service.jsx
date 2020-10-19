import {attachToken} from './attachToken';

export const makePostRequest = async (
    url,
    attachToken = false,
    params = {}
  ) => {
    let headers = {
      "Accept" : "application/json",
      "Content-Type" : "application/json",
    };
    if(attachToken){
        try{
            const token=await attachToken();
            if(token){
                headers["Authorization"]="Bearer"+token;
            }
        }catch(err){
            console.log(err);
        }
    }
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: "POST",
          headers: headers,
          body:JSON.stringify(params)
        })
          .then(
              res => res.json(),
              err=>reject(err),
              )
          .then(jsonResponse => {
              console.log("Res: ",jsonResponse)
            resolve(jsonResponse)
          })
          .catch(e => {
            console.log("XHR GET Error: ", e);
            reject(e);
          });
      } catch (e) {
        console.log(e);
        reject();
      }
    });
};