import { http } from '@/shared/api';
import { USER_API } from './routes';
import type { User } from '../model/user.interface';

const getUser = async (id: number) => {
    const { data } = await http.get<User>(USER_API.profile(id));
    return data;
}

export { getUser };