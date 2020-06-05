<template>
  <div>
    profile-dashboard --> {{msg}}
    <button @click="message" type="button">测试profile</button>
  </div>
</template>

<script>
export default{
  name: 'Profile',
  props: {
    msg: String
  },
  create(){
  },
  methods: {
    message(){
      this.$emit('message','HHH');
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>
