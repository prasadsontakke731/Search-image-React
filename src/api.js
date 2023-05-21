import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID ijQG68hgyjvzzitD1ASs1xHz9xKe9t3jMljy3jBpJmk',
    },
    params: {
      query: term,
    },
  });
  //   console.log(response);
  //   console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
