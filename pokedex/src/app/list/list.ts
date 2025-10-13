import { Component, inject } from '@angular/core';
import { PokeService } from '../core/services/poke.service';
import { Card } from './card/card';

@Component({
    selector: 'app-list',
    imports: [Card],
    styleUrl: './list.css',
    template: `
        <h1 class="title">My pokemon list</h1>
        <div class="poke-container">
            @if (pokeListResource.isLoading()) {
                <p>Loading ...</p>
            } @else if ( pokeListResource.error() ) {
                <p>Error loading pokemon</p>
            } @else {
                <div class="poke-container">
                    @let pokeList = pokeListResource.value();
                    @for ( pokeResult of pokeList?.results; track pokeResult ) {
                        <poke-card [pokeResult]="pokeResult" />
                    }
                </div>
            }
        </div>
    `
})
export class List {
    readonly #pokeService = inject(PokeService);

    protected readonly pokeListResource = this.#pokeService.getPokeList();
}
