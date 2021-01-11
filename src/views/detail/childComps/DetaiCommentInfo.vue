<template>
  <div class="DetaiCommentInfo" v-if="Object.keys(commentInfo).length != 0">
    <div class="row"></div>
    <div class="info-head">
      <div class="info-head-title">用户评价</div>
      <div class="info-head-more">更多</div>
    </div>
    <div class="info-body">
      <div class="user-info">
        <div class="user-avatar">
          <img :src="commentInfo.user.avatar" alt="" />
        </div>
        <div class="user-name">{{ commentInfo.user.uname }}</div>
      </div>
      <div class="info-content">
        {{ commentInfo.content }}
      </div>
      <div class="created-style">
        <span class="created">{{ commentInfo.created | showDate }}</span>
        <span class="style">{{ commentInfo.style }}</span>
      </div>

      <div
        class="comment-img"
        v-for="(item, index) in commentInfo.images"
        :key="index"
      >
        <img :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "components/common/utils";
export default {
  name: "DetaiCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      value = formatDate(value, "yyyy-MM-dd");
      return value;
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.DetaiCommentInfo {
  margin-top: 30px;
  padding-bottom: 30px;
}
.row {
  height: 5px;
  background-color: #eee;
}
.info-head {
  display: flex;
  padding: 10px 10px 15px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 17px;
  border-bottom: 1px solid #eee;
}
.info-head .info-head-more {
  margin-right: 15px;
}
.info-body {
  padding: 10px 10px;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}
.user-avatar img {
  width: 60px;
  height: 60px;
}
.user-name {
  margin-left: 10px;
  font-weight: bold;
  font-size: 15px;
}
.info-content {
  margin-top: 7px;
}
.created-style {
  color: rgb(170, 168, 168);
  margin: 5px 0;
}
.created-style .style {
  margin-left: 15px;
}
.comment-img:first {
  margin-left: 0;
}
.comment-img {
  display: inline-block;
  margin-left: 4px;
}
.comment-img img {
  width: 70px;
  height: 70px;
}
</style>