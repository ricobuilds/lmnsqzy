# lmnsqzy
**{ lmnsqzy }** is a Typescript-driven package for interacting with the LemonSqueezy API. Plug in your API token as an environment variable and start making some lemonade🍋.

 ![commits](https://img.shields.io/github/commit-activity/m/0xreeko/lmnsqzy) • ![downloads](https://img.shields.io/npm/dw/lmnsqzy) • ![issues](https://img.shields.io/github/issues/0xreeko/lmnsqzy)

## 🛠 Getting Started
```
npm i lmnsqzy
```

## 🍋 Usage (WIP)

![LMNSQZY Promo](https://user-images.githubusercontent.com/35407606/225133999-d747f518-9965-40c6-8fec-25935d2fbac4.png)

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
