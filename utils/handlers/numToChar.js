
export  function toEnglishDigits(num) {

    if (num === null || num === undefined) {
        return null;
    }

    if (typeof num !== 'string' || num.length === 0)
        return num.toString();

    const faDigits = '۰۱۲۳۴۵۶۷۸۹';
    const arDigits = '٠١٢٣٤٥٦٧٨٩';
    let output = "";
    for (let ipos = 0; ipos < num.length; ipos++) {

        let faIndex = faDigits.indexOf(num[ipos]);
        if (faIndex >= 0) {
            output += faIndex.toString();
            continue;
        }
        let arIndex = arDigits.indexOf(num[ipos]);
        if (arIndex >= 0) {
            output += arIndex.toString();
            continue;
        }
        output += num[ipos];
    }
    return output.replace(/,/g, "");
}

export function numToCharConverter(input, level = 0) {


    if (input === null) {
        return "";
    }

    let num = parseInt(toEnglishDigits(input));


    // convert negative number to positive and get wordify value
    if (num < 0) {
        num = num * -1;
        return "منفی " + numToCharConverter(num, level);
    }
    if (num === 0) {
        if (level === 0) {
            return "صفر";
        } else {
            return "";
        }
    }
    let result = "";
    const yekan = ["اول", "دوم", "سوم", "چهارم", "پنجم", "ششم", "هفتم", "هشتم", "نهم"],
        dahgan = ["بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
        sadgan = ["یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"],
        dah = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هیجده", "نوزده"];

    if (level > 0) {
        result += " و ";
        level -= 1;
    }

    if (num < 10) {
        result += yekan[num - 1];
    } else if (num < 20) {
        result += dah[num - 10];
    } else if (num < 100) {
        result += dahgan[Math.floor(num / 10) - 2] + numToCharConverter(num % 10, level + 1);
    } else if (num < 1000) {
        result += sadgan[Math.floor(num / 100) - 1] + numToCharConverter(num % 100, level + 1);
    } else if (num < 1000000) {
        result += numToCharConverter(Math.floor(num / 1000), level) + " هزار" + numToCharConverter(num % 1000, level + 1);
    } else if (num < 1000000000) {
        result += numToCharConverter(Math.floor(num / 1000000), level) + " میلیون" + numToCharConverter(num % 1000000, level + 1);
    } else if (num < 1000000000000) {
        result += numToCharConverter(Math.floor(num / 1000000000), level) + " میلیارد" + numToCharConverter(num % 1000000000, level + 1);
    } else if (num < 1000000000000000) {
        result += numToCharConverter(Math.floor(num / 1000000000000), level) + " تریلیارد" + numToCharConverter(num % 1000000000000, level + 1);
    }

    return result;
}

export function wordifyRials(num) {
    if (num === null || num === undefined || num === "") {
        return "";
    }
    return numToCharConverter(num, 0) + " ریال";
}

export function wordifyRialsInTomans(num) {
    if (num === null || num === undefined || num === "") {
        return "";
    }
    if (typeof num == "string") {
        var cleanNumber = toEnglishDigits(num);
        num = parseInt(cleanNumber);
    }

    if (num >= 10 || num <= -10) {
        num = Math.floor(num / 10);
    } else {
        num = 0;
    }
    return numToCharConverter(num, 0) + " تومان";
}