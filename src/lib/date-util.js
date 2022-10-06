const MONTH = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export function parseDate(dateStr) {
    if (!dateStr) {
        return "Present";
    }
    const date = new Date(dateStr);
    return `${MONTH[date.getMonth()]} ${date.getFullYear()}`;
}