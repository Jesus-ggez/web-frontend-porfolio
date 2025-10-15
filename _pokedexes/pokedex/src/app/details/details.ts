import { Component, inject, input } from '@angular/core';
import {PokeService} from '../core/services/poke.service';
import {NgOptimizedImage, TitleCasePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'poke-details',
    imports: [TitleCasePipe, NgOptimizedImage, RouterLink],
    styleUrl: './details.css',
    template: `
        @if ( pokeResource.isLoading() ) {
            <p>Loading ...</p>
        } @else if ( pokeResource.error() ) {
            <p>Error loading pokemon</p>
        } @else {
            @if ( pokeResource.value(); as pokemon ) {
                <div class="dtls">
                    <img
                        width="200"
                        height="200"
                        [ngSrc]="pokemon.sprites.front_default"
                        [alt]="name()"
                    />

                    <h1 class="title">{{ name() | titlecase }}</h1>
                    <div>
                    @for ( type of pokemon.types; track type ) {
                        <span class="bdg"> {{ type.type.name }} </span>
                    }
                    </div>

                    <a routerLink="/" class="door"> Back to pokemon list</a>
                </div>
            }
        }
    `,
})
export default class Details {
    readonly name = input<string>('');

    readonly #pokeService = inject(PokeService);
    protected readonly pokeResource = this.#pokeService.getPokemon(this.name);
}
