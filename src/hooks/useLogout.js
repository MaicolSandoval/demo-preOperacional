import { useCallback, useState } from "react";

const res = { data: null, loading: false, error: null }

export const useLogout = (params) => {
  res.loading = true;
  return () => {
    try {
      return callAPI(params).then(function (data) {
        res.data = data
        return (res);
      })

    } catch (error) {
      res.error = error.message.toString()
    }
    finally {
      res.loading = false;
    }
  }
}

function callAPI(params) {
  const headersA = {
    // "Accept": "application/json, text/javascript",
    // // "Accept-Encoding": "gzip, deflate, br",
    // // "Content-type": "application/json; charset=UTF-8",
    // "Sec-Fetch-Dest": "empty",
    // "Sec-Fetch-Mode": "cors",
    // "Sec-Fetch-Site": "same-origin",
    // 'Authorization': null,
    // 'Content-Type': "application/x-www-form-urlencoded",
    // "Access-Control-Allow-Credentials": "*",
    // "Access-Control-Allow-Origin": "*"
    Accept: 'application/json, text/javascript',
    'Authorization': params.authorization || null,
     'Content-Type': "application/json, text/javascript",
    "Access-Control-Allow-Credentials": "*",
    "Access-Control-Allow-Origin": "*"

  }
  const fetchParamsA = {
    // mode: "cors",
    method: "POST", // 'GET', 'PUT', 'DELETE', etc.
    headers: new Headers(headersA),
    cache: 'no-cache'
  }
  if (params.method === "POST") {
    fetchParamsA.body = JSON.stringify(params.dataParams)
  }
  console.log(fetchParamsA)
  return fetch((params.url || ""), fetchParamsA).then(function (res) {    
    console.log(res)
    if (!res.ok) { throw new Error("Error al Consumir el API") }
    return res.json();
  }).then(function (res1) {    
    return res1;
  }).catch(function (error) {    
    res.error = error.message.toString()
    return

  })
}

