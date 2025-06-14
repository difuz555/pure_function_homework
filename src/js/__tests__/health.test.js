import healthIndicator from '../app.js';

const dataList = [
    [{name: 'Wizard', health: 90}, 'healthy'],
    [{name: 'Knight', health: 5}, 'critical'],
    [{name: 'Thief', health: 40}, 'wounded'],
]

test.each(dataList)('testing healthIndicator function  for %o', (character, expected) => {
    const result = healthIndicator(character);
    expect(result).toBe(expected);
})
