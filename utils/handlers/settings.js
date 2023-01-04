import moment from 'moment';


export const emptyHandler = (value, type) => {
    const emptyArr = [
        {
            type: "notNull",
            result: value !== null && value !== undefined
        },
        {
            type: "isNull",
            result: value === null && value === undefined
        },
        {
            type: "notEmptyStr",
            result: value !== '',
        },
        {
            type: "isEmptyStr",
            result: value === ''
        },
        {
            type: "notZeroLength",
            result: value?.length !== 0
        },
        {
            type: "isZeroLength",
            result: value?.length === 0
        },
        {
            type: "moreThanZero",
            result: value > 0
        },
        {
            type: "lessThanZero",
            result: value < 0
        },
        {
            type: "isZero",
            result: value === 0
        },
    ]
    for (let et of emptyArr) {
        if (et.type === type) {
            return et.result
        }
    }
}
export const strLenHandler = (str, len) => {
    return str?.length > len ? str?.substring(0, len) + '...' : str;
}
export const priceHandler = (amount, withExtra) => {
    const price = isNaN(parseFloat(amount)) ? 0 : parseFloat(amount);
    let value = '';
    let extra = withExtra ? 'تومان' : undefined;
    if (emptyHandler(price, 'notNull')) {
        value = price?.toLocaleString("fa-IR")
    }
    return { value, extra }
}
export const regHandler = (type, value) => {
    const regExperer = (regStr) => {
        return new RegExp(regStr)
    }
    const regTester = (expression) => {
        return expression.test(value)
    }
    const regexArr = [
        {
            type: "mobile",
            result: regTester(regExperer('^(\\+98|0|0098|98|098)?9\\d{9}$'))
        },
        {
            type: "email",
            result: regTester(regExperer('[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'))
        },
    ]
    for (let re of regexArr) {
        if (re.type === type) {
            return re.result
        }
    }
}
export const dateHandler = (type, value, extra) => {
    const dateObj = new Date(value)
    const dateArr = [
        {
            type: "toJalali",
            value: () => dateObj.toLocaleDateString("fa-IR")
        },
        {
            type: "addToTime",
            value: () => {
                const formatted = new Date(dateObj.getTime() + extra * 60000)
                return formatted.getFullYear()
                    + '-'
                    + (formatted?.getMonth() + 1)
                    + '-'
                    + formatted?.getDate()
                    + ' ' + formatted?.getHours()
                    + ':' + formatted?.getMinutes()
                    + ':'
                    + formatted?.getSeconds()
            }
        },
        {
            type: "timeDifference",
            value: () => {
                const currentTime = moment(new Date());
                const endTime = moment(value);
                let duration = moment.duration(currentTime.diff(endTime));
                return {
                    hours: Math.trunc(duration.asHours()),
                    days: Math.trunc(duration.asDays()),
                    minutes: Math.trunc(duration.asMinutes()),
                    socounds: Math.trunc(duration.asSeconds()),
                }
            }
        },
        {
            type: "toValidJalali",
            value: () => {
                let a = Date.parse(value.replace(/-/g, '/'))
                let b = new Date(a).toLocaleDateString("fa-IR")
                return b;
            }
        }

    ]
    for (let dt of dateArr) {
        if (dt.type === type) {
            return dt.value()
        }
    }
}
export const isNotSsrHandler = () => {
    if (typeof window !== "undefined") {
        return true
    }
    return false
}
export const scrollToBottom = () => {
    return window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
export const checkEquality = (value, equality, threeEquals) => {
    if (threeEquals) {
        return value === equality
    }
    return value == equality
}
export const isANumber = (value) => {
    return !isNaN(value)
}
export const isNotANumber = (value) => {
    return isNaN(value)
}