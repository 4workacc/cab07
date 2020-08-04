import React from 'react';
import './test0.css';

class Test0 extends React.Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            questBase : [
                [
                    "type0",
                    "Азначэнне адказвае на пытанні:",
                    [
                        "Які? Якая? Якое? Якія?", 
                        "Што робіць? Што зробіць?", 
                        "Чый? Чыя? Чыё? Чые?",
                        "",
                        ""],
                    "13"
                ],
                [
                    "type0",
                    "Дапасаваныя азначэнні звязваюцца з азначаемым словам спосабам (спосабамі):",
                    [
                        "кіравання", 
                        "прымыкання", 
                        "дапасавання",
                        "",
                        ""],
                    "2"
                ],
                [
                    "type0",
                    "Адзначце словазлучэнні:",
                    [
                        "стары лес", 
                        "каля лесу",
                        "ісці лесам", 
                        "елкі і хвоі   ",
                        "шумяць верхавіны"],
                    "13"
                ],
                [
                    "type0",
                    "Адзначце правільныя сцвярджэнні:",
                    [ 
                        "Кампененты словазлучэнняў звязаны падпарадкавальнай сувяззю.",
                        "Словазлучэнне – гэта сінтаксічная адзінка, якая складаецца з двух ці больш слоў.",
                        "Словазлучэнне, у адрозненне ад слова, называе прадмет, прымету дзеяння больш канкрэтна і дакладна.",
                        "У адпаведнасці з марфалагічным выражэннем галоўнага слова словазлучэнні падзяляюцца на дзеяслоўныя, іменныя, прыназоўнікавыя.",
                        "Дапасаванне – спосаб сувязі, пры якім залежнае слова ставіцца ў тых жа граматычных формах, што і галоўнае."
                    ],
                    "135"
                ],
                [
                    "type0",
                    "Адзначце іменныя словазлучэнні:",
                    [
                        "стомлены чалавек",
                        "вельмі стаміцца",
                        "чырвоны ад марозу",
                        "нечакана для ўсіх",
                        "ісці па дарозе"
                    ],
                    "13"
                ],
                [
                    "type0",
                    "Адзначце словазлучэнні, у якіх словы звязаны сувяззю дапасавання:",
                    [
                        "шчырыя словы",
                        "чацвёрты паверх",
                        "вельмі хутка",
                        "нашы магчымасці",
                        "словы ўдзячнасці"
                    ],
                    "124"
                ],
                [
                    "type0",
                    "Адзначце простыя сказы:",
                    [
                        "Ля берага, у вялікай палонцы, гайдалася дашчатая лодка, пашпакляваная і прасмоленая.",
                        "Днём была пагода, ярка свяціла нізкае чырвонае сонца.",
                        "На дварэ толькі шапацеў па саламянай страсе, булькатаў па нябачных лужынах дождж.",
                        "Палянкі зноў змяніліся лесам, то стройным баравым, то нізкім балотным.",
                        "Дождж перастаў, але дзьме моцны вецер."
                    ],
                    "134"
                ],
                [
                    "type0",
                    "Выберыце правільнае сцвярджэнне (сцвярджэнні):",
                    [
                        "Простым называецца сказ, у якім адна граматычная аснова.",
                        "Простым называецца сказ, граматычная аснова якога складаецца з аднаго галоўнага члена – дзейніка або выказніка.",
                        "Развітым называецца сказ, які мае дзве і больш граматычныя асновы.",
                        "",
                        ""
                    ],
                    "1"
                ],
                [
                    "type0",
                    "Якая характарыстыка з’яўляецца правільнай у адносінах да сказа “Ноч”? Адзначце правільны адказ:",
                    [
                        "аднасастаўны,  развіты",
                        "аднасастаўны, неразвіты",
                        "двухсастаўны, развіты",
                        "двухсастаўны, неразвіты",
                        ""
                    ],
                    "2"
                ],
                [
                    "type0",
                    "Адзначце сказы з састаўным дзеяслоўным выказнікам:",
                    [
                        "Хутка тут будуць бялець рамонкі.",
                        "Я хацеў бы пабываць у Белавежскай пушчы.",
                        "Салаўі ў цёмным лесе пяюць аб шчасці і тузе.",
                        "Лес стаяў спакойны і нахмураны.",
                        "Душа і голас мой у вершах застануцца жыць."
                    ],
                    "25"
                ],
                [
                    "type0",
                    "Адзначце сказы, у якіх паміж дзейнікам і выказнікам (на месцы пропуску) трэба паставіць працяжнік:",
                    [
                        "Без птушак лес _ сірата.",
                        "Пра ўсё даведацца і ўсё ўбачыць _ вось мая  мара.",
                        "Вочы _ быццам зоркі.",
                        "Плошча поля _ тры гектары.",
                        "Кот і мышы _ не таварыш."
                    ],
                    "124"
                ],
                [
                    "type0",
                    "Адзначце аднасастаўныя сказы:",
                    [
                        "На гонары далёка не паедзеш.",
                        "З забыцця вывела мяне трывожнае вухканне балотнага бугая.",
                        "У расчыненыя дзверы плыла вільготная свежасць.",
                        "Сяджу на беразе і лаўлю рыбу.",
                        "Вось і прытулак."
                    ],
                    "145"
                ],
                [
                    "type0",
                    "Няпоўнымі могуць быць:",
                    [
                        "толькі простыя сказы",
                        "толькі складаныя сказы",
                        "і простыя, і складаныя.",
                        "",
                        ""
                    ],
                    "2"
                ],
                [
                    "type0",
                    "Адзначце сказы, у якіх трэба ставіць коску (коскі):",
                    [
                        "Дзеці _выпушчаныя з класа_ пабеглі талакой.",
                        "Працяты марозам_снег скрыпеў пад нагамі.",
                        "Янка Купала_ Іван Дамінікавіч Луцэвіч _сядзеў за сталом.",
                        "Не змаўкаючы_гула завіруха.",
                        ""
                    ],
                    "124"
                ],
                [
                    "type0",
                    "Адзначце сказы, у якіх трэба ставіць коску (коскі):",
                    [
                        "Я_відаць_ не паспеў зрабіць усё.",
                        "Рэчка_каму здавалася?_пачынала мялець.",
                        "Мікалай _мы ўсе яго так называлі_ важна ўстаў.",
                        "",
                        ""
                    ],
                    "1"
                ],
                [
                    "type1",
                    `Даданы член сказа, які абазначае аб’ект і адказвае на пытанні ўскосных склонаў, - гэта… `,
                    [
                        "Закончыце фармулёўку"
                    ],
                    "дапаўненне"
                ],
                [
                    "type1",
                    `Не тужы ты, Неман, адзінока па красуні Прыпяці шырокай.`,
                    [
                        "Знайдзіце граматычную аснову і выпішыце яе:"
                    ],
                    "Не тужы ты"
                ],
                [
                    "type1",
                    `А)Маладосць – КРАСА людзей, найлепшы час.\n
                    Б)Мы сагрэем ПЛАНЕТУ сваімі рукамі, каб наступнікам нашым паднесці яе ў дар.\n
                    В)Добры гаспадар МІХАСЬ.\n
                    Г)Сняцца рэкі і горы ПЕРАДВЯЧЭРНЯЙ ПАРОЙ і світальныя зоры над любімай зямлёй\n                    
                    1)Дзейнік    2)Азначэнне    3)Акалічнасць   4)Дапаўненне   5)Выказнік.
                    `,
                    [
                        "Устанавіце адпаведнасць паміж выдзеленымі словамі і іх сінтаксічнай  роляй у сказе. Адказ запішыце. Напрыклад, А3Б2В4Г1:"
                    ],
                    "А5Б4В1Г3"
                ],
                [
                    "type1",
                        `1)Успамінаеш шчымлівае, да болю далёкае маленства і такімі маладымі і светлымі бачыш абліччы родных і блізкіх, настаўнікаў, сяброў.
                        2)Розуму грашыма не заменіш.
                        3)Халодная, усеўладная і бясконцая бель.
                        4)Праўды не схаваеш.
                        5)У лесе не чуваць нават подыху ветру.
                    `,
                    [
                        "Знайдзіце безасабовы сказ і выпішыце яго граматычную аснову.:"
                    ],
                    "не чуваць"
                ],
                [
                    "type1",
                       `А)Тут, дзе бяроза, заўсёды пануе цішыня глыбокага смутку па навекі супакоеным маладым сэрцы.
                        Б)Востра тады пахла гаркаватай лазой, талым снегам, вільготным халадком.
                        В)Залатым лесам называлі гэту мясціну.
                        Г)Суджанага і канём не аб’едзеш.
                        1)Няпэўна-асабовы    2)Пэўна-асабовы   3)Двухсастаўны   4)Безасабовы   5)Абагульнена-асабовы
                        `,
                    [
                        "Устанавіце адпаведнасць паміж сказам і яго тыпам. Адказ запішыце  Напрыклад, А3Б2В4Г1:"
                    ],
                    "А3Б4В1Г5"
                ]              
            ],
            curIndex : 0,
            rightCount : 0,
            bAns : "",
            ch0: false,
            ch1: false,
            ch2: false,
            ch3: false,
            ch4: false
        }
        this.clickAnswer = this.clickAnswer.bind(this);
        this.checkRight = this.checkRight.bind(this);
        this.ShuffleArr = this.ShuffleArr.bind ( this );
    }
    clickAnswer( x ) {        
        this.checkRight(x);
        this.setState ( (state) => ({
            ...state,
            bAns : "",
            ch0: false,
            ch1: false,
            ch2: false,
            ch3: false,
            ch4: false
        }))
        if ( this.state.curIndex < 19 ) {
            this.setState( (state) => ({
                ...state,
                curIndex : state.curIndex + 1
            }))
        }
        else {
            alert ("Дакладных адзакаў " + this.state.rightCount + " з 20 ( "+ Math.floor(this.state.rightCount*100 / 20)+"%) ")
        }       
    }
    inputChange( val ) {
        this.setState ( (state) => ({
            ...state,
            bAns : val
        }))
    }
    checkRight( i ) {
        if ( i == 0) {
            let ww = "";
            if ( this.state.ch0 ) {ww += "1" };
            if ( this.state.ch1 ) {ww += "2" };
            if ( this.state.ch2 ) {ww += "3" };
            if ( this.state.ch3 ) {ww += "4" };
            if ( this.state.ch4 ) {ww += "5" };
            // alert ( "-"+ww +"_"+ this.state.questBase[this.state.curIndex][3] + "-")
            if ( ww == this.state.questBase[this.state.curIndex][3]) {
                this.setState( (state) => ({
                    rightCount: state.rightCount + 1
                }))
            }
        }
        else {
            // alert ( this.state.bAns +" "+ this.state.questBase[this.state.curIndex][3])
            if ( this.state.bAns == this.state.questBase[this.state.curIndex][3] ) {
                this.setState( (state) => ({
                    rightCount: state.rightCount + 1
                }))
            }
        }
        
    }
  
    returnCard(){
        if ( this.state.questBase[this.state.curIndex][0] === "type0" ) {
            return (
                <div className = "CardType0">
                    <p className = "CardType0_header">{this.state.questBase[this.state.curIndex][1]}</p>
                    <ul className = "checkboxes">
                        {this.state.questBase[this.state.curIndex][2][0] != "" ? 
                            <li className = "checkbox-group">
                                <input 
                                    type="checkbox" 
                                    id="checkbox-1" 
                                    class="checkbox" 
                                    checked = {this.state.ch0}
                                    onChange = {()=>{
                                        this.setState ( (state) => ({
                                            ...state,
                                            ch0 : !state.ch0
                                        }))
                                    }}/>
                                <label for="checkbox-1" class="label">
                                    {this.state.questBase[this.state.curIndex][2][0]}
                                </label></li> :""}
                        {this.state.questBase[this.state.curIndex][2][1] != "" ?
                            <li className = "checkbox-group">
                                <input 
                                    type="checkbox" 
                                    id="checkbox-2" 
                                    class="checkbox" 
                                    checked = {this.state.ch1}
                                    onChange = {()=>{
                                        this.setState ( (state) => ({
                                            ...state,
                                            ch1 : !state.ch1
                                        }))
                                    }}/>
                                <label for="checkbox-2" class="label">
                                    {this.state.questBase[this.state.curIndex][2][1]}
                                </label></li>:""}
                        {this.state.questBase[this.state.curIndex][2][2] != "" ? 
                            <li className = "checkbox-group">
                                <input 
                                    type="checkbox" 
                                    id="checkbox-3" 
                                    class="checkbox" 
                                    checked = {this.state.ch2}
                                    onChange = {()=>{
                                        this.setState ( (state) => ({
                                            ...state,
                                            ch2 : !state.ch2
                                        }))
                                    }}/>
                                <label for="checkbox-3" class="label">
                                    {this.state.questBase[this.state.curIndex][2][2]}
                                </label></li>:""}
                        {this.state.questBase[this.state.curIndex][2][3] != "" ? 
                            <li className = "checkbox-group">
                                <input 
                                    type="checkbox" 
                                    id="checkbox-4" 
                                    class="checkbox" 
                                    checked = {this.state.ch3}
                                    onChange = {()=>{
                                        this.setState ( (state) => ({
                                            ...state,
                                            ch3 : !state.ch3
                                        }))
                                    }}/>
                                <label for="checkbox-4" class="label">
                                    {this.state.questBase[this.state.curIndex][2][3]}
                                </label></li>:""}
                        {this.state.questBase[this.state.curIndex][2][4] != "" ?
                            <li className = "checkbox-group">
                                <input 
                                    type="checkbox" 
                                    id="checkbox-5" 
                                    class="checkbox" 
                                    checked = {this.state.ch4}
                                    onChange = {()=>{
                                        this.setState ( (state) => ({
                                            ...state,
                                            ch4 : !state.ch4
                                        }))
                                    }}/><label for="checkbox-5" class="label">{this.state.questBase[this.state.curIndex][2][4]}</label></li>:""}
                    </ul>
                    <input 
                        type = "button" 
                        value = "Адказаць" 
                        className = "CardType0_but"
                        onClick = { () =>{ this.clickAnswer(0)}}
                        ></input>
                </div>
            )
        }        
        else {
            return (
            <div className = "CardType1">
                <p className = "CardType1_quest">{ this.state.questBase[this.state.curIndex][2][0]}</p>
                <p className = "CardType1_text">{this.state.questBase[this.state.curIndex][1]}</p>
                <input 
                    type = "text" 
                    className = "CardType1_answer" 
                    value = {this.state.bAns}
                    onChange = {(e)=>{ this.inputChange(e.target.value)}}></input>
                <input 
                    type = "button" 
                    value ="Адказаць"
                    className = "CardType1_but"
                    onClick = { ()=>{this.clickAnswer(1)}}></input>
            </div>
            )
        }
    }
    ShuffleArr( array ) {        
        return array.sort(() => Math.random() - 0.5);
    };
    componentDidMount() {
        this.setState( (state) => ({
            ...state,
            questBase : this.ShuffleArr( state.questBase )
        }))
    }
    render() {
        return (
           <div className = "Ctrl_test_9_v_1">               
               { this.returnCard() }
            </div> 
        )
    }
}

export default Test0;

// https://ru.stackoverflow.com/questions/600919/%D0%9A%D0%B0%D0%BA-%D0%B2%D1%8B%D1%80%D0%BE%D0%B2%D0%BD%D1%8F%D1%82%D1%8C-%D1%87%D0%B5%D0%BA%D1%81%D0%B1%D0%BE%D0%BA%D1%81%D1%8B-%D1%81-%D0%B8%D1%85-%D0%BC%D0%B5%D1%82%D0%BA%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%BE%D0%B4%D0%BD%D1%83-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D1%83
