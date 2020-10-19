export const makePostRequest = async (
    url,
    attachToken = false,
    params = {}
  ) => {
    let headers = {
      "Accept" : "application/json",
      "Content-Type" : "application/json",
      "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2U0MjA0ZmZkOTliMGRkMTNhNDNjMSIsIl9pZCI6IjVlY2U0MjA0ZmZkOTliMGRkMTNhNDNjMSIsImZ1bGxOYW1lIjoiQXNrIFZhaWR5YSIsImVtYWlsIjoiYWRtaW5AYXNrLXZhaWR5YS5jb20iLCJ1c2VyVHlwZSI6IkFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpYXQiOjE2MDI1MDMwNTcsImV4cCI6MTYwNTA5NTA1N30.dfpg0kxVmq64BRwrYs769z2MOmT4Jl9of55DSOIInSk"
    };
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
            //   console.log("Res: ",jsonResponse)
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