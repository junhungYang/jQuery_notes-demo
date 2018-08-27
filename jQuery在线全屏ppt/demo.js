var index = 0
var lastIndex;
var timer;
//文本内容以数组形式排列，进行提取
var text = ['WE SHOULD ALL BE FEMINISTS',
    'HER START WAS NOT SO GORGEOUS',
    'FEMININE LINE SAINTMARY CORP',
    'WE SHOULD ALL BE FEMINISTS',
    'HER START WAS NOT SO GORGEOUS',
    'FEMININE LINE SAINTMARY CORP',
]

//页面初识状态
$('.bg img:eq(0)').css('animation', 'opacity 0s linear forwards')
$('.img img:eq(0)').css('animation', 'opacity 0s linear forwards')
$('.listBtn div:eq(0)').css('background', 'tomato')

//入口函数
function init() {
    clearInterval(timer);
    timer = setInterval(function () {
        moveStart()
        init()
    }, 4000)
}
init()

//事件
$('.listBtn').on('click', function (e) {
    if (e.target != this) {
        moveStart($(e.target).index())
        init()
    }
})
$('.leftBtn').on('click', function () {
    moveStart('', 'left')
    init()
})
$('.rightBtn').on('click', function () {
    moveStart()
    init()
})

//动画执行
function moveStart(listIndex, direction) {
    lastIndex = index
    if (listIndex) {
        index = listIndex
    } else if (direction == 'left') {
        index == 0 ? index = 5 : index--
    } else {
        index != 5 ? index++ : index = 0
    }
    $('.listBtn div').css('background', 'white')
    $('.listBtn div').eq(index).css('background', 'tomato')
    $('.bg img:eq(' + lastIndex + ')').css('animation', 'revOpacity 0.7s linear forwards')
    $('.bg img:eq(' + index + ')').css('animation', 'opacity 0.7s linear forwards')
    $('.img img:eq(' + lastIndex + ')').css('animation', 'revOpacity 0.7s linear forwards')
    $('.img img:eq(' + index + ')').css('animation', 'opacity 0.7s linear forwards')
    $('.text').html(text[index])
}