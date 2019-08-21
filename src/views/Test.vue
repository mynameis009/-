<template>
  <div class="test">
    <div>平均值: 
      <span class="font" v-if="index">{{$store.getters.getAverage}}</span>
      </div>
    <button @click="update">加载更多</button>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column prop="id" label="序号" width="400"></el-table-column>
      <el-table-column prop="data" label="数值" width="400"></el-table-column>
      <el-table-column prop="time" label="日期"  :formatter="formatter"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import mock from "../mock";
import moment from "moment";
export default {
  name: "test",
  data() {
    return {
      dataList: [],
      average: "",
      index:false
    };
  },
  filters: {
    formateTime(val) {
      return;
    }
  },
  created() {
    this.getdata();
  },
  computed: {},
  methods: {
    getdata() {
      this.loading = true;
      mock().then(res => {
        this.index=true
        this.dataList.push(...res);
        this.$store.dispatch("getDataCall", this.dataList);
      });
    },
    update() {
      const index = this.dataList.length;
      mock(index, index + 5).then(res => {
        this.dataList = [...this.dataList, ...res];
        this.$store.dispatch("getDataCall", this.dataList);
      });
    },
    formatter (row, column) {
      return moment(row.time).format('YYYY/MM/DD HH:mm')
    }
  }
};
</script>

<style scoped lang="less">
.test {
  .font{
    color:red;
    font-size: 30px;
    font-weight:700;
  }
  .list {
    display: flex;
    flex-direction: row;
  }
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}
</style>
