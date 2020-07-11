interface FetchApiParams {
    method: | 'POST' | 'GET' | 'PUT' | 'DELETE';
    path: string;
    data?: object;
}

export const fetchApi = async ({ method, path, data }: FetchApiParams) => {
    const body = data && JSON.stringify(data);
    console.log(`${process.env.REACT_APP_SERVER_BASE_URL}/${path}`, path)
    const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/${path}`, {
        method,
        body
    });
    return await response.json();
};

