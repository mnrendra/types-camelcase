type LowerCaseFirstLetter<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? `${Lowercase<First>}${Rest}`
    : S

/**
 * A utility types for converting a string type to camel case.
 */
export type CamelCase<T extends string> =
  T extends `${infer First}${infer Rest}`
    ? LowerCaseFirstLetter<`${Lowercase<First>}${Rest}`>
    : T

export default CamelCase
