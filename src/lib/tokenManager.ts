import browserHttpClient from "./browserHttpClient";

let isRefreshing = false;
let refreshSubscribers: (() => void)[] = [];

/**拡張性を高めるオブジェクト構造で管理 */
export const tokenRefreshManager = {
  /**リフレッシュを確実に行うという意味づけの名称 */
  ensureRefreshed: async () => {
    return new Promise<void>(async (resolve, reject) => {
      refreshSubscribers.push(() => resolve());

      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await browserHttpClient.get("/api/auth/refresh");
          refreshSubscribers.forEach(cb => cb());
        } catch (err) {
          reject(err);
        } finally {
          refreshSubscribers = [];
          isRefreshing = false;
        }
      }
    });
  }
};
