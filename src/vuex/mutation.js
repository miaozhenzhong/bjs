import Vue from 'vue'

export default {
    receiveMessage (state, message) {
    // state.messages.id = message
        Vue.set(state.messages,"123", message)
            console.log(state,message)
    },
    loginOut(state,message){
            console.log(Vue)
    },
    commonData(state,message){
        state.commonData = message;
    },
    setUserInfor(state,message){
        
    }
}
