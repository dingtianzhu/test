// let bus = new Vue;
// let Menu = {
//     props:['list','index','name'],
//     template:'<a :href="JSON.parse(list).url"><li :class="{active:index==active}" @click="on_click(index)"> <i :class="JSON.parse(list).iclass"></i><span>{{JSON.parse(list).title}}</span></li></a>',
//     methods:{
//         on_click:function(index){
//
//
//             bus.$emit('page',JSON.parse(this.list).url)
//             this.$emit("activeVal", index);
//             console.log(this.active,index)
//             if(this.active!=index){
//                 this.active = index;
//             }
//             // console.log(this.active,index,this.name)
//         }
//     },
//     data:function(){
//         return {
//             active:this.name,
//             // href:JSON.parse(this.list).url,
//         }
//     },
//     watch : {
//         // 'names' : function(newVal, oldVal){
//         //     this.active = newVal;
//         // },
//         active : function(newVal, oldVal){
//             this.$emit("update:name", newVal);
//         },
//         // 'page' : function(newVal, oldVal){
//         //     this.href = newVal;
//         // },
//         // href : function(newVal, oldVal){
//         //     this.$emit("update:page", newVal);
//         // },
//     }
// };
// let right={
//     props:['list','name'],
//     template:`
//         <div>
//         <menu-li></menu-li>
//         <div id="tabs">
//                 <div class="ul">
//                     <ul >
//                         <li class="active">{{list.title}}列表</li>
//                         <li>{{list.title}}添加</li>
//
//                     </ul>
//                 </div>
//
//                 <div class="search">
//                 <form action="">
//                     <input type="text">
//                 </form>
//                 </div>
//
//                </div>
//                <div class="content">
//                     <ul>
//                         <li>fsfd</li>
//                     </ul>
//                 </div>
// </div>
//     `,
//     // props:['page'],
//     data:function(){
//         return {
//             page:'article',
//             active:'active'
//         }
//     },
//     methods:{
//
//     },
//     mounted(){
//         let that =this;
//         bus.$on('page',function(msg){
//             that.page = msg;
//             // console.log(that.page);
//         })
//
//     },
//     watch : {
//         'name' : function(newVal, oldVal){
//             this.active = newVal;
//         },
//         page : function(newVal, oldVal){
//             this.$emit("update:name", newVal);
//         }
//     }
// }
//
// new Vue({
//     el:'#index',
//
//     // components:{
//     //     'menu-li':Menu,
//     //     'right-content':right,
//     // },
//     data:{
//         page:'#article',
//         activeVal:1,
//         lists:[
//             {
//                 'url':'#article',
//                 'iclass':'fa fa-file-text',
//                 'title':'技术文章',
//
//             },
//             {
//                 'url':'#picture',
//                 'iclass':'fa fa-file-text',
//                 'title':'图片管理',
//
//             },
//             {
//                 'url':'#note',
//                 'iclass':'fa fa-file-text',
//                 'title':'笔记管理',
//
//             },
//         ]
//     }
// });
// let menus = new Vue({
//     el:'#menu',
//     components :{
//         'menu-li':Menu,
//     },
// });
//
// let content = new Vue({
//     el:"#right",
//
//     components:{
//         'right-content':right,
//         'menu-li':Menu,
//     }
// });