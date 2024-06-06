# @mnrendra/types-camelcase
TypeScript utility types for converting a string type to camel case.

## Install
```bash
npm i -D @mnrendra/types-camelcase
```

## Usage
```typescript
import type { CamelCase } from '@mnrendra/types-camelcase'

type Uppercase = 'UpperCase'

type Camelcase = CamelCase<Uppercase>

const camelcase: Camelcase = 'upperCase'

console.log(camelcase)
```

## Types
```typescript
import type {
  CamelCase // A utility types for converting a string type to camel case.
} from '@mnrendra/types-camelcase'
```

## License
[MIT](https://github.com/mnrendra/types-camelcase/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)