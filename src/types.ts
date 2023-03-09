type TDomains = {
    // customers
    // files
    // orders
    // products
    // stores
    // users
    getUsers: (r: string) => string;
    // variants

}

export type TConnect = {
    lmnsqzy: () => TDomains;
    doesWork: () => string;
};

export type TLmnsqzyResponse = ''