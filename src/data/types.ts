export type Game = "pokemon" | "one-piece";

export type PokemonSetType = "main" | "special" | "anniversary";
export type OnePieceSetType = "main" | "special" | "anniversary" | "starter deck";
export type SetType = PokemonSetType | OnePieceSetType;

export type Product = {
    slug: string;
    name?: string;
    front?: string;
    back?: string;
    promo?: string;
};

export type ProductRow =
    | { layout: "full"; product: Product }
    | { layout: "pair"; products: [Product, Product] };

export type TCGSet = {
    game: Game;
    name: string;
    slug: string;
    code: string;
    era: string;
    type: SetType;
    released: string;
    cardCount: number;
    products?: ProductRow[];
};
