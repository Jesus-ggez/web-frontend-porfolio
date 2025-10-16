import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import { Logos } from "../shared/logipsum";
import {ColorScheme} from "../shared/colors";


@customElement('x-carousel')
export class XCarousel extends LitElement {
    private logos = Logos;

    render() {
        return html`
            <section>
                <div>
                    ${ Object.values(this.logos).map(logo => unsafeHTML(logo)) }
                </div>
                <div>
                    ${ Object.values(this.logos).map(logo => unsafeHTML(logo)) }
                </div>
            </section>
        `;
    }
    static styles = css`
        section {
            background-color: ${ unsafeCSS(ColorScheme.Primary.greeny) };
            margin 100px auto;
            overflow-x: auto;
            display: flex;
            width: 100%;
        }
        section::-webkit-scrollbar {
            display: none;
        }
        div{
            display: flex;
            animation: rotate 10s infinite linear;
            justify-content: center;
            align-items: center;
            padding-right: 1em;
            gap: 1em;
        }
        svg {
            padding: 1rem;
            height: 5rem;
            flex: 1 1 0;
        }
        @keyframes rotate {
            from { translate: 0; }
            to { translate: -100% }
        }
    `;
}
