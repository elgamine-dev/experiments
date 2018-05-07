<template>
    <ul class="list-group">
        <link-item v-for="link in links" v-bind:key="link.url" v-bind:link="link"></link-item>
    </ul>
</template>

<script>

    export default {
        name: "LinksComponent",
        mounted(){
            // Initialize Firebase
            firebase.initializeApp(window.firebaseConfig);

            firebase.database().ref('links/').once('value').then(records=>{
                console.log(records.val())
                this.links = Object.values(records.val()).reverse()
                console.log(this.links)
            })
        },
        data() {
            return {links:[
                {title:"loading..."}
            ]}
        }
    }
</script>

<style scoped>
    ul {
    }
</style>