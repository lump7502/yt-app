import axios from "axios";

const KEY = "AIzaSyDC36XqcyHYHu7I8TAfEkEN3b8yKL74MtE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
