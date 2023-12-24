import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '27c3d531502b41cd975a27941ae008f5'
    }
});