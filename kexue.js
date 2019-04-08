//operator 运算符
var Boo = false;  //判断是否按下计算符号的布尔变量；
var result = 0;  //存储计算数据的变量
var ope; //存储计算符号的变量

function $(x) {
    return document.getElementById(x)
}

function decimal() {
    var txt = $('txtnum');
    if (Boo) {
        txt.value = '0.' //若接受过运算符，文本框清零
    } else {
        if (txt.value.indexOf('.') == -1) { //判断数值中是否已经有小数点
            txt.value += '.'; //若没有则加上
        }
    }
    Boo = false; //若接受过运算符，文本框不能清零
}

//indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
//如果要检索的字符串值没有出现，则该方法返回 -1。

function num(Num) {
    var txt = $('txtnum');
    if (Boo) {
        txt.value = Num;
        Boo = false;
    } else {
        if (txt.value == '0') {
            txt.value = Num
        } else {
            txt.value += Num;
        }
    }
}

function compute(op) {
    var onum = $('txtnum').value;
    if (onum == '') {
        onum = 0
    }
    Boo = true;
    //定义运算符
    switch (ope) {
        case '+':
            result += parseFloat(onum);
            break;
        case '-':
            result -= parseFloat(onum);
            break;
        case '*':
            result *= parseFloat(onum);
            break;
        case '/':
            result /= parseFloat(onum);
            break;
        case '=':
            result = parseFloat(onum);
            break;
        case '%':
            result %= onum;
            break;
        case 'x^y':
            result = Math.pow(result, onum);
            break;
        default:
            result = parseFloat(onum)
    }
    $('txtnum').value = result;
    ope = op;

}

function math(op) {
    var onum = $('txtnum').value;
    if (onum == '') {
        alert('数据不能为空')
    }
    ;
    Boo = true;
    //定义高级数学函数的计算方法
    with (Math) {
        switch (op) {
            case 'sin':
                result = sin(onum);
                break;
            case 'cos':
                result = cos(onum);
                break;
            case 'tan':
                result = tan(onum);
                break;
            case 'asin':
                result = asin(onum);
                break;
            case 'acos':
                result = acos(onum);
                break;
            case 'atan':
                result = atan(onum);
                break;
            case 'PI':
                result = PI;
                break;
            case '1/x':
                result = 1 / onum;
                break;
            case 'exp':
                result = exp(onum);
                break;
            case 'lnx':
                result = log(onum);
                break;
            case 'lgx':
                result = log(onum) / log(10);
                break;

            case 'i':
                result = floor(onum);
                break;

            case 'n!':
                result = jc(onum);
                break;
            default:
                result = parseFloat(onum);
        }
    }
    $('txtnum').value = result;
}

//定义阶乘方法
function jc(a) {
    if (a == 1) {
        return 1;
    } else {
        return jc(a - 1) * a
    }
}

//定义正负号的方法
function reverse() {
    var Num1 = $('txtnum').value;
    if (Num1 == '') {
        alert('数据不能为空')
    } else {
        $('txtnum').value *= -1;
    }

}

//定义退格的方法
function backspace() {
    var txt = $('txtnum');
    txt.value = txt.value.substring(0, txt.value.length - 1);
    if (txt.value == '') {
        txt.value = 0
    }
}