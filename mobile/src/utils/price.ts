import "intl";
import "intl/locale-data/jsonp/pt-BR";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(value: number): string {
  if (!value || value === 0) {
    return formatter.format(0);
  }

  return formatter.format(value);
}
