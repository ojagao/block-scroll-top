<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const gender = ref("");
const submitted = ref(false);
const valid = ref(false);

const rules = {
  required: (value: string) => !!value || "Required.",
  email: (value: string) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
};

const handleSubmit = () => {
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Gender:", gender.value);
  submitted.value = true;
};

const goToStopScroll = () => {
  router.push("/stop-scroll");
};
</script>

<template>
  <v-container class="form-container" max-width="600">
    <h4>上側にスクロールでリロードできるページ</h4>
    <v-form @submit.prevent="handleSubmit" v-model="valid">
      <!-- Name -->
      <v-text-field v-model="name" label="Name" :rules="[rules.required]" required></v-text-field>

      <!-- Email -->
      <v-text-field v-model="email" label="Email" :rules="[rules.required]" required></v-text-field>

      <!-- Gender -->
      <v-radio-group v-model="gender" label="Gender" :rules="[rules.required]" row>
        <v-radio label="Male" value="male"></v-radio>
        <v-radio label="Female" value="female"></v-radio>
        <v-radio label="Other" value="other"></v-radio>
      </v-radio-group>

      <!-- Age -->
      <v-text-field v-model="age" label="Age" type="number" :rules="[rules.required, rules.numeric]" required></v-text-field>

      <!-- Occupation -->
      <v-text-field v-model="occupation" label="Occupation" :rules="[rules.required]" required></v-text-field>

      <!-- Address -->
      <v-text-field v-model="address" label="Address" :rules="[rules.required]" required></v-text-field>

      <!-- Phone Number -->
      <v-text-field v-model="phone" label="Phone Number" type="tel" :rules="[rules.required, rules.phone]" required></v-text-field>

      <!-- Submit Button -->
      <v-btn type="submit" color="primary" @click="goToStopScroll">次へ</v-btn>
    </v-form>

    <!-- Submitted Data -->
    <v-alert v-if="submitted" type="success" class="mt-4">
      <h3>Submitted Data</h3>
      <p>Name: {{ name }}</p>
      <p>Email: {{ email }}</p>
      <p>Gender: {{ gender }}</p>
      <p>Age: {{ age }}</p>
      <p>Occupation: {{ occupation }}</p>
      <p>Address: {{ address }}</p>
      <p>Phone: {{ phone }}</p>
    </v-alert>
  </v-container>
</template>

<style scoped>
.form-container {
  margin-top: 20px;
}

.mr-2 {
  margin-right: 12px;
}

h4 {
  margin-bottom: 24px;
  border-bottom: 1px solid black;
}
</style>
