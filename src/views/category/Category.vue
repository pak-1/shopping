<template>
  <div ref="Cwrapper">
    <vue-qr
      :text="url"
      logoSrc="http://s3.mogucdn.com/p2/161214/103488673_65bf62g5e98f4g9b8dk1j5le13e34_140x140.png"
      :margin="0"
      coloDark="#F67B29"
      colorLight="#ffffff"
    ></vue-qr>
  </div>
</template>

<script>
import vueQr from "vue-qr";
export default {
  data() {
    return {
      url: "我爱你s",
      icon: "",
    };
  },
  components: {
    vueQr,
  },
};
</script>

<style scope>
</style>
