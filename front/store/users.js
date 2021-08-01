export const state = () => ({
  me: null,
  followerList:[],
  followingList:[],
})

export const mutations = {
  SETME(state,payload){
    state.me = payload
  },
  editUserNickName(state,payload){
    state.me.nickName = payload.nickName
  }
}

export const actions = {
  signUp({commit},payload){
    // 서버에 회원가입 요청을 보내는 부분
    // 응답을 받은 후, me 부분에 회원 정보를 넣어줄 것이다. -> commit('SETME',payload)
    commit('SETME',payload)
  },
  login({commit},payload){
    commit('SETME',payload)
  },
  logOut({commit}){
    commit('SETME',null)
  },
  editUserNickName({commit},payload){
    commit('editUserNickName',payload)
  }
}