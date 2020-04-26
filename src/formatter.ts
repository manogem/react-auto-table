export const FORMAT_TYPES = {
    TIMESTAMP: 'timestamp',
    BOOLEAN: 'boolean',
};


export const formatType = (value: any, type?: string | null) => {
    switch (type){
        case FORMAT_TYPES.TIMESTAMP:
            let dateString = new Date(value).toLocaleString('pl-PL', { hour12: false });
            value = dateString.substr(0, dateString.indexOf(','));
            break;
        case FORMAT_TYPES.BOOLEAN:
            value = value.toString();
            break;
    }

    return value;
};