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
    console.log("handleResponseError", res);
    throw new Error();
  }

  return res;
};

const handleApiError = (error) => {
  console.log("handleApiError", error);
  return { ok: false, error: ERR_UNKNOWN };
};

/**
 *
 * @returns Object { ok: true|false, data: []:{}:string, error: error-code-string }
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
