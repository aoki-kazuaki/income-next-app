/**jotaiで保持するユーザーのログイン情報保持 */
export type UserCurrent = {
  email: string;
  name: string;
  uuid: string;
  createdAt: string;
  lastLoginAt: string;
  avatarUrl: string;
  role: "admin" | "user" | "guest";
};
