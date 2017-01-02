let token = null;

/**
 * Sets the token that will be send as a header in each request
 */
export function setAuthToken(t) {
  token = t
}

export function fetch(...args) {
  const req = new Request(...args)

  const init = (token !== null)
    ? { headers: { ...req.headers, 'Authorization': token } }
    : req.headers

  return window.fetch(req, init);
}
