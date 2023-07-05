import axios from "axios";





const GetAPIPhotos = async (data) => {

    const url="https://api.unsplash.com/search/photos/?client_id=PKBRnY__KuCGJUf_83AlqswDTo-oJNMWU1-aKpU5T2w"
    const response = await axios.get(url,
    {
      params: { query: data },
    });
    console.log("response :")
    console.log(response);
    if(response.data.results.length==0) {window.alert('Sorguya ait görsel bulunamadı');
  }
    return response.data.results;







  };
  export default GetAPIPhotos;