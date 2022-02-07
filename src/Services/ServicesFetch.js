import { RouteBase } from "./UrlServices"

export async function PostRoutPublic(url, form) {
  const data = JSON.stringify({
    ...form
  })

  // elviamos el formulario con fetch por el metodo post
  const response = await fetch(`${RouteBase}/${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  })
  //StatusCode(response);
  return await response.json()
}
export async function GetRoute(url){

  const response = await fetch(`${RouteBase}/${url}`,
      {
          method: 'GET',
          mode: 'cors',
          headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }
  )
 // StatusCode(response);
  return await response.json();
}

export default {
  PostRoutPublic,
  GetRoute
}