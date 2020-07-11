import { fetchApi } from './apiProvider';


export const useGetUsers: any = () => {
    return fetchApi({path: 'users', method: 'GET'})
        .then(response => response)
};

