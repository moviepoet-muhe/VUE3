<template>
  <div>
    <!-- 代办事项容器 -->
     <div class="todo-container">
      <!-- 标题 -->
      <h1>待办事项</h1>
      <!-- 输入框和添加按钮 -->
      <div class="input-container">
        <!-- 输入框，使用v-model双向绑定newTodo，支持回车键添加 -->
        <input v-model.trim="newTodo" placeholder="请输入任务" @keyup.enter="addTodo">
        <!-- 添加按钮，点击触发addTodo方法 -->
        <button @click="addTodo">添加任务</button>
      </div>
      <!-- 待办事项列表 -->
      <ul>
        <!-- 使用v-for循环渲染todos数组，每个任务项包含任务内容和删除按钮 -->
        <li v-for="(todo, index) in todos" :key="index">
          <span>{{ todo }}</span>
          <!-- 删除按钮，点击触发removeTodo方法并传入当前索引 -->
          <button @click="removeTodo(index)">删除</button>
        </li>
      </ul>
      <!-- 代办事项合计 -->
       <div class="total"> 
         <!-- 显示当前任务总数 -->
         <span>合计: {{ todos.length }}</span>
         <!-- 清空按钮，点击触发clearTodos方法 -->
         <button @click="clearTodos">清空任务</button>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '', // 存储新任务输入框的内容
      todos: []    // 存储所有待办事项的数组
    }
  },
  methods: {
    // 添加新任务的方法
    addTodo() {
      if (this.newTodo) {
        this.todos.push(this.newTodo);
        this.newTodo = ''; // 添加后清空输入框
      }else {
      alert('任务内容不能为空！'); // 当输入为空时弹出警告
    }
    },
    // 删除指定任务的方法
    removeTodo(index) {
      this.todos.splice(index, 1); // 根据索引删除任务
    },
    // 清空所有任务的方法
    clearTodos() {
      this.todos = []; // 将todos数组重置为空
    }
  }
}
</script>

<style>
.todo-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 10px;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}
</style>