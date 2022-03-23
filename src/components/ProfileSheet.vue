<template>
  <div>
    <v-sheet rounded="lg" elevation="0">
      <v-container>
        <h2>Profile</h2>
        <v-divider></v-divider>
        <div class="profile">
          <v-avatar color="grey" size="120" class="profile-pic">
            <v-img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
            ></v-img>
          </v-avatar>
          <div>
            <div class="name">{{ name }}</div>
            <div class="email">{{ email }}</div>
            <v-btn small class="edit-btn">
              <v-icon small>mdi-pencil</v-icon>Edit</v-btn
            >
          </div>
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: "ProfileSheet",
  props: ["name", "email"],
};
</script>
<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin-top: 12px;
  overflow-wrap: anywhere;
}
.profile-pic {
  margin-bottom: 12px;
}
.name {
  font-size: 20px;
  font-weight: bold;
}
.email {
  font-size: 16px;
  color: gray;
}
.edit-btn {
  margin-top: 18px;
}
</style>
