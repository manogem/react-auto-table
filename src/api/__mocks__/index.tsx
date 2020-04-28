const data = [
    {
        id: 1,
        name: 'Test use case 1'
    },
    {
        id: 2,
        name: 'Test use case 2'
    },
    {
        id: 3,
        name: 'Test use case 3'
    }
];

const compare = (a: any, b: any, value: any, direction: any) => {
    const aVal = String(a[value]).toUpperCase().replace(/\s/g, '');
    const bVal = String(b[value]).toUpperCase().replace(/\s/g, '');

    if (aVal > bVal) return 1*direction;
    if (bVal > aVal) return -1*direction;

    return 0;
};

export const fetchDataByValue = (value: string, currentPage: number, sortBy: string, sortDirection: number, itemsPerPage: number) => {
    const dataSearchResult = data.filter((obj: any) => {
        for (const key in obj) {
            if (obj[key] && String(obj[key]).toUpperCase().includes(value.toUpperCase())) {
                return true;
            }
        }
        return false;
    });

    dataSearchResult.sort((a, b) => compare(a, b, sortBy, sortDirection));

    const indexOfLastItem = Number(currentPage) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = {
        itemsPerPage,
        currentPage,
        pages: Math.ceil(dataSearchResult.length / itemsPerPage),
        data: dataSearchResult.slice(indexOfFirstItem, indexOfLastItem)
    };

    return new Promise((resolve, reject) => {
        const wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(currentData);
            reject('Wrong')
        }, 200)
    });
};


const fetchData = (currentPage: number, sortBy: string, sortDirection: number, itemsPerPage: number) => {
    data.sort((a, b) => compare(a, b, sortBy, sortDirection));

    const indexOfLastItem = Number(currentPage) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = {
        itemsPerPage,
        currentPage,
        pages: Math.ceil(data.length / itemsPerPage),
        data: data.slice(indexOfFirstItem, indexOfLastItem)
    };

    return new Promise((resolve, reject) => {
        const wait = setTimeout(() => {
            clearTimeout(wait);
            resolve(currentData);
            reject('Wrong')
        }, 0)
    });
};

export default fetchData;
