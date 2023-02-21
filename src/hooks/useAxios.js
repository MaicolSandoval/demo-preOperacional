import axios from "axios";


export const useAxios = (paramsAxios) => {
    console.log('prueba')
    const res = { data: null, loading: false, error: null }
    const locationSrc = window.location.href.split("#")[0];
    // console.log(locationSrc)
    const uriEndPoint = locationSrc.split("localhost").length === 1 ? locationSrc.substring(0, locationSrc.length - 1).split("V3")[0] + "V3/" : locationSrc.split("V3")[0] + "V3/";
    const url = window.location.toString().split("?")[0].toUpperCase();
    var sourceModuleCall = paramsAxios.noModule ? "" : locationSrc.split("/V3/").length > 1 ? locationSrc.split("/V3/")[1].split("/")[0].toUpperCase() : url.split("/V3/")[1].split("/")[0].toUpperCase();
    res.loading = true;
    return () => {
        try {
            var headersA = {
                Accept: "application/json",
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                'Authorization':  paramsAxios.authorization|| null,
            };

            const parm = {
                url: uriEndPoint + sourceModuleCall + paramsAxios.url,
                mode: "cors",
                method: paramsAxios.method || "GET", // 'GET', 'PUT', 'DELETE', etc.
                headers: headersA,
                cache: "no-cache",
                //body: JSON.stringify(paramsAxios.dataParams),
                data: paramsAxios.dataParams || undefined
            }            
            return axios(parm)
                .then((response) => {
                    res.data = response.data
                    return res
                })
                .catch((response) => {
                    if (response.response.status == 300) {
                       // console.log("300")
                        res.data = response.response.data
                        return res
                    }
                    else {
                        res.error = response.message
                        return res;
                    }
                })

        } catch (error) {
            res.error = error.message.toString()
        }
        finally {
            res.loading = false;           
        }
    }
}

