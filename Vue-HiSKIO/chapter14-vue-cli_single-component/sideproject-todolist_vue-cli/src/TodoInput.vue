<template>
  <form @submit.prevent="submit">
    <input v-model="text"/>
    <button type="sumbit">Submit</button>
  </form>
</template>

<script>
export default {
    data(){
        return {
            text: '',
        };
    },
    methods:{
        submit(){
            this.$emit('submit', this.text);
            this.text = "";
        },
    },
}
</script>