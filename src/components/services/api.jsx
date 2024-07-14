import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43947993-90af54b3f7dd1951891b3d341';

const fetchPixabay = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?&q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export default fetchPixabay;
