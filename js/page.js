var $sub = Number($('#sub').attr('data-url'))
const DataObject = [
    {
        'src' : '',
        'img' : './images/page/page01.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page02.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page03.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page04.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page05.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page06.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page07.jpg',
        'text' : ''
    },
    {
        'src' : '',
        'img' : './images/page/page08.jpg',
        'text' : ''
    }
]

for (let index = 0; index < $('.sub-menu li').length; index++) {
    DataObject[index].src =  $('.sub-menu li').eq(index).find('a').attr('href')
    DataObject[index].text =  $('.sub-menu li').eq(index).find('span').text().trim()
}
   


    if($sub == 0){
        $('.prev').append(
            '<a href=\"' + DataObject[(DataObject.length - 1)].src + '\">'+
                '<div class="pageArrow">'+
                    '<img src="./images/ico/pageArrow.png" alt="arrow" class="prevA">'+
                    '<span>'+
                         DataObject[(DataObject.length - 1)].text +
                    '</span>'+
                '</div>'+
                '<img src="'+ DataObject[(DataObject.length - 1)].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
          )  
          $('.next').append(
            '<a href="'+ DataObject[$sub + 1].src +'">'+
                '<div class="pageArrow">'+
                    '<span>'+
                         DataObject[$sub + 1].text +
                    '</span>'+
                    '<img src="./images/ico/pageArrow.png" alt="arrow" class="nextA">'+
                    
                '</div>'+
                '<img src="'+ DataObject[($sub + 1)].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
            
        ) 
    }
    else if($sub == DataObject.length - 1){
        $('.prev').append(
            '<a href="'+ DataObject[$sub - 1].src +'">'+
                '<div class="pageArrow">'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="prevA">'+
                    '<span>'+
                         DataObject[$sub - 1].text +
                    '</span>'+
                '</div>'+
                '<img src="'+ DataObject[$sub - 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
        $('.next').append(
            '<a href="'+ DataObject[0].src +'">'+
                '<div class="pageArrow">'+
                '<span>'+
                        DataObject[0].text +
                '</span>'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="nextA">'+
                '</div>'+
                '<img src="'+ DataObject[0].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
    }
    else if($sub == 3){
        $('.prev').append(
            '<a href="'+ DataObject[$sub - 1].src +'">'+
                '<div class="pageArrow">'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="prevA">'+
                    '<span>'+
                         DataObject[$sub - 1].text +
                    '</span>'+
                '</div>'+
                '<img src="'+ DataObject[$sub - 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
        $('.next').append(
            '<a href="'+ DataObject[$sub + 1].src +'">'+
                '<div class="pageArrow">'+
                    '<span>'+
                         DataObject[$sub + 1].text +
                    '</span>'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="nextA">'+
                '</div>'+
                '<img src="'+ DataObject[$sub + 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
    }else if($sub == 5){
        $('.prev').append(
            '<a href="'+ DataObject[$sub - 1].src +'">'+
                '<div class="pageArrow">'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="prevA">'+
                    '<span>'+
                         DataObject[$sub - 1].text +
                    '</span>'+
                '</div>'+
                '<img src="'+ DataObject[$sub - 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
        $('.next').append(
            '<a href="'+ DataObject[$sub + 1].src +'">'+
                '<div class="pageArrow">'+
                    '<span>'+
                         DataObject[$sub + 1].text +
                    '</span>'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="nextA">'+
                '</div>'+
                '<img src="'+ DataObject[$sub + 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
    }else if($sub == 6){
        $('.prev').append(
            '<a href="'+ DataObject[$sub - 1].src +'">'+
                '<div class="pageArrow">'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="prevA">'+
                    '<span>'+
                         DataObject[$sub - 1].text +
                    '</span>'+
                '</div>'+
                '<img src="'+ DataObject[$sub - 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
        $('.next').append(
            '<a href="'+ DataObject[$sub + 1].src +'">'+
                '<div class="pageArrow">'+
                    '<span>'+
                         DataObject[$sub + 1].text +
                    '</span>'+
                    '<img src="./images/sub/d/pageArrow.png" alt="arrow" class="nextA">'+
                '</div>'+
                '<img src="'+ DataObject[$sub + 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
    }else{
        $('.prev').append(
            '<a href="'+ DataObject[$sub - 1].src +'">'+
                '<div class="pageArrow">'+
                    '<img src="./images/ico/pageArrow.png" alt="arrow" class="prevA">'+
                    '<span>'+
                         DataObject[$sub - 1].text +
                    '</span>'+
                '</div>'+
                '<img src="'+ DataObject[$sub - 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
        $('.next').append(
            '<a href="'+ DataObject[$sub + 1].src +'">'+
                '<div class="pageArrow">'+
                    '<span>'+
                         DataObject[$sub + 1].text +
                    '</span>'+
                    '<img src="./images/ico/pageArrow.png" alt="arrow" class="nextA">'+
                '</div>'+
                '<img src="'+ DataObject[$sub + 1].img +'" alt="경상북도정신건강복지센터" class="img-fluid">'+
            '</a>'
        ) 
    }