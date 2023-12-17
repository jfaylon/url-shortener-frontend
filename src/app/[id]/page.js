import { redirect, notFound } from "next/navigation";
import axios from "axios";

const Page = async ({ params }) => {
  const data = await getData(params);

  if (data) {
    return redirect(data.url);
  } else {
    return notFound();
  }
};

export const getData = async (params) => {
  const { id } = params;
  try {
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
    return result?.data;
  } catch (error) {
    return null;
  }
};

export default Page;
