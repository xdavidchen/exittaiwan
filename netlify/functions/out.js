export async function handler(event) {
  // 讀 query string
  const url = new URL(event.rawUrl);
  const source = url.searchParams.get("from") || event.headers.referer || "NO_REFERER";

  console.log("Click from:", source);

  const targetUrl = "https://exittaiwan.bettermode.io/report";

  return {
    statusCode: 302,
    headers: { Location: targetUrl }
  };
}
