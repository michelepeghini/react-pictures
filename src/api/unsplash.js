import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8a8abc076944ad24baef02d99d43a8680ac893556b4148fd21e1f0c44e5c5f3d' 
    }
});