<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click="logout">ログアウト</button>
    </div>
  </div>
</template>
<script>
import { signOut } from '@/plugins/amplify'

export default {
  name: 'About',
  methods: {
    async logout() {
      await signOut();
      this.$router.push('/');
    }    
  }
}
</script>>