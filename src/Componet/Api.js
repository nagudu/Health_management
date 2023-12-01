



let apiURL = "http://localhost:34567";


const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  let token = localStorage.getItem("@@auth_token");
  fetch(apiURL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: token },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((response) => {
      if (response.status >= 400) {
        error(response);
        if (response.status === 401) {
      
          window.location.reload();
        }
      } else success(response);
    })
    .catch((err) => error(err));
};

const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  let token = localStorage.getItem("@@auth_token");
  fetch(apiURL + url, {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: token },
  })
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      if (err.status === 401) {
        
        window.location.reload();
      }
      error(err);
    });
  // alert(token);
};




export { _postApi, _fetchApi, apiURL,  };
