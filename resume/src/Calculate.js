function calculate(start, end, units, standard, lunch, _break) {
    const shiftDuration = end - start;
    const restDuration = lunch + _break;
    const workDuration = Math.abs(shiftDuration - restDuration);
    const unitsExpected = standard * workDuration;
    const proportion = units / unitsExpected;
    const performance = Math.round(proportion * 1000)/10;
    return performance;
}

export default calculate;