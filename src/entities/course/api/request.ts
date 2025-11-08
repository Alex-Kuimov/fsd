import { http } from '@/shared/api';
import { COURSE_API } from './routes';
import type { Course } from '../model/course.interface';

const getCourse = async (id: number) => {
    const { data } = await http.get<Course>(COURSE_API.profile(id));
    return data;
}

export { getCourse };