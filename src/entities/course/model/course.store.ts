import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Course } from './course.interface';
import { getCourse } from '../api/request';

export const useUserStore = defineStore('user', () => {
    const course = ref<Course | null>(null);

    const getItem = async (id: number) => {
        course.value = await getCourse(id);
    };

    return { course, getItem };
});