import axios from "axios";

async function getCustomerData() {
  let data = await axios
    .get("https://dev.beepbeep.tech/v1/sample_customer")
    .catch(() => {
      throw new Error("Failed to retrieve data!");
    });
  return data.data;
}

export { getCustomerData };
