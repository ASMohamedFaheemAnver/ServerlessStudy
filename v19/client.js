const axios = require("axios");
const config = require("../config");

(async () => {
  try {
    const uri = config.awsGatewayUri + "/cus";
    // If we get cors error we need to set origin * inside
    // Add header key inside method response and add the value inside integration response.
    const response = await axios.post(uri);
    console.log({ data: response.data });
  } catch (e) {
    console.log({ e: e.message });
  }
})();
