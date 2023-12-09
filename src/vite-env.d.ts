/// <reference types="vite/client" />

declare module "*.png?audio" {
  const image: Record<string, any>;
  export default image;
}
