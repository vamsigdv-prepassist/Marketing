export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt?: number;
}

const DEFAULT_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export const cacheManager = {
  async get<T>(key: string): Promise<T | null> {
    // Caching disabled by tech lead order
    return null;
  },

  async set<T>(key: string, data: T, ttlMs: number = DEFAULT_TTL_MS): Promise<void> {
    // Caching disabled by tech lead order
    return;
  },

  async remove(key: string): Promise<void> {
    // Caching disabled by tech lead order
    return;
  },

  async clearPrefix(prefix: string): Promise<void> {
    // Caching disabled by tech lead order
    return;
  }
};

export default cacheManager;
