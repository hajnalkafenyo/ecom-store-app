export function formatCurrency(amount) {
    return `${frFormatter(Math.round(amount * 100) / 100)}\u00A0kr`
}

function frFormatter(amount) {
    const f = new Intl.NumberFormat('hu-HU');
    return (f.format(amount));
}