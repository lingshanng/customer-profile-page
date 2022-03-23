<template>
  <div>
    <v-sheet min-height="60vh" rounded="lg" elevation="0">
      <v-container>
        <h2>Promotions</h2>
        <v-divider></v-divider>
        <div class="filters">
          <v-btn
            depressed
            :color="mode == 'all' ? 'primary' : ''"
            @click="mode = 'all'"
          >
            All</v-btn
          >
          <v-btn
            depressed
            :color="mode == 'discount' ? 'primary' : ''"
            @click="mode = 'discount'"
          >
            Discount</v-btn
          >
          <v-btn
            depressed
            :color="mode == 'redeem' ? 'primary' : ''"
            @click="mode = 'redeem'"
            >Redeem</v-btn
          >
        </div>
        <div class="promotion-items">
          <promotion-item v-for="p in getPromotions" :key="p.title" :item="p" />
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
import PromotionItem from "./promotionItem.vue";

export default {
  name: "PromotionSheet",
  components: { PromotionItem },
  props: ["promotions"],
  data: () => ({
    mode: "all",
  }),
  computed: {
    getPromotions() {
      let allPromotions = this.promotions || [];
      if (this.mode == "discount") {
        return allPromotions.filter((p) => p.type == "discount");
      } else if (this.mode == "redeem") {
        return allPromotions.filter((p) => p.type == "redeem");
      } else {
        // mode == "all"
        return allPromotions;
      }
    },
  },
};
</script>
<style scoped>
.promotion-items {
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 16px;
}
.filters {
  display: flex;
  margin: 8px;
  column-gap: 16px;
  flex-wrap: wrap;
}
</style>
