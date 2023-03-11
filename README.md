# lmnsqzy
**{ lmnsqzy }** is a Typescript-driven package for interacting with the LemonSqueezy API. Plug in your API token as an environment variable and start making some lemonade🍋.

## 🛠 Getting Started
```
npm i lmnsqzy
```

## 🍋 Usage (WIP)
```tsx
// ./lib/lmnsqzy.ts
import { connect } from 'lmnsqzy';

export const { lmnsqzy } = connect(`${process.env.LMNSQZY_API_TOKEN}`)

// aFileToBeNamed.ts
import { lmnsqzy } from '@/lib/lmnsqzy';

const { getStores } = lmnsqzy();

async function storeHandler(){

    const allStoresJSXExample = await getStores();


    // {
    //     allStoresJSXExample.map(e => (
    //         <div>
    //         ...
    //         <a href={`/stores/${e.data.id}`}>View store</a>
    //         ...
    //         </div>
    //     ))
    // }
}
```

## 🗃 Docs
TBC - WIP