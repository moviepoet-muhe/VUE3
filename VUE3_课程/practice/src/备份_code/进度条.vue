<template>
  <!-- 根容器 -->
  <div>
    <!-- 进度条容器 -->
    <div class="progress-container">
      <!-- 进度条项目，添加 ref 属性 -->
      <div ref="progressBarRef" class="progress-bar" @click="onBarClick">
        <!-- 填充进度条 -->
        <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        <!-- 拖拽按钮 -->
        <div class="progress-btn" @mousedown="onBtnMouseDown" :style="{ left: progress + '%' }"></div>
      </div>
      <!-- 进度条百分比显示 -->
      <span class="progress-text">{{ progress }}%</span>
    </div>
  </div>
</template>

<script>
/**
 * Vue 组件选项对象
 */
export default {
  /**
   * 定义组件的数据
   * @returns {Object} 包含进度和拖拽状态的对象
   */
  data() {

    return {
      // 进度条的当前进度，初始为 0
      progress: 0,
      // 是否正在拖拽的标志，初始为 false
      isDragging: false

    };
  },
  methods: {
    /**
     * 根据鼠标位置更新进度条的进度
     * @param {number} clientX 鼠标的 X 坐标
     */
    updateProgress(clientX) {
      // 使用 ref 获取进度条的 DOM 元素
      const progressBar = this.$refs.progressBarRef;
      // 获取进度条相对于其父元素的左偏移量
      let barLeft = progressBar.offsetLeft;
      // 获取进度条的宽度
      let barWidth = progressBar.offsetWidth;
      // 计算鼠标相对于进度条左边缘的偏移量
      let offsetX = clientX - barLeft;

      // 确保偏移量不超出进度条的范围
      if (offsetX < 0) {
        offsetX = 0;
      } else if (offsetX > barWidth) {
        offsetX = barWidth;
      }

      // 计算进度百分比并四舍五入
      this.progress = Math.round((offsetX / barWidth) * 100);
    },
    /**
     * 处理拖拽按钮的鼠标按下事件
     */
    onBtnMouseDown() {
      // 设置拖拽状态为 true
      this.isDragging = true;
    },
    /**
     * 处理鼠标移动事件
     * @param {MouseEvent} e 鼠标事件对象
     */
    onMouseMove(e) {
      // 仅在拖拽状态下更新进度
      if (this.isDragging) {
        this.updateProgress(e.clientX);
      }
    },
    /**
     * 处理鼠标松开事件
     */
    onMouseUp() {
      // 取消拖拽状态
      this.isDragging = false;
    },
    /**
     * 处理进度条的点击事件
     * @param {MouseEvent} e 鼠标事件对象
     */
    onBarClick(e) {
      // 根据点击位置更新进度
      this.updateProgress(e.clientX);
    }
  },
  /**
   * 组件挂载后执行的钩子函数
   */
  mounted() {
    // 为文档添加鼠标移动事件监听器
    document.addEventListener('mousemove', this.onMouseMove);
    // 为文档添加鼠标松开事件监听器
    document.addEventListener('mouseup', this.onMouseUp);
  },
  /**
   * 组件卸载前执行的钩子函数
   */
  beforeUnmount() {
    // 移除文档的鼠标移动事件监听器
    document.removeEventListener('mousemove', this.onMouseMove);
    // 移除文档的鼠标松开事件监听器
    document.removeEventListener('mouseup', this.onMouseUp);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 进度条容器 */
.progress-container {
  margin-top: 200px;
  margin-left: 500px;
  width: 300px;
  height: 50px;
  text-align: center;
  background-color: greenyellow;
}

/* 进度条 */
.progress-bar {
  margin: 0 auto;
  position: relative;
  width: 200px;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
  cursor: pointer;
}

/* 进度条填充 */
.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #007bff;
  border-radius: 5px;
  width: 0;
}

/* 拖拽按钮 */
.progress-btn {
  position: absolute;
  top: 50%;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #007bff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: grab;
}

/* 进度百分比显示 */
.progress-text {
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}
</style>