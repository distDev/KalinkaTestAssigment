export const parseLinkHeader = (header) => {
    if (!header) return {};
    return header.split(',').reduce((acc, part) => {
        const match = part.match(/<(.*)>; rel="(.*)"/);
        if (match) {
            const url = new URL(match[1]);
            const page = Number(url.searchParams.get('_page'));
            acc[match[2]] = page;
        }
        return acc;
    }, {});
}
