/*  Runtime environment variables that will be replaced at deploy time, since 
*   all REACT_APP and process.env variables are injected only at build time.
*
*   In your local machine, just copy this file and rename to 'env.dev.js', replacing 
*   the token values "__VALUE__" as you wish.
*/

window.__environment = {
  BASE_URL: '__BASE_URL__',
  API_KEY: '__API_KEY__'
};