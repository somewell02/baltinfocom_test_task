<template>
    <main class="home-wrap">
        <div class="container small-container">
            <h1>Поиск друзей</h1>
            <section class="users-section">
                <div class="users-section__search">
                    <bordered-text-input v-model.lazy="query" placeholder="Введите фио, id или имя пользователя"/>
                </div>
                <div class="users-section__list">
                    <vk-user-card v-for="user in searchedUsers" :key="user.id" :user="user" />
                </div>
                <div class="users-section__actions">
                    <filled-button class="users-section__btn">Построить</filled-button>
                    <filled-button class="users-section__btn">Очистить</filled-button>
                </div>
            </section>
        </div>
    </main>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import VkUserApi from "@/data/api/VkUserApi";
import BorderedTextInput from "@/components/inputs/BorderedTextInput.vue";
import FilledButton from "@/components/buttons/FilledButton.vue";
import VkUserCard from "@/components/cards/VkUserCard.vue";
import VkUser from "@/types/vk/VkUser";

export default defineComponent({
    name: "HomeView",
    components: {
        VkUserCard,
        FilledButton,
        BorderedTextInput
    },

    setup() {
        const query = ref<string>("");
        const searchedUsers = ref<Array<VkUser>>([]);

        watch(query, async () => {
            if (query.value.length >= 2) {
                searchedUsers.value = await VkUserApi.searchUsers(query.value, 10);
            } else {
                searchedUsers.value = [];
            }
        })

        return {
            query,
            searchedUsers
        }
    },
})
</script>

<style lang="scss" scoped>
.home-wrap {
    width: 100%;

    .users-section {
        .users-section__list {
            margin-top: 20px;
        }

        .users-section__actions {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            .users-section__btn {
                flex: 0 0 49%;
            }
        }
    }
}
</style>
