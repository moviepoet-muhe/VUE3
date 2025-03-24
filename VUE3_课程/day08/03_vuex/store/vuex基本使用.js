import { createStore } from "vuex"

const store = createStore({
    // 开启严格模式：在外界进行直接修改数据那么控制台会报错
    strict: true, 
    // state --- data 放的就是数据
    state(){     
        return {
            num: 0,
            name: '王旭',
            list: [10, 20, 30]
        }
    },
    // mutations 设计出来是专门用来写同步代码的地方，它里面不能写异步代码
    mutations: {
        // 在组件里面使用的 commit('方法名称', '传递过来的参数') 方法，和 这里的方法是对应关系
        // state 表示的就是 state 返回的对象数据，payload 表示的就是 commit() 方法传递过来的数据
        modifyNum(state, payload){
            // console.log(state.num, payload)
            // state.num = payload
            state.num += payload
        },
        actionsFn(state, payload){
            state.num += payload
        }
    },
    // actions 设计出来专门用来写异步代码的地方
    // 注意点：actions 里面的异步方法，最终还是得提交到 mutations 里面使用
    actions: {
        modifyNum2({ commit }, payload){
            setTimeout(()=>{
                commit('actionsFn', payload)
            }, 2000)
        }
    },
    // getters 就是计算属性
    getters: {
        sum(state){
            return state.list.reduce((total, item)=>{
                return total += item
            }, 0)
        }
    }
})

export default store