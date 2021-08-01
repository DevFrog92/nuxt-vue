export const state = () => ({
  mainPosts:[]
})

export const mutations = {
  addMainPosts(state,payload){
    state.mainPosts.unshift(payload);
  },
  removeMainPosts(state,payload){
    const index = state.mainPosts.findIndex( v => v.id === payload.id)
    state.mainPosts.splice(index,1);
  },
  addComment(state,payload){
    const index = state.mainPosts.findIndex( v=> v.id === payload.postId)
    state.mainPosts[index].Comments.unshift(payload)
  }
}

export const actions = {
  add({commit},payload){
    commit('addMainPosts',payload)
    // commit('addMainPosts',payload,{root : true}) root는 index.js 의 mutations에 접근하게 된다.
  },
  remove({commit},payload){
    commit('removeMainPosts',payload)
  },
  addComment({commit},payload){
    commit('addComment',payload)
  }
}