import axios from "axios";
import { Job, NewJob } from "../types/job";

const JOBS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/jobs";

export const fetchJobs = (): Promise<Job[]> => {
  return axios.get(JOBS_API_URL).then((response) => response.data.data);
};

export const createJob = (job: NewJob): Promise<Job> => {
  return axios.post(JOBS_API_URL, job).then((response) => response.data);
};
