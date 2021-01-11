import { debounce } from "./index.js";
import BackTop from "components/content/BackTop.vue";
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh: null,
    };
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      this.refresh();
    };
    this.$bus.$on("imgload", this.itemImgListener);
  },
};
export const backTopMixin = {
  data() {
    return {
      isShowTop: false,
    };
  },
  components: {
    BackTop,
  },
  methods: {
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
};
