<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <span class="title"> 面试指引</span>
    <div class="instruction">大大丰收的打发士大夫</div>
    <div class="instruction">发所发生的发范德萨</div>
    <div class="instruction">撒旦法师打发士大夫撒旦法撒旦法师</div>
    <div class="instruction">发发呆萨法萨法的发全额群翁文倩二群翁群无</div>
    <div class="instruction">4.完成点击《加载更多》按钮加载更多数据到store（每次数据量不限，但页数要连贯），并同步更新平均值</div>
    <div class="instruction">5.把列表按照id: item.id, data: item.data, 下一列item.time排版，元素居中，有更好看到排版更佳</div>
    <div class="instruction">6.自由发挥优化用户体验</div>

  </div>
</template>

<script>

export default {
  name: 'home',
  created () {
    document.title = 'Vue面试题'
  }

}
</script>

<style lang="less" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:100%;
  text-align: center;
  img{
    max-width: 100px;

  }
  .instruction{
    font-size: 15px;
    padding: 5px;
  }

  .title{
    font-size: 30px;
    font-weight: bold;
  }
}

</style>
