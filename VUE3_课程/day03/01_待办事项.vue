<template>
    <div class="app-container">
      <div class="todo-list">
            <h3>待办事项</h3>
            <div class="input-group mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="请输入任务" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    v-model.trim="content"
                    @keyup.enter="addTask"
                >
                <div class="input-group-append">
                  <button class="btn" type="button" id="button-addon2" @click="addTask">添加任务</button>
                </div>
            </div>
            <h3 v-if="!todoList.length">现在还没有任何任务，赶紧去添加吧！</h3>
            <ul class="list-group" v-else>
                <li 
                    class="list-group-item d-flex justify-content-between align-items-center"
                    v-for="(item, index) in todoList"
                    :key="item"
                >
                 {{ item }}
                  <span class="badge badge-primary badge-pill" @click="deleteFn(index)">&times;</span>
                </li>
            </ul>
            <div class="task-bottom" v-if="todoList.length > 0">
                <span>合计：{{ todoList.length }}</span>
                <span @click="clearFn">清空任务</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'App',
   data(){
      return {
         content: '',
         todoList: ['王江去洗脚', '王旭喜欢学习', '陈辰是全栈']
      }   
   },
   methods: {
      addTask(){
         // 非空验证
         if(this.content === ''){
            alert('请输入内容，不能为空！')
            return
         }
         // 添加任务
         this.todoList.push(this.content)
         // 添加完成清空
         this.content = ''
      },
      deleteFn(index){
         this.todoList.splice(index, 1)
      },
      clearFn(){
         this.todoList = []
      }
   }
}
</script>

<style>
.todo-list{
   width: 500px;
   min-height: 200px;
   margin: 50px auto;
   font-size: 15px;
}
.todo-list h3{
   text-align: center;
   font-weight: normal;
   margin-bottom: 20px;
}
.todo-list button{
   background-color: #ca6259;
   color: #fff;
   outline: none;
}
.todo-list button:hover{
   color:#fff;
}
.todo-list .badge-primary{
   background-color: #ca6259;
   cursor: pointer;
}
.todo-list .task-bottom{
   height: 49px;
   border-radius: 3px;
   margin-top: 5px;
   border: 1px solid rgba(0, 0, 0, .125);
   padding: 0 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 13px;
}
.todo-list .task-bottom span:nth-child(2){
   cursor: pointer;
}
</style>