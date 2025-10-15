import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import { ColorScheme } from "../shared/colors";
import { FontSizes } from "../shared/sized";

@customElement('x-header')
export class XHeader extends LitElement {
    private texts = {
        title1: 'Your AI-Powered',
        colored: 'Design',
        title2: 'Assistant',

        description1: [
            'Unlock your creative potential, ',
            'Seamlessly generate, customize, ',
        ],
        description2: [
            'and perfect your designs with ',
            'cutting-edge AI technology',
        ],

        leftButton: 'Get started',
        rightButton: 'More templates',

        urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibIm0yuqcSUx3xfwnT05Zj1ckNLeZEhO3ekw8adqfqA&s=10',
    };


    render() {
        return html`
            <section>
                <div>
                    <h2>
                        ${ this.texts.title1 }
                        <br>
                        <span>${ this.texts.colored }</span>
                        ${ this.texts.title2 }
                    </h2>
                    <p>
                        ${ this.texts.description1 }
                        <br>
                        ${ this.texts.description2 }
                    </p>
                    <div>
                        <button class="colored">${ this.texts.leftButton }</button>
                        <button>${ this.texts.rightButton }</button>
                        <hr></hr>
                    </div>
                </div>
                <img 
                    src="${this.texts.urlImage}"
                ></img>
            </section>
        `
    }

    static styles = css`
        :host {
            padding: 2rem 1rem 10px 1rem;
            border-radius: 8px;
            display: block;
            background: linear-gradient(
                to right,
                ${ unsafeCSS(ColorScheme.Secondary.frog) },
                ${ unsafeCSS(ColorScheme.Secondary.forest) }
            );
            position: relative;
            overflow: hidden;
        }
        span {
            color: ${ unsafeCSS(ColorScheme.Primary.darkGreen) };
        }
        hr {
            background: none;
            padding: .5rem;
            border: 0;
        }
        h2, p {
            font-size: ${ unsafeCSS(FontSizes.MovilFont.h2) };
            color: ${ unsafeCSS(ColorScheme.Primary.white) };
            margin: 1rem 1rem 10px 1rem;
            font-family: "Roboto";
        }
        p {
            font-size: ${ unsafeCSS(FontSizes.MovilFont.p) };
        }
        button {
            color: ${ unsafeCSS(ColorScheme.Primary.white) };
            background-color: rgba(0, 0, 0, 0);
            padding: 10px 2.5rem;
            border-color: none;
            border-style: none;
        }
        .colored {
            background-color: ${ unsafeCSS(ColorScheme.Primary.darkGreen) };
            border-radius: .5rem;
            margin-left: 6%;
        }
        section {
            display: flex;
            flex-direction: row;
            position: relative;
            height: 100%;
        }
        img {
            object-position: right;
            position: absolute;
            max-width: none;
            height: 150%;
            width: auto;
            right: -1em;
            top: -9vw;
            mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 30%,
                black 50%,
                black 100%
            );
            -webkit-mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 30%,
                black 50%,
                black 100%
            );
        }

        section > div {
            position: relative;
            z-index: 2;
            width: 60%;
            display: flex;
            flex-direction: column;
        }

        /* pc, tab, etc UI */
        @media (min-width: 768px) {
            h2 {
                font-size: ${ unsafeCSS(FontSizes.PcFont.h2) };
            }
            p {
                margin-bottom: 2rem;
                font-size: ${ unsafeCSS(FontSizes.PcFont.p) };
            }
            section > div {
                margin-left: 15%;
            }
            img {
                object-position: right;
                position: absolute;
                max-width: none;
                height: 150%;
                width: auto;
                right: 5em;
                top: -5vw;
                mask-image: radial-gradient(
                    ellipse at center,
                    black 100%,
                    black 50%,
                    black 30%,
                    transparent,
                );
                -webkit-mask-image: radial-gradient(
                    ellipse at center,
                    black 100%,
                    black 50%,
                    black 30%,
                    transparent,
                );
            }
        }
    `;
}
