import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from './user.interface';
import { getUser } from '../api/get-user.request';

export const useUserStore = defineStore('user', () => {
    const user = ref<User | null>(null);

    const getItem = async (id: number) => {
        user.value = await getUser(id);
    };

    return { user, getItem };
});