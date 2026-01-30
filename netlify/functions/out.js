import fetch from "node-fetch"; // 如果你是 Node.js 環境

export async function handler(event) {
  const url = new URL(event.rawUrl);
  const source =
    url.searchParams.get("from") ||
    (event.headers.referer || event.headers.referrer) ||
    "NOTION_REFERRER_MISSING";

  console.log("Click from:", source);

  const targetUrl = "https://l.exittaiwan.com/discount-error-report";

  // === 先立即返回，但 fetch 啟動，並設超短 timeout ===
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 500); // 0.5 秒超時

  fetch(
    "https://script.google.com/macros/s/AKfycbw4Gct_K_8S88Br2czIziQcOz6qPg_25WFq4vSS8ByuwS81-p8tfkGdtyL__qKYObfEVA/exec",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source }),
      signal: controller.signal
    }
  )
    .catch(err => console.error("Notify failed:", err))
    .finally(() => clearTimeout(timeout));

  return {
    statusCode: 302,
    headers: { Location: targetUrl }
  };
}

