/*---------------------------------
            CONSTANTS
---------------------------------*/
export const BASE_URL = "https://reactnd-books-api.udacity.com";
/** Status */
export const OK = "ok";
export const ERROR = "error";
/** Methods */
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const PATCH = "PATCH";
/** Errors */
export const ERR_UNKNOWN = "unknown";

/*---------------------------------
            Helpers
---------------------------------*/
/**
 * @description get default headers object
 * @returns {object} Header object
 */
export const getDefaultHeaders = () => {
  let token = localStorage.token;
  if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

  return {
    Accept: "application/json",
    Authorization: token,
  };
};

const handleResponseError = (res) => {
  const { ok } = res;
  if (!ok) {
    throw new Error();
  }

  return res;
};

const handleApiError = (error) => {
  return { ok: false, error: ERR_UNKNOWN };
};

/**
 *
 * @description Custom fetch method for resources asynchronously across the network
 * @param {string} url - relative path of the api endpoint (with no leading /)
 * @param {string} method - HTTP method (GET, POST, PUT, PATCH...)
 * @param {body} object - HTTP request body object
 * @param {object} object - HTTP request headers object
 * @param {signal} object - AbortController signal to terminate the request if needed
 * @returns {Object} { ok: true|false, data: []:{}:string, error: error-code-string }
 * @Example { ok: false, error: ERR_UNKOWN }
 * @example { ok: true, data: [{...}, {...}] }
 */
export const appFetch = async ({
  url,
  method,
  body,
  headers = getDefaultHeaders(),
  signal,
}) => {
  try {
    const res = await fetch(`${BASE_URL}/${url}`, {
      method,
      body: body ? JSON.stringify(body) : body,
      headers,
      signal,
    });

    const data = await handleResponseError(res).json();

    return { ok: true, data };
  } catch (error) {
    return handleApiError(error);
  }
};
