<template>
    <div>
        <router-view />
        <bottom></bottom>
    </div>
</template>

<script>
import bottom from '../components/module/bottom.vue';
export default {
    name: 'home',
    data() {
        return {

        }
    },

}
</script>

<style scoped>

</style>