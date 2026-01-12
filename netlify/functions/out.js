export async function handler(event) {
  // 讀 query string
  const url = new URL(event.rawUrl);
  const source = url.searchParams.get("from") || event.headers.referer || "NO_REFERER";

  console.log("Click from:", source);
  
  // === POST 到 Google Apps Script ===
  await fetch("https://script.google.com/macros/s/AKfycbw4Gct_K_8S88Br2czIziQcOz6qPg_25WFq4vSS8ByuwS81-p8tfkGdtyL__qKYObfEVA/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source })
  });

  // === 跳轉到最終連結 ===
  const targetUrl = "https://exittaiwan.bettermode.io/report";

  return {
    statusCode: 302,
    headers: { Location: targetUrl }
  };
}