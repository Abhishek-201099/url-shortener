const auth_token =
  "WKXVNPzzzzmj60L9IyTBvcONeoZT8ucu4S1oXBgXRVMmxld7kutrHwJ5tH0k";

export async function getShortURL(url) {
  // "https://t.ly/api/v1/link/shorten
  try {
    const response = await fetch("https://t.ly/api/v1/link/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth_token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        long_url: url,
      }),
    });

    if (!response.ok)
      throw new Error(`HTTP Error with status code : ${response.status}`);

    const data = await response.json();

    return data.short_url;
  } catch (error) {
    console.log("Failed request : ", error.message);
  }
}
