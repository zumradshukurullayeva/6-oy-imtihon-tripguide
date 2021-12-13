import axiosClient from './axiosClient';

const apiCalls = {
    getBestSearch: () => {
        return axiosClient.get('bestSearch');
    },
    getTours: () => {
        return axiosClient.get('tours');
    },
    getHotels: () => {
        return axiosClient.get('hotels');
    },
    getHotelDetail: (id) => {
        return axiosClient.get(`hotels/${id}`);
    },
    getExplores: () => {
        return axiosClient.get('explore');
    },
    getCities: () => {
        return axiosClient.get('cities');
    }
}
 
export default apiCalls;