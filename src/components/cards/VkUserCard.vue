<template>
    <div class="vk_user_card">
        <div class="user_photo">
            <img :src="user.photo_400_orig" :alt="`${user.screen_name}-photo`">
        </div>
        <div class="user_info">
            <div class="user_name">{{ user.first_name + " " + user.last_name }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import VkUser from "@/types/vk/VkUser";

export default defineComponent({
    name: "VkUserCard",
    props: {
        user: {
            type: Object as PropType<VkUser>,
            required: true,
        }
    }
})
</script>

<style lang="scss" scoped>
.vk_user_card {
    display: flex;
}
</style>