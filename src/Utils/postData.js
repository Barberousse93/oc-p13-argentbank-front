export async function postData(
  methode = "",
  url = "",
  data = {},
  Authorization = ""
) {
  const options = {
    // Default options are marked with *
    method: methode, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: Authorization ? Authorization : "",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }

  let datas = ""

  await fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response)
      }
      return response.json()
    })
    .then((result) => {
      // console.log("Success")
      datas = result
    })
    .catch((error) => {
      datas = error
      if (typeof error.json === "function") {
        error
          .json()
          .then((jsonError) => {
            console.log("Json error from API")
            console.log("json error", jsonError)
          })
          .catch((genericError) => {
            console.log("Generic error from API")
            console.log("Generic error", genericError.statusText)
          })
      } else {
        console.log("Fetch error")
        console.log(error)
      }
      return datas
    })
  return datas
}
