<template>
  <div class='table-container'>
    <div class='table-header'>
      <span class='table-header-item' v-for='(item, index) in columns' :key='index'>
        {{item.name}}
      </span>
    </div>
    <div class='table-body'>
      <div class='scoll-wrapper'>
        <div class='table-body-row' v-for='(row, index) in source' :key='index'>
          <span
            class='table-body-col'
            v-for='(col, colIdx) in columns'
            :key='colIdx'
            :title='row[col.key]'>
            {{row[col.key]}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableStyle1',
  props: {
    columns: {
      type: Array,
      default: () => [
        { name: '事件类型', key: 'type' },
        { name: '事件名称', key: 'name' },
        { name: '地址', key: 'address' },
        { name: '来源', key: 'source' },
      ],
    },
    source: {
      type: Array,
      default: () => [
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
        { type: '测试类型', name: '新增·测试事件', address: '西湖区', source: 'PC录入', time: '2018-04-20' },
      ],
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.table-container{
  width: 100%;
  height: 100%;
  overflow: hidden;

  .table-header{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-weight: 600;
    display: flex;
    z-index: 2;

    .table-header-item{
      background-color: #007ee4;
      display: block;
      flex: 1;
      text-align: center;
      color: #fff;
      margin-left: 5px;

      &:first-child{
        margin-left: 0;
      }
    }
  }

  .table-body{
    width: 100%;
    height: calc( 100% - 30px );
    overflow: hidden;

    .scoll-wrapper{
      width: 100%;
      overflow: hidden;
      animation: tableScoll 20s linear infinite;
      transform-origin: 0 0;
      z-index: 1;

      .table-body-row{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #fff;
        text-align: center;
        display: flex;

        &:first-child{
          .table-body-col{
            color: rgb(163, 21, 46);
          }
        }

        &:nth-child(2){
          .table-body-col{
            color: rgb(255, 91, 245);
          }
        }

        &:nth-child(3){
          .table-body-col{
            color: rgb(255, 221, 96);
          }
        }

        &:nth-child(even){
          .table-body-col{
            background-color: rgba(17, 67, 157, .8);
          }
        }

        .table-body-col{
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

}
@keyframes tableScoll {
  from {
    transform: translateY(0%)
  }
  to {
    transform: translateY(-100%)
  }
}
</style>

