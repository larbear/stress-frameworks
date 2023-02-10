<script>
const token = () => Math.random().toString(36).substring(2, 10);
const endAt = Date.now() + 10000;

export default {
  name: "Vue",
  data: () => ({
    count: 0,
    lots: [...Array(30000).keys()],
  }),

  mounted() {
    const go = () => {
      this.lots[5] = token();
      this.count++;
      if (Date.now() < endAt) {
        setTimeout(go);
      }
    };

    go();
  },

  methods: {},
};
</script>

<template>
  <h1>Vue ({{ count }})</h1>
  <div id="lots-o-numbers">
    <template :key="index" v-for="(item, index) in lots">
      <div>{{ item }}</div>
    </template>
  </div>
</template>
