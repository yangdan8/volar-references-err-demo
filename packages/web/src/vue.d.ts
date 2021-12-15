declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const cmp: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >;
  export default cmp;
}
