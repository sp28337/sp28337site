/**
 * Placeholder auth module.
 *
 * Future integration examples:
 * - JWT flow with FastAPI
 * - Session-based auth
 * - OAuth providers
 */
export type UserSession = {
  id: string;
  email: string;
  role: 'admin' | 'editor' | 'client';
};

export const isAuthenticated = (_session: UserSession | null): boolean => {
  return Boolean(_session);
};
