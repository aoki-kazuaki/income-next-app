import { AxiosRequestConfig } from "axios";

// AxiosRequestConfigの元々の型に、将来的にretryが含まれることを考慮して_retry。
//「axios の標準仕様じゃないけど、リクエスト再送制御用の拡張フィールド」という意思表示
// 公式と衝突しそう or 拡張しそうな名前”には _ をつけると安全

export interface RetryAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}
