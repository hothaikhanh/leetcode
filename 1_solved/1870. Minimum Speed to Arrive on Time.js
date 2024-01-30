/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */

var minSpeedOnTime = function (dist, hour) {
    let min_speed = 1,
        max_speed = Math.pow(10, 7),
        slowest_speed = Math.pow(10, 7);

    var calcHour = (speed, dist) => {
        let time;
        for (let d of dist) {
            if (time > Math.floor(time)) time = Math.ceil(time);
            time += d / speed;
        }
        return time;
    };

    while (min_speed <= max_speed) {
        let mid = Math.floor((min_speed + max_speed) / 2);
        let tempHour = calcHour(mid, dist);

        switch (true) {
            case tempHour > hour:
                min_speed = mid + 1;
                break;

            case tempHour < hour:
                max_speed = mid - 1;
                if (mid < slowest_speed) slowest_speed = mid;
                break;

            case tempHour == hour:
                return mid;
        }
    }

    return slowest_speed !== Math.pow(10, 7) ? slowest_speed : -1;
};

console.log(minSpeedOnTime([5, 3, 4, 6, 2, 2, 7], 10.92));
