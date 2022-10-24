<template>
    <main class="home-wrap">
        <div class="container small-container">
            <h1>Поиск друзей</h1>
            <section class="users-section">
                <div class="users-section__list">
                </div>
                <div class="users-section__actions">
                    <filled-button class="users-section__btn" @click="userAddModal.open()">Добавить</filled-button>
                    <filled-button class="users-section__btn">Очистить</filled-button>
                    <filled-button class="users-section__btn">Построить</filled-button>
                </div>
            </section>

            <modal-wrap ref="userAddModal">
                <div class="user-add-modal">
                    <div class="user__search">
                        <bordered-text-input v-model.lazy="query" placeholder="Введите фио, id или имя пользователя"/>
                    </div>
                    <div class="user__searched-list" v-if="searchedUsers.length">
                        <vk-user-card
                            v-for="user in searchedUsers"
                            :key="user.id"
                            :user="user"
                            type="search"
                            class="user__searched-list__card"
                        />
                    </div>
                </div>
            </modal-wrap>
        </div>
    </main>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import VkUserApi from "@/data/api/VkUserApi";
import BorderedTextInput from "@/components/inputs/BorderedTextInput.vue";
import FilledButton from "@/components/buttons/FilledButton.vue";
import VkUserCard from "@/components/cards/VkUserCard.vue";
import VkUser from "@/types/vk/VkUser";
import ModalWrap from "@/components/popups/ModalWrap.vue";
import DateTimeManager from "@/services/DateTimeManager";

export default defineComponent({
    name: "HomeView",
    components: {
        ModalWrap,
        VkUserCard,
        FilledButton,
        BorderedTextInput
    },

    setup() {
        console.log(DateTimeManager.calculateAge("12.10.2002"));

        const userAddModal = ref(null);

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
            searchedUsers,
            userAddModal
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
                flex: 0 0 32%;
            }
        }
    }

    .user-add-modal {

        .user__searched-list {
            margin-top: 20px;
            max-height: 400px;
            @include custom-scroll;

            .user__searched-list__card {
                &:not(:last-child) {
                    margin-bottom: 15px;
                }
            }
        }
    }
}
</style>
