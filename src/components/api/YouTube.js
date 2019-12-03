import axios from "axios";
const KEY = "AIzaSyCNSDaWwNccxe0fG0CnidxHHVHDTm1ozK8";

export const baseParams = {
  part: "snippet",
  maxResults: 20,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  baseParams
});
