import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let url;
  try {
    url = req.body.url || JSON.parse(req.body).url;
  } catch {
    url = undefined;
  }
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const apiUrl = process.env.API_URL;
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
    const errorMsg =
      typeof err.response?.data?.error === "string"
        ? err.response.data.error
        : err.message || "Failed to fetch track information.";
    res.status(500).json({ error: errorMsg });
  }
}
