const Meetone = {
  symbol: 'meetone',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.916 21.379c.427-1.927.854-3.9 1.282-5.823.112-.449.224-.954.336-1.515.056.225.056.281.112.393a805.586 805.586 0 0 0 3.112 9.934L9.916 21.38zm7.234 3.048l.05-.176c1.066-3.253 2.076-6.507 3.141-9.76.057-.113.113-.281.169-.45.056.169.112.225.112.337.474 2.318.998 4.587 1.525 6.853l-4.997 3.196zm5.616-2.069a.553.553 0 0 0 .268-.014c.393-.112.561-.449.449-.954-.505-2.131-.954-4.32-1.459-6.451-.28-1.122-.504-2.3-.785-3.422a.62.62 0 0 0-.304-.428l.024-.02-4.488-6.732s-.393-.505-1.01 0l-4.6 6.9.065.033a1.227 1.227 0 0 0-.177.415c-.056.45-.169.898-.28 1.347-.618 2.805-1.291 5.61-1.908 8.414-.056.337 0 .617.28.786a.664.664 0 0 0 .364.11l6.146 3.866c.123.278.329.4.615.4.22 0 .392-.073.516-.233l6.284-4.017zm-2.843-10.57a9.214 9.214 0 0 1-.086.29c-1.01 3.142-2.02 6.34-3.03 9.48-.224.786-.505 1.515-.729 2.3h-.168c-1.229-4.02-2.513-8.096-3.797-12.116l3.853-5.835 3.957 5.882z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#000"/><g fill="#FFF"><path fill-opacity=".703" d="M8.673 22.007l6.956 4.376h.842l6.844-4.376-1.066-.841-6.227 3.983-6.451-3.983zm3.366-10.153l3.927-5.947 4.039 6.003.954-.842-4.488-6.731s-.393-.505-1.01 0l-4.6 6.9 1.178.617z"/><path d="M16.078 23.859c.224-.786.505-1.515.73-2.3 1.01-3.142 2.019-6.34 3.029-9.481.056-.168.112-.393.168-.56.112-.338.28-.506.617-.506a.61.61 0 0 1 .617.505c.28 1.122.505 2.3.785 3.422.505 2.132.954 4.32 1.459 6.451.112.505-.056.842-.449.954-.393.112-.673-.168-.785-.673-.561-2.412-1.122-4.825-1.627-7.293 0-.112-.056-.168-.112-.337a3.714 3.714 0 0 1-.169.45c-1.065 3.253-2.075 6.507-3.141 9.76-.168.617-.393 1.178-.561 1.795-.112.393-.337.561-.673.561-.337 0-.561-.168-.673-.56-1.234-3.871-2.469-7.742-3.647-11.613-.056-.112-.056-.168-.112-.393a32.883 32.883 0 0 1-.336 1.515c-.45 2.02-.898 4.095-1.347 6.115-.112.56-.56.841-1.01.56-.28-.168-.336-.448-.28-.785.617-2.805 1.29-5.61 1.907-8.414.112-.45.225-.898.28-1.347.113-.448.337-.673.674-.673s.56.225.673.673c1.29 4.04 2.58 8.135 3.815 12.174h.168z"/></g></g>`;
  }
};
export default Meetone;
