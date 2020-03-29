import axios from './httpService'
//接口多的时候可以分模块,这里就不分模块了
export const getJson = (name = 'test') => {
    return axios.get(`hotel/static/json/${name}.json`)
}
export default {
    getJson,
}