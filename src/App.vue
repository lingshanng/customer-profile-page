<template>
  <v-app>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <profile-sheet
              v-if="customer"
              :name="customer.name"
              :email="customer.email"
            />
            <v-skeleton-loader v-else type="image" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <promotion-sheet
              v-if="customer"
              :promotions="customer.promotions"
            />
            <v-skeleton-loader v-else type="image" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getCustomerData } from "./api/beep.js";
import ProfileSheet from "./components/ProfileSheet.vue";
import PromotionSheet from "./components/PromotionSheet.vue";
export default {
  name: "App",
  components: { ProfileSheet, PromotionSheet },
  data: () => ({
    customer: null,
  }),
  mounted: async function () {
    this.customer = await getCustomerData();
  },
};
</script>
