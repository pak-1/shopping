<template>
  <div ref="Cwrapper" class="Cwrapper">
    <div class="qr">
      <vue-qr
        :text="url"
        logoSrc="http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png"
        :margin="0"
        coloDark="#F67B29"
        colorLight="#ffffff"
        class="qr"
        :size="100"
      ></vue-qr>
    </div>
  </div>
</template>

<script>
import vueQr from "vue-qr";
export default {
  data() {
    return {
      url: "我爱你 fcy",
      icon: "",
    };
  },
  components: {
    vueQr,
  },
};
</script>

<style scope>
.qr {
  margin: 10px 20px;
}
.qr img {
  margin: 0;
}
</style>
