<template>
  <v-card ripple :class="$vuetify.breakpoint.xsOnly ? 'smItem' : 'item'">
    <v-card-title class="card-row">
      <v-icon v-if="item.type == 'discount'">mdi-sale</v-icon>
      <v-icon v-else>mdi-wallet-giftcard</v-icon>
      <div class="card-title">{{ item.title }}</div>

      <v-chip class="quantity" color="secondary">x{{ item.quantity }}</v-chip>
    </v-card-title>
    <v-card-text v-if="item.type == 'discount'">
      <div class="description">
        <span class="discount">${{ discountPrice }}</span> OFF
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "PromotionItem",

  components: {},
  data: () => ({}),
  props: ["item"],
  computed: {
    discountPrice() {
      return this.item.discount.toFixed(2);
    },
  },
  methods: {},
};
</script>
<style scoped>
.item:hover {
  cursor: pointer;
}
.smItem {
  width: 100%;
}

.card-title {
  margin-left: 8px;
  margin-right: 24px;
  flex: 1;
  font-size: 18px;
}
.quantity {
  margin-left: auto;
}
.description {
  font-size: 16px;
}
.discount {
  font-size: 20px;
  font-weight: bold;
}
</style>
