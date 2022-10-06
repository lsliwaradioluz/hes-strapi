const axios = require("axios");
//https://hesgym-fit.pl/.netlify/functions/sap-image-proxy
const headers = {
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async function(event, context) {
  const requestedPath = event.path;
  const sapBaseUrl = 'https://api.c1jvi8hu9a-vsfspzooa1-d1-public.model-t.cc.commerce.ondemand.com/medias/';
  const extractedSapContext = requestedPath.split("/").pop();
  const finalUrl = `${sapBaseUrl}?context=${extractedSapContext}`;
  console.log({ finalUrl });
  return {
    headers: {
      "Location": finalUrl
    },
    statusCode: 302
  }
}
