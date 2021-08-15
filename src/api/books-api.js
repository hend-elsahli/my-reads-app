import { appFetch, PUT, getDefaultHeaders, POST } from ".";

/*---------------------------------
              Helpers
---------------------------------*/
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

export const getAllBooks = async () => {
  const { ok, data } = await appFetch({
    url: "books",
  });

  return ok ? { ok: true, data: getBooklist(data.books) } : { ok, data };
};

export const updateBook = async ({ id, shelf }) => {
  const { ok } = await appFetch({
    url: `books/${id}`,
    method: PUT,
    headers: { ...getDefaultHeaders(), "Content-Type": "application/json" },
    body: { shelf },
  });

  return { ok };
};

export const searchBooks = async ({ query }) => {
  const { ok, data } = await appFetch({
    url: `search`,
    method: POST,
    headers: { ...getDefaultHeaders(), "Content-Type": "application/json" },
    body: { query },
  });

  return ok ? { ok: true, data: getBooklist(data.books) } : { ok, data };
};
