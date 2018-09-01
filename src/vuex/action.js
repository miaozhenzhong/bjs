
export const sendMessage = ({ commit }, payload) => {
    console.log(payload,"99999")
    commit('receiveMessage', "+++++++")
}

export const sendLoginMessage = ({ commit }, payload)=>{
    console.log(payload,"99999")
    commit('loginOut', "+++++++")
}
