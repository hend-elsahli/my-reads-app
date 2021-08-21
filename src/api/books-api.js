import { appFetch, PUT, getDefaultHeaders, POST } from ".";

/*---------------------------------
              Helpers
---------------------------------*/
/**
 * @description Extract necessary book details
 * @param {array} list - List of all books with all of its details
 * @returns {array} - List of books with specific details
 */
const getBooklist = (list) => {
  if (!list || !Array.isArray(list)) return [];
  return list.map(
    ({ id, title, authors, shelf, imageLinks: { thumbnail } }) => ({
      id,
      title,
      authors,
      shelf,
      thumbnailUrl: thumbnail,
    })
  );
};

/*---------------------------------
          API-Functions
---------------------------------*/
/**
 * @description Get book details given bookId
 * @param {object} { id } - id of the book
 * @returns {object} { ok {boolean}, data {object} } - Object with result-status `ok`, and book object
 */
export const getBook = async ({ id }) => {
  const { ok, data } = await appFetch({
    url: `books/${id}`,
  });

  if (!ok) return { ok: false, data: null };

  if (ok) {
    const {
      id,
      title,
      authors,
      shelf,
      imageLinks: { thumbnail },
    } = data.book;

    return {
      ok: true,
      data: {
        id,
        title,
        authors,
        shelf,
        thumbnailUrl: thumbnail,
      },
    };
  }
};

/**
 * @description Get all books on shelves
 * @returns {object} { ok {boolean}, data {array} }
 */
export const getAllBooks = async () => {
  const { ok, data } = await appFetch({
    url: "books",
  });

  return ok ? { ok: true, data: getBooklist(data.books) } : { ok, data };
};

/**
 * @description Update book `shelf` with `id`
 * @param {object} { id {string}, shelf {string} }
 * @returns {boolean} ok - The status of the update
 */
export const updateBook = async ({ id, shelf }) => {
  const { ok } = await appFetch({
    url: `books/${id}`,
    method: PUT,
    headers: { ...getDefaultHeaders(), "Content-Type": "application/json" },
    body: { shelf },
  });

  return ok;
};

/**
 * @description Search book using `title` or `author`
 * @param {object} {query {string}, signal {object}} - Search query (title, or author), abort signal to cancel request
 * @returns
 */
export const searchBooks = async ({ query, signal }) => {
  const { ok, data } = await appFetch({
    url: `search`,
    method: POST,
    headers: { ...getDefaultHeaders(), "Content-Type": "application/json" },
    body: { query: query.trim() },
    signal,
  });

  return ok ? { ok: true, data: getBooklist(data.books) } : { ok, data };
};
