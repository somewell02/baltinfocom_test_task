<template>
    <div class="vk_user_card">
        <div class="user_photo">
            <img src="" alt="">
        </div>
        <div class="user_info">
            <div class="user_name"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "VkUserCard",
})
</script>

<style lang="scss" scoped>
.vk_user_card {
    display: flex;
}
</style>