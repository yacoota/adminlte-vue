<template>
  <div>
    dashboard  
    <span v-on:message='messages'></span>
    <profile :msg='msgs'></profile>

    <router-link to="/dashboard/profile">Profile</router-link>
  </div>
</template>

<script>
import Profile from '@/views/dashboard/profile'

export default{
  name: 'Dashboard',
  components: { Profile },
  data() {
    return {
      msgs: 'I am dasboard'
    }
  },
  methods: {
    messages(val) {
      this.msgs = val;
    }
  }
  
}
</script>

<style lang="scss" scoped>
  
</style>
