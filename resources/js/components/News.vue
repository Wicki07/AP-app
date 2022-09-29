<template>
  <v-main>
    <v-container class="mt-8">
      <v-row>
        <v-col cols="2">
          <v-sheet
            style="height: 400px"
            color="#454746"
            rounded="lg"
            class="mx-auto elevation-10">
            <ul>
              <li :class="{ active: active === 'about' }">
                <a class="" @click="() => changeActive('about')"
                  >Najnowasze informacje</a
                >
              </li>
              <li :class="{ active: active === 'instructors' }">
                <a class="" @click="() => changeActive('instructors')">Obozy</a>
              </li>
            </ul>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
            color="#454746"
            class="elevation-10"
            rounded="lg"
            style="height: 100%">
            <v-carousel v-model="active" hide-delimiters :show-arrows="false">
              <v-carousel-item value="about">
                <h1>Najnowasze informacje</h1></v-carousel-item
              >
              <v-carousel-item value="instructors">
                <h1>Obozy</h1></v-carousel-item
              >
            </v-carousel>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const initialState = {
      active: 'about',
    };

    const data = reactive({ ...initialState });

    const changeActive = value => {
      data.active = value;
    };

    return {
      ...toRefs(data),
      changeActive,
    };
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0 0 0 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}
ul li a {
  font-weight: 700;
  font-size: 1.2rem;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  cursor: pointer;
}
ul li a::before {
  opacity: 0.1;
  transition: opacity 0.3s ease;
}
ul li a:hover {
  opacity: 1;
}
ul li.active a {
  opacity: 1;
}
ul li {
  margin-top: 15px;
  padding-left: 10px;
}
</style>
