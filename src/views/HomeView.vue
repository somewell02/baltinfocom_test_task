<template>
    <main class="home_wrap">
        <div class="container">
<!--            <h1>Поиск друзей</h1>-->
            <section class="users_list_section">
                <div class="list_actions">

                </div>
                <div class="users_list">

                </div>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import VkUserApi from "@/data/api/VkUserApi";

export default defineComponent({
    name: "HomeView",

    mounted() {
        VkUserApi.getAllUsers()
        //     .then(data => {
        //     console.log(data);
        // })
    }
})
</script>