/**
 * 베스트앨범
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 */

function solution(genres, plays) {
    /*
        {
            classic: [ [ 3, 800 ], [ 0, 500 ], [ 2, 150 ] ],
            pop: [ [ 4, 2500 ], [ 1, 600 ], [ 6, 600 ] ],
            kpop: [ [ 5, 9999 ] ]
        }
        [ [ 'kpop', 9999 ], [ 'pop', 3700 ], [ 'classic', 1450 ] ]
    */
    const genresData = {};
    const sumOfPlays = [];

    genres.forEach((genre, idx) => {
        genresData[genre] = genresData[genre] || [];
        genresData[genre].push([idx, plays[idx]]);
    });

    for (let key in genresData) {
        genresData[key].sort((right, left) => left[1] - right[1]);
        const total = genresData[key].reduce((acc, cur) => acc + cur[1], 0);
        sumOfPlays.push([key, total]);
    }

    sumOfPlays.sort((right, left) => left[1] - right[1]);

    const result = sumOfPlays
        .map((el) => {
            if (genresData[el[0]][1]) return [genresData[el[0]][0][0], genresData[el[0]][1][0]];
            else return [genresData[el[0]][0][0]];
        })
        .flat();

    return result;
}

solution(
    ['classic', 'pop', 'classic', 'classic', 'pop', 'kpop', 'pop'],
    [500, 600, 150, 800, 2500, 9999, 600]
);
