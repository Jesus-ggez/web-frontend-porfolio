import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import { ColorScheme } from "../shared/colors";
import { FontSizes } from "../shared/sized";

@customElement('x-creativity')
export class XCreativity extends LitElement {
    private texts = {
        title1: 'Unleash Your',
        coloredTitle: 'Creativity',

        description1: [
            'Discover how our AI-Powered Design Assistant ',
            'transform your ideas into stunning designs effortiessly. ',
            'Follow these simple steps to turn your vision into reality.',
        ]
    }

    render() {
        return html`
            <section>
                <div>
                    <h2>
                        ${ this.texts.title1 }
                        <span>
                            ${ this.texts.coloredTitle }
                        </span>
                    </h2>
                    <p>
                        ${ this.texts.description1 }
                    </p>
                </div>
                <div>
                </div>
            </section>
        `;
    }
    static styles = css`
        :host {
            padding: 2rem 1rem 10px 1rem;
            border-radius: 8px;
            display: block;
            position: relative;
            overflow: hidden;
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
        span {
            color: ${ unsafeCSS(ColorScheme.Primary.darkGreen) };
        }
    `;
}
