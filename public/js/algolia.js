(() => {
  // ns-params:@params
  var baseURL = "/";
  var params = { about: [{ name: "ExitTaiwan \u51FA\u53F0\u7063", url: "/about" }, { name: "\u52A0\u5165\u5718\u968A (coming soon...)", url: "/about" }, { name: "\u514D\u8CAC\u8072\u660E\u8207\u4F7F\u7528\u689D\u6B3E", url: "/terms" }], blogroll: [{ name: "\u9078\u64C7\u76EE\u7684\u5730\u570B\u5BB6", url: "https://exittaiwan.com/tags/" }, { name: "\u597D\u7528\u8CC7\u6E90", url: "https://docs.exittaiwan.com/%E5%A5%BD%E7%94%A8%E8%B3%87%E6%BA%90" }, { name: "\u5C0F\u984D\u8D0A\u52A9", url: "https://ko-fi.com/exittaiwan" }], docs: true, email: "contact@exittaiwan.com", mainSections: ["posts"], mainsections: ["posts"], shop: true, showcopyright: true, showmore: true, showrss: false, socialmedia: [{ name: "Github", url: "https://github.com/floyd-li" }] };

  // <stdin>
  var { appid, appkey, searchindex: indexName, enabled } = params.algolia;
  var searchClient = algoliasearch(appid, appkey);
  var { autocomplete, getAlgoliaResults } = window["@algolia/autocomplete-js"];
  function initAlgolia() {
    autocomplete({
      container: "#autocomplete",
      getSources({ query }) {
        return [
          {
            sourceId: "products",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName,
                    query,
                    params: {
                      attributesToSnippet: ["name:10", "description:35"]
                    }
                  }
                ]
              });
            },
            templates: {
              item({ item, components, html }) {
                return html`<a class="aa-ItemWrapper" href="${baseURL}${item.uri}">
                <div class="aa-ItemContent">
                  <div class="aa-ItemContentBody">
                    <div class="aa-ItemContentTitle">
                      ${components.Highlight({
                  hit: item,
                  attribute: "name"
                })}
                    </div>
                    <div class="aa-ItemContentDescription">
                      ${components.Snippet({
                  hit: item,
                  attribute: "description"
                })}
                    </div>
                  </div>
                  <div class="aa-ItemActions">
                    <button
                      class="aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly"
                      type="button"
                      title="Select"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <path
                          d="M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </a>`;
              }
            }
          }
        ];
      }
    });
    document.querySelector("#autocomplete input").focus();
  }
  if (enabled) {
    initAlgolia();
  }
})();
