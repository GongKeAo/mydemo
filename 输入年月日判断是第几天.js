let year = ''
let month = ''
let day = ''

//判断该年是不是闰年
function isRun(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return '闰年'
    } else {
        return '平年'
    }
}
let Run = isRun(year)
    // console.log(a)

//判断每个月有几天
function daysInMonth(month) {
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        // console.log('这个月有31天')
        return 31
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        // console.log('这个月有30天')
        return 30
    } else if (month === 2) {
        return judge_month()
    } else {
        console.log('错误的月份！！！')
    }

}

//判断该年的2月有多少天
function judge_month() {
    if (Run === '闰年') {
        // console.log('该月有29天')
        return 29
    } else if (Run === '平年') {
        return 28
    }
}
// console.log(judge_month())
// console.log(daysInMonth(2))
// 判断该日期对应的是该年的第几天

function daysInYear(year, month, day) {
    if (month === 1) {
        console.log('该日期是该年的第' + day + '天')
    } else if (month > 1 && month <= 12) {
        for (var i = 2, days = 0; i <= month; i++) {
            days += daysInMonth(i - 1)

        }
        console.log('该日期是该年的第' + (days += day) + '天')
    }

}

function insertDate(Y, M, D) {
    year = Y
    month = M
    day = D
}
insertDate(2016, 11, 9)

daysInYear(year, month, day)