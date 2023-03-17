<template>
  <div>
    <GoogleLogin :callback="callback" />
  </div>
</template>
<script>
import { GoogleLogin } from "vue3-google-login";
import { ref } from 'vue'

export default {
  name: "LoginView",
  components: {GoogleLogin},
  methods: {
    callback: (res) => {
      console.log(res)
    }
  }
}
</script>

<style scoped>
p {
  margin-top: 12px;
  word-break: break-all;
}
</style>
