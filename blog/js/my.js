let bus = new Vue;

let Menu = {
    props:['list','index','name','show'],
    template:'<a :href="list.url"><li :class="{active:index==active}" @click="on_click(index)"> <i :class="list.iclass"></i><span>{{list.title}}</span></li></a>',
    methods:{
        on_click:function(index){
            bus.$emit('page',this.list.url)
            // if(this.active!=index){
                this.active = index;
                this.ashow = index;
            // }
        }
    },
    data:function(){
        return {
            active:this.name,
            ashow:this.show,
            href:this.list.url,
        }

    },
    watch : {
        'name' : function(newVal, oldVal){
            this.active = newVal;
        },
        active : function(newVal, oldVal){
            this.$emit("update:name", newVal);
        },
        'show' : function(newVal, oldVal){
            this.ashow = newVal;
        },
        ashow : function(newVal, oldVal){
            this.$emit("update:show", newVal);
        },

    }
};

let right={
    props:['list','name','add'],
    template:`
        <div>
               <right-top :list="list" :show.sync="onShow" :inAdd.sync ='inAdd'></right-top>
               <right-list :articles="articles" ></right-list>
       
</div>
    `,
    data:function(){
        return {
            page:'article',
            active:'active' ,
            onShow:this.name,
            inAdd:this.add,
            articles:[
                {
                    id:1,
                    title:'PHP是世界上最好的语言',
                    num:14,
                    category:'PHP',
                    comment:24,
                    author:'大帝',
                    time:'2018-08-21 13:23:34'
                },
                {
                    id:2,
                    title:'论程序猿的职业生涯',
                    num:14,
                    category:'感悟',
                    comment:24,
                    author:'大帝',
                    time:'2018-08-21 13:23:34'
                },
                {
                    id:3,
                    title:'母猪的产后护理',
                    num:14,
                    category:'生产',
                    comment:24,
                    author:'大帝',
                    time:'2018-08-21 13:23:34'
                },


            ],
        }
    },


    watch : {
        'add':function (newVal, oldVal){
            this.inAdd =newVal;
        },
        inAdd : function(newVal, oldVal){
            this.$emit("update:add", newVal);
        },
        'name' : function(newVal, oldVal){
            this.onShow = newVal;
        },
        onShow : function(newVal, oldVal){
            this.$emit("update:name", newVal);
        }
    }
}

let rightTop={
    props:['list','show','inAdd'],
    template:`<div id="tabs">
                <div class="span">
                    <span>{{list.title}}列表</span>
                </div>
                
                <div class="search">
                <form action="">
                    <input type="text">
                    <botton class="btn"><i class="fa fa-search"></i></botton> 
                </form>
                </div>
               <div class="add">
                    <a href="#" @click="on_Click()"><i class="fa fa-plus-square-o "></i></a>
                </div>
                
        </div>`,
    data:function(){
        return {
            inShow:this.show,
            toAdd:this.inAdd,
        }
    },
    methods:{
        on_Click:function(){
            this.inShow='sdf';
            // console.log(this.inAdd);
            this.toAdd = true;
            // console.log(this.inAdd);
        }
    },

    watch : {
        'inAdd':function(newVal,old){
            this.toAdd=newVal;
        },
        toAdd:function(newVal,old){
            this.$emit("update:inAdd", newVal);
        },
        'show' : function(newVal, oldVal){
            this.inShow = newVal;
        },
        inShow : function(newVal, oldVal){
            this.$emit("update:show", newVal);
        }
    }
}
let rightList = {
    props:['articles'],
    template:`<div class="content">
        <ul class="content-ul">
            <content-list :articles="articles"></content-list>
            <li>
                <div class="page"><ul ><li>首页</li><li>上一页</li><li>第 1 页 共 10 页</li><li>下一页</li><li>尾页</li></ul></div>
            </li>
        
    </div>`,
    data:function(){
        return {}
    }

}
let contentList = {
    props:['articles'],
    template:`<ul class="content-ul">
            <li v-for="article in articles">
                <a href="#" class="name">
                <span><button class="noid">{{article.id}}</button></span>
                    {{article.title}}
                </a>
                <span class="category"><button>{{article.category}}</button></span>
                <span class="other">  
                <i class="fa fa-user-o"> : {{article.author}}</i>   /
                <i class="fa fa-eye"> {{article.num}}</i>  / 
                <i class="fa fa-commenting-o"> {{article.comment}}</i>  / 
                <i class="fa fa-clock-o"> {{article.time}}</i></span>
                <a href="" class="control"><i class="fa fa-trash"></i></a>
            </li>
        </ul>`


}
let rightAdd={
    props:[''],
    template:`<div>
        
        <form action="" class="articleForm">
            <form-add></form-add>
        </form>
    </div>`,

}
let formAdd ={
    props:['title'],
    template:`<div>
        
        <div class="formTitle">论母猪的产后护理</div>
        <div class="formShowContent" >sdfdsf</div>
        <div >
            <div class="short_wrap" style="background-color:#eee;line-height:30px; " >

                <i class="fa fa-file-text-o fa-fw" style="text-indent: 2em;"></i>
                <input type="text" name="art_title" placeholder="请输入标题名称"  onchange="selects()" id="selectLag"  class="editable-input" style="border:0;margin-left: 3em;height: 30px;width: 50%;background-color: transparent;">

                <div class="btn-group pull-right" role="group" style="height: 30px;">

                    <div class="form-group" >
                        <select class="form-control form-control-sm" name = "theme"  id="select" style="border:0;margin-left: 3em;height: 30px;width: 50%;background-color: transparent;">
                            <option></option>
                            <option>dracula</option>
                            <option>idea</option>
                            <option>lucario</option>
                            <option  selected>material</option>
                            <option>mbo</option>
                            <option>monokai</option>
                            <option>neat</option>
                            <option>neo</option>
                            <option>nord</option>
                            <option>yeti</option>
                        </select>
                    </div>
                    
                </div>
            </div>
                <textarea  name="art_content" id="code" style="text-indent: 2em;">sdfdsfasd</textarea>
            <div class="short_wrap" style="background-color:#ddd;line-height:50px; ">
            
                <div class="btn-group" role="group" style="height: 30px;padding-left: 20px;">

                    <button  class="btn js-edit-blob  btn-sm  btn-success" ><i class="fa fa-cloud-upload"></i>保存</button>
                </div>
            </div>
        </div>
    </div>`,
    mounted:function(){
        this.onload();
    },
    methods:{

        onload:function(){
            let te = document.getElementById("code");
            let input = document.getElementById("select");
            {
                let theme = input.options[input.selectedIndex].textContent;
                let editor = CodeMirror.fromTextArea(te, {

                    mode: "markdown",
                    lineNumbers: true,
                    lineWrapping: true,
                    keyMap: "sublime",
                    autoCloseBrackets: true,
                    styleActiveLine: true,
                    matchBrackets: true,
                    showCursorWhenSelecting: true,
                    theme: theme,
                    tabSize: 4,
                    extraKeys: {
                        "Ctrl-Q": function (cm) {
                            cm.foldCode(cm.getCursor());
                        }
                    },
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                });
            }
        }
    }
}
Vue.component('menu-li',Menu);
Vue.component('right-content',right);
Vue.component('right-top',rightTop);
Vue.component('right-list',rightList);
Vue.component('right-add',rightAdd);
Vue.component('content-list',contentList);
Vue.component('form-add',formAdd);
new Vue({
    el:'#index',

    // components:{
    //     // 'menu-li':Menu,
    //     'right-content':right,
    // },
    data:{
        show:0,
        page:'#meun',
        activeVal:0,
        add:false,
        lists:[
            {
                'url':'#meun',
                'iclass':'fa fa-navicon',
                'title':'系统菜单',

            },
            {
                'url':'#article',
                'iclass':'fa fa-file-code-o',
                'title':'技术文章',

            },
            {
                'url':'#picture',
                'iclass':'fa fa-file-picture-o',
                'title':'图片管理',

            },
            {
                'url':'#note',
                'iclass':'fa fa-file-text',
                'title':'笔记管理',

            },
            {
                'url':'#nover',
                'iclass':'fa fa-columns',
                'title':'小说管理',

            },
        ]
    }
});







