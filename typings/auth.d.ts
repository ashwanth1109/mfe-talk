declare module "auth/AuthPage" {
  const mount: (
    el: HTMLDivElement | null,
    history?: import("history").History
  ) => null;

  export { mount };
}
