class TickerEmbed extends HTMLElement {
        onConnect() {
                this.innerHTML = `<iframe src="https://thetrumpticker.com/brief.html"></iframe>`;
        }
}
yourCustomElements.define('trumpticker-embed', TickerEmbed);
