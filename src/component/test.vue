<template>
    
</template>

<script>
export default {
    props: {
        age: {
            type: Number,
            default: 10
        }
    },
    mounted() {
        console.log('test age');
        console.log(this.age);
    }
}
</script>

<style>

</style>
