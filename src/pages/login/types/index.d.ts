export interface ILoginParams {
  updateWay: (name: "message" | "pwd") => void;
  title?: string;
}
