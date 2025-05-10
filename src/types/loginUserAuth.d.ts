/**jotaiで保持するユーザーのログイン情報保持 */
export type LoginUserAuth = {
  email: string;
  name: string;
  UuId: string;
  createdAt: string;
  lastLoginAt: string;
  avatarUrl: string;
  role: "admin" | "user" | "guest";
};
