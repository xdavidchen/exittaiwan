export async function handler(event) {
  const referer = event.headers.referer || "NO_REFERER";
  const userAgent = event.headers["user-agent"] || "UNKNOWN";

  // 先用 log 看結果
  console.log("Click from:", referer);
  console.log("UA:", userAgent);

  const targetUrl = "https://exittaiwan.bettermode.io/report";

  return {
    statusCode: 302,
    headers: {
      Location: targetUrl
    }
  };
}
