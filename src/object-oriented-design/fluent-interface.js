const countries = [
    { name: 'Miami', country: 'usa' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Moscow ', country: ' Russia' },
];

const normalize = (coll) => {
    return coll
        .map(({ name, country }) => ({ name: name.toLowerCase(), country: country.toLowerCase() }))
        .reduce(((acc, { name, country }) => {
            const countryNormalized = country.trim()
            const cityNameNormalaized = name.trim()
            if (!acc.hasOwnProperty(countryNormalized)) {
                acc[countryNormalized] = []
            }

            acc[countryNormalized] = [...new Set([...acc[countryNormalized], cityNameNormalaized])].sort()
            return acc
        }), {})
}

export default normalize


normalize(countries); //?