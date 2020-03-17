<template>
  <div>
    <div style="margin:1rem 0;">
      <ul style="margin-left: 3rem; width:50%; list-style:none;">
        <li style="text-align:right; margin-bottom: 0.5rem;">
          <span>名前: </span>
          <input type="text" v-model="name"/>
        </li>
        <li style="text-align:right;">
          <span>パスワード: </span>
          <input type="password" v-model="password"/>
        </li>
      </ul>
    </div>
    <div>
      <button @click="login" v-if="!loading">ログイン</button>
      <button disabled v-else style="margin: 1rem;">ログイン</button>
    </div>
  </div>
</template>

<script>
import { signIn } from '@/plugins/amplify'

export default {
  name: 'Home',
  data() {
    return {
      name: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      try {
        this.loading = true
        await signIn(this.name, this.password)
        this.$router.push('/about')
      } catch (err) {
        console.log('login failed')
        console.log(err);
      } finally {
        this.loading = false
      }
    },
  },
};

</script>
