import axios from 'axios';

export async function serviceRequest(data) {
    const response = await axios.get('https://api.github.com/users/' + data);
    return response.data;
}

export async function serviceRepoRequest(data) {
        const response = await axios.get('https://api.github.com/users/' + data + '/repos?page{0}&per_page=100');
        const repo = [];
        response.data.map((person) => {
        const user = person.full_name;
        return repo.push(user.replace(data + '/', ''));
    });
    return repo;
}

export async function serviceFollowRequest(data) {
    const response = await axios.get('http://api.github.com/users/' + data + '/followers?page{0}&per_page=100');
    return response.data;
}

export async function serviceFollowingRequest(data) {
    const response = await axios.get('http://api.github.com/users/' + data + '/following?page{0}&per_page=100');
    return response.data;
}
