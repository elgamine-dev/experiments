<template>
    <a v-bind:href="link.url" target="_blank" class="list-group-item list-group-item-action">
        {{link.title}}
    </a>
</template>

<script>
    export default {
        name: "LinkItem",
        props:['link']
    }
</script>

<style scoped>

</style>