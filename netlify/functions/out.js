export async function handler(event) {
  const url = new URL(event.rawUrl);
  const source =
    url.searchParams.get("from") ||
    (event.headers.referer ? `ref:${event.headers.referer}` : null) ||
    "NO_SOURCE";

  console.log("Click from:", source);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbw4Gct_K_8S88Br2czIziQcOz6qPg_25WFq4vSS8ByuwS81-p8tfkGdtyL__qKYObfEVA/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source })
    });
  } catch (err) {
    console.error("Notify failed:", err);
  }

  return {
    statusCode: 302,
    headers: {
      Location: "https://l.exittaiwan.com/discount-error-report"
    }
  };
}
