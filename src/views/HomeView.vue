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
        const id = "135381543";
        const username = "somewell_sg";
        const query = "Самвел Григорян";
        VkUserApi.searchUsers(query, 10)
            .then(data => {
                console.log(data)
            }).catch(err => {
                console.log(err)
            });
    }
})
</script>