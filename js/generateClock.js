function generateClock(data) {
    console.log(data);

    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const time = data[i];
        HTML += `<div class="time">
                    <div class="number">${time.number}</div>
                    <div class="label">${time.label}</div>
                </div>`;
    }


    return HTML;
}

export { generateClock }