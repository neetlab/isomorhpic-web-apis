const NodeFetch = require("node-fetch");

const Blob = globalThis.Blob || NodeFetch.Blob;
const FormData = globalThis.FormData || NodeFetch.FormData;
const Headers = globalThis.Headers || NodeFetch.Headers;
const Request = globalThis.Request || NodeFetch.Request;
const Response = globalThis.Response || NodeFetch.Response;
const fetch = globalThis.fetch || NodeFetch.default;

module.exports = {
  Blob,
  FormData,
  Headers,
  Request,
  Response,
  fetch,
};
