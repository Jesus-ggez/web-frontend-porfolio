export default interface Pokemon {
    name: string;
    url: string;
}

export default interface PokemonResponse {
    count: number;
    next: string;
    previous: null;
    results: Pokemon[];
}

export const CardStyle: Partial<CSSStyleDeclaration> = {
    backgroundColor: '#dcdcdc',
}

export const Urls = {
    imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon',

    urlBase: 'https://pokeapi.co/api/v2/',
    get target() {
        return this.urlBase + '/pokemon?limit=10';
    },
}
