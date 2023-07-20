import './js/animated-scroll'
import maicApi from "./js/api-service";

const devicePromise = new maicApi()

const data = devicePromise.fetchArticles();

console.log(data)