import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID xy018EygRa5VrzRuZ7WA3yWNI96SIDoIyFfl3zSrDK4",
  },
});
