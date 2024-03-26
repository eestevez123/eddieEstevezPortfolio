let useLocalAPI = true;

const config = {
    API_ENDPOINT        : 'https://api-eddieestevezportfolio.onrender.com/',
    EMAILJS_PUBLIC_KEY  : "user_hNYdiy5GTgyDDBckrXPqh",
    EMAILJS_SERVICE_ID  : "service_h9o93bm",
    EMAILJS_TEMPLATE_ID : "template_b99mtj9"
};

if (useLocalAPI) {
  config.API_ENDPOINT = 'http://localhost:3005/'
}
  
export default config;