import { ref } from "vue";
import Axios from "axios";

const getData = () => {
  const data = ref([]);
  const error = ref(null);
  const fetchData = async (url) => {
    try {
      const res = await Axios.get(url);
      if (res.status !== 200) {
        throw Error("Couldn't get res");
      }
      data.value = res.data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { data, error, fetchData };
};
export default getData;
