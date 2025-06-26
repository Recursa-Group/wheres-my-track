const axios = require("axios");
const cors = require("cors");

const corsMiddleware = cors();

export default async function handler(req, res) {
  await new Promise((resolve, reject) => {
    corsMiddleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const apiUrl = "https://api.song.link/v1-alpha.1/links";
  const params = {
    url,
    userCountry: "US",
    songIfSingle: true,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    const data = response.data;

    if (!data.entityUniqueId || !data.linksByPlatform) {
      return res.status(404).json({ error: "Track not found for this URL." });
    }

    res.status(200).json(data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch track information." });
  }
}
