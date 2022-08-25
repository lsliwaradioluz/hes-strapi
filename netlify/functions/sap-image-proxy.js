const axios = require("axios");

const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async function(event, context) {
  axios.get('http://188.121.27.234:3000/sap-image-proxy/context/1234')

  const requestedPath = event.path;
  const sapBaseUrl = 'https://api.c1jvi8hu9a-vsfspzooa1-d1-public.model-t.cc.commerce.ondemand.com/medias/';
  const extractedSapContext = requestedPath.split("/").pop();
  const finalUrl = `${sapBaseUrl}?context=${extractedSapContext}`;

  return {
    headers: {
      "Location": finalUrl
    },
    statusCode: 302
  }
}
