import axios from "axios";
import { ENDPOINT } from "./endpoints";

export const LogSiteVisit = async (page) => {
  const loc_data = await GetLocationData();
  axios.get(process.env.REACT_APP_LOG_VISIT_API_ENDPOINT, {
    params: { page, loc_data },
  });
};

const GetLocationData = async () => await (await axios.get(ENDPOINT.IP_URL)).data;
