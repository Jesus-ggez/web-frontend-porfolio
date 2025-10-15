import { PokeResult} from "./poke-result.model";

export interface PokeList {
    counte: number;
    next: string;
    previuse: string;
    results: PokeResult[];
}
