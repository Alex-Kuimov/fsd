import { http } from '@/shared/api';
import { COURSE_API } from './routes';
import type { Course } from '@/entities/course/model/course.interface';

interface filterData {
    id: number;
    name: string;
    type: string;
}

const filterCourse = async (sendData: filterData) => {
    const { data } = await http.post<Course>(COURSE_API.filter(), sendData);
    return data;
}

export { filterCourse };