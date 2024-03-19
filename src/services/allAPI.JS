// api for upload video

import { Await } from "react-router-dom"
import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"

 export const uploadVideoApi = async(reqBody)=>{  //1st stp const thott then asyc kodukka
    return await commonAPI('POST',`${serverURL}/videos`,reqBody) //2nd stp common api then await kodkka then post.... odukka 
 }
    // then  export
    // last go conrol to common api


    // api to get upoaded video
    export const getUploadedVideoApi = async()=>{ // then nammal ege cheythy
       return await commonAPI('GET',`${serverURL}/videos`,"") // then common api... then return await then mele export
       //then go to view and create const get vieos
    }



    //api to delete a particular video

    export const deleteAvideo = async(id)=>{ // fst const thoot sync varre ezhytha ,then addiyil id koduthu so mellem kodukka 
       return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{}) // delete and others is hhtp req ,server url,then id 
    }
// api to ad video in to history

export const AddToHistory = async(reqBody)=>{ // reqbody is argument video eddan aiit
  return await commonAPI('POST',`${serverURL}/history`,reqBody) // backend il history k oru array vekanam
}

// api to create get video from history

export const getAllvideoHistory = async()=>{ // argument venda ()
   return await commonAPI(`GET`,`${serverURL}/history`,"")
}
//api to delete watch history
export const deleteWatchHistory=async(id)=>{
 return  await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add a category
export const addCategoryAPI= async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}/category`,reqBody)
}
// api to get  categoery
export const getCategoryApi=async()=>{ // no argument for get api
   return await commonAPI ('GET',`${serverURL}/category`,"") // body empty kodukanam
}
// api to dlete category
export const deleteCategoryApi= async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})

}

//api to get a single video from vidos
export const getAVideoApi = async(id)=>{
        return await commonAPI('GET',`${serverURL}/videos/${id}`,"") 
}

// api to update the cattegory, put req is used to update,we are adding data.ithil id kodukanam,reqbody to store,and 
//it stored in category
  export const updateCategory = async(id,reqbody)=>{
   return await commonAPI('PUT',`${serverURL}/category/${id}`,reqbody)
}