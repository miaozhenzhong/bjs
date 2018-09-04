
import {Get} from '../common/request'
export const sendMessage = ({ commit }, payload) => {
    console.log(payload,"99999")
    commit('receiveMessage', "+++++++")
}

export const sendLoginMessage = ({ commit }, payload)=>{
    console.log(payload,"99999")
    commit('loginOut', "+++++++")
}

export const GetCommonData = ({commit},payload)=>{
    console.log("GetCommonData","99999")
    Get("api/iras/common/dictionary/query").then(function(res){
        console.log(res.data)
    })
    commit("commonData","9999")
}
