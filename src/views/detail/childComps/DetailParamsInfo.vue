<template>
  <div class="DetailParamsInfo" v-if="Object.keys(paramsInfo).length != 0">
    <table
      v-for="(tables, index) in paramsInfo.rule.tables"
      class="params-tables"
      :key="index"
    >
      <tr v-for="(tr, indey) in tables" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="params-tables-info">
      <tr v-for="(tr, index) in paramsInfo.info.set" :key="index">
        <td>{{ tr.key }}</td>
        <td>{{ tr.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.DetailParamsInfo {
  padding: 10px 15px;
  background-color: #fff;
}
.params-tables {
  width: 100%;
  border-collapse: collapse;
  font-weight: bold;
}
.params-tables tr {
  /* text-align: center; */
}
.params-tables tr td {
  border-bottom: 1px solid #eee;
  padding: 5px 0 8px 0;
}
.params-tables-info {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  font-weight: bold;
}
.params-tables-info tr {
  display: flex;
  /* text-align: center; */
  align-items: center;
  border-bottom: 1px solid #eee;
}
.params-tables-info tr td {
  padding: 10px 0 10px 0;
}
.params-tables-info tr td:first-child {
  flex: 1;
}
.params-tables-info tr td:last-child {
  color: #ff5777;
  flex: 2;
}
</style>