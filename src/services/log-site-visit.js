import axios from "axios";
import { ENDPOINT } from "./endpoints";

export const LogSiteVisit = async (page) => {
  const loc_data = await GetLocationData();
  axios.post(ENDPOINT.LOG_SITE_VISIT, loc_data, {
    params: { page, loc_data },
  });
};

const GetLocationData = async () => await (await axios.get(ENDPOINT.IP_URL)).data;
