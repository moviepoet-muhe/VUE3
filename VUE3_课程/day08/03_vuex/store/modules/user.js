// 定义 用户 模块
const user = {
    // 命名空间 （ ts ）
    namespaced: true,
    // 开启严格模式
    strict: true,
    state(){     
        return {
            num: 0,
            name: '王旭',
            list: [10, 20, 30]
        }
    },
    // mutations 设计出来是专门用来写同步代码的地方，它里面不能写异步代码
    mutations: {
        modifyNum(state, payload){
            // console.log(state.num, payload)
            // state.num = payload
            state.num += payload
        },
        actionsFn(state, payload){
            state.num += payload
        }
    },
    actions: {
        modifyNum2({ commit }, payload){
            setTimeout(()=>{
                commit('actionsFn', payload)
            }, 2000)
        }
    },
    getters: {
        sum(state){
            return state.list.reduce((total, item)=>{
                return total += item
            }, 0)
        }
    }
}

export default user