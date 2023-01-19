import axios from 'axios';



export let getData =  async (mediaType, setFun) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=458895295ae5e0e4fa07588463fec7b3`);
    setFun(data.results)}


export let getDetails =  async (id) => {
    let { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=458895295ae5e0e4fa07588463fec7b3&language=en-US`);
    return data;
   }


export let axiosPost =  async (formData, endPoint) => {
    let { data } = await axios.post(`https://sticky-note-fe.vercel.app/${endPoint}`, formData);
    return data}