export async function handler(event) {
  const url = new URL(event.rawUrl);
  const source =
    url.searchParams.get("from") ||
    (event.headers.referer || event.headers.referrer) ||
    "NOTION_REFERRER_MISSING";

  console.log("Click from:", source);

  // === 先立即跳轉，不等通知完成 ===
  const targetUrl = "https://l.exittaiwan.com/discount-error-report";

  // fire-and-forget 發送通知
  fetch("https://script.google.com/macros/s/AKfycbw4Gct_K_8S88Br2czIziQcOz6qPg_25WFq4vSS8ByuwS81-p8tfkGdtyL__qKYObfEVA/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source })
  }).catch(err => console.error("Notify failed:", err));

  // === 立即 302 redirect ===
  return {
    statusCode: 302,
    headers: {
      Location: targetUrl
    }
  };
}
