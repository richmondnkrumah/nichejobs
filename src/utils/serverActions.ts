"use server";
import axios from "axios";

export const searchFormHandler = async (prevState:any,formData: FormData) => {
  console.log(formData);
  const rawFormData = {
    jobTitle: formData.get('jobTitle'),
    jobLocation: formData.get("jobLocation"),
  };
  const searchurl = `https://findwork.dev/api/jobs/?${
    rawFormData.jobLocation &&
    `location=${rawFormData.jobLocation.toString().replaceAll(" ", "+")}&`
  }search=${rawFormData.jobTitle
    ?.toString()
    .replaceAll(" ", "+")}&sort_by=relevance`;

  console.log(searchurl, "URL");
  const urlConfig = {
    method: "get",
    maxBodyLength: Infinity,
    url: searchurl,
    headers: {
      Authorization: `Token ${process.env.FINDWORK_DEV_API_TOKEN}`,
    },
  };
  let responseData = null;
  let responseError = null;
  await axios
    .request(urlConfig)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      responseData = JSON.stringify(response.data);
    })
    .catch((error) => {
      // console.log(error);
      responseError = error;
    });
  return{message: responseData, error: responseError};
};
