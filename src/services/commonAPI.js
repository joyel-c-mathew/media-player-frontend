import axios from "axios"; //1st


export const commonAPI = async (httpmethod,url,reqbody)=> { //4t stp export


    let reqConfig={   //2nd

        method:httpmethod,
        url,
        data:reqbody,

        Headers:{

            "Content-Type":"application/json"
        }

        }

        return await axios(reqConfig).then((result)=>{ //solve akkith kond then //3rd stp axios thott //6th stp return
            return result

        }).catch((error)=>{ // allengil catch
            return error


        })

    }
