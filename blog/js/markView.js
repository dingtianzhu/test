;
/**
 * 此处分号不是写错了，是为了防止那个二货写js的时候结束没有分号；引起预防上的混淆报错
 */
'use strict';
(function (win,doc,undefined){
    let markView = function (str){
        this.style = {
            'a':'margin-left:20px;text-decoration:none;color:#1b69b6;hover:text-decoration: underline;',
            'image_parent_div':'padding: 20px;width: 100%;box-sizing: border-box;',
            'image_div':'clear: both;',
            'image':'border-radius:5px;height:30vh;width:auto;float:center;',
            'h':'margin:10px 10px 0 15px;padding-bottom: .3em;font-weight: 400;font-family:Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;;color:#343a40;border-bottom: 1px solid #eaecef;',
            'hr':  'margin:15px 0;border: .5px solid rgba(0,0,0,.1);',
            'ul':'margin:10px 20px;color:#24292e;padding:0 15px;',
            'ol':'list-style:none;margin:10px 0;padding-left:15px;',
            'del':'color:gray',
            'block':'background-color:#53f3c310;line-height:24px;margin:10px auto;width:95%;padding: 10px 10px 10px 10px;border-radius:5px;white-space: pre-wrap;word-wrap: break-word;',
            'pre':'width:100%;color:#08a173;margin:0;padding: 0;white-space: pre-wrap;white-space: -moz-pre-wrap;  white-space: -pre-wrap;white-space: -o-pre-wrap;overflow: auto;word-break: break-all;word-wrap: break-word;font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;',
            'code':'font-family: Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;;padding: .2em .4em;margin: 0;font-size: 90%;background-color: rgba(13,13,13,.05);border-radius: 3px;color: #e83e8c',
            'table_parent_div': 'width:100%; overflow:auto;margin:10px auto;',
            'table':'border: 0.5px solid rgba(0,0,0,.1);font-size:14px;border-collapse: collapse;display: table;text-align:left;width: 98%;margin: 0 auto;',
            'thead':'display: table-header-group;vertical-align: middle;border-color: inherit;',
            'tr':'display: table-row;vertical-align: inherit;border-color: inherit;',
            'th':'padding:8px;text-align:left;font-size:14px;font-weight:normal;border-right-width:1px;border-right-style:solid;border-right-color:rgb(255,255,255);border-left-width:1px;border-left-style:solid;border-left-color:rgb(255,255,255);color:rgb(0,51,153);border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgb(200,212,253);background:rgb(208,218,253);',
            'td':'white-space: pre-wrap;word-wrap: break-word;font-family: Source Code Pro,DejaVu Sans Mono,Ubuntu Mono,Anonymous Pro,Droid Sans Mono,Menlo,Monaco,Consolas,Inconsolata,Courier,monospace,PingFang SC,Microsoft YaHei,sans-serif;border-left-width:1px;border-left-style:solid;border-left-color:rgb(255,255,255);border-bottom-width:1px;padding:8px;border-bottom-style:solid;border-bottom-color:rgb(255,255,255);color:rgb(102,102,153);border-top-width:1px;border-top-style:solid;border-top-color:transparent;background:rgb(232,237,255);',
        };
        this.color=[
            '#dc3545',
            '#007bff',
            '#28a745',
            '#6e00ff',//zi
            '#343a40',
            '#6c757d'
        ];
        //插件名，调用的时候直接new一下插件名就行了并传参数或者传对象
        //(一般这个函数名手写字母大写比较好，构造函数嘛，其实也是函数)
        //很明显我要传id名；这里传什么都可以的其实；
        this.content = str;
        this.table = /^(\|?.+\|){1,}\n^(\|?:?\-{3,}:?\|){1,}\n(^(\|?.+\|){1,}\n?){1,}/gm;
        this.image = /\!\[[\s\S]*?\]\([\s\S]*?\)/g;
        this.re1 = /\(.*\)/;
        this.re2 = /\[.*\]/;
        this.a = /\[[\s\S]*?\]\([\s\S]*?\)/g;
        this.h = /^(#+)\ (.*)/gm;
        this.hNum = /(#+)/g;
        this.i = /(\*|_)(.*?)\\1/g;
        this.b = /(\*\*|__)(.*?)(\*\*|__)/g;
        this.del = /\~\~(.*?)\~\~/g;
        this.quote = /(>+)(.*)/g;
        this.code = /`{1,2}[^`](.*?)`{1,2}/g;
        this.hr = /[\s]*(-|\+|\*){3,}/g;
        this.br = /\n/g;
        this.li = /[\s](-|\*|\+)\ (.*)(=?\<br\>)/g;
        this.ul = /^(-|\*|\+)\ (.*)/gm;
        this.ol = /[\s]?[1-9]\.?[0-9]?\.\ (.*)/g;
        this.block = /```([\s\S].*?)```[\s]?/gs;
        this.result ='' ;
        this.init();
    };
    markView.prototype = {
        constructor:markView,
        init:function(){
            this.result = this.setHr( this.setBr(this.setTable(this.setCode( this.setCodeBlock(this.setH(this.setOl(this.setI(this.setDel( this.setUl( this.setB(  this.setA( this.setImage(this.content)))))))))))));
        },
        getStr:function(){
            return this.result;
        },
        setImage:function(str){
            let img = str.match(this.image);
            if (img) {
                for (let i = 0, len = img.length; i < len; i++) {
                    let url = img[i].match(this.re1)[0];
                    console.log(url.substring(1, url.length - 1));
                    let title = img[i].match(this.re2)[0];
                    str = str.replace(img[i], '<div style="'+this.style.image_parent_div+'"><img src=' + url.substring(1, url.length - 1) + ' style="'+this.style.image+'" alt=' + title.substring(1, title.length -1) +'><div style="'+this.style.image_div+'"></div></div>');
                }
            }
            return str;
        },
        setA:function(str){
            let a = str.match(this.a);
            if (a) {
                for (let i = 0, len = a.length; i < len; i++) {
                    let url = a[i].match(this.re1)[0];
                    let title = a[i].match(this.re2)[0];
                    str = str.replace(a[i], '<a style = "'+this.style.a+'" href=' + url.substring(1, url.length - 1)  + '>' + title.substring(1, title.length -1) + '</a>');
                }
                return str;
            }
            return str;
        },
        setH(str){
            let h = str.match(this.h);
            if(h){
                for (let i = 0, len = h.length; i < len; i++) {
                    let sign = h[i].match(this.hNum)[0];
                    let num= sign.length;
                    let content = h[i].replace(sign,'');
                    str = str.replace(h[i],'<h'+num+' style="'+this.style.h+'">'+content+'</h'+num+'>');
                }
            }
            return str;
        },
        setBr:function(str){
            return str;
        },
        setHr:function(str){
            str = str.replace(this.hr,'<hr style="'+this.style.hr+'">');
            return str;
        },
        setUl(str){
            let ul = str.match(this.ul);
            if(ul){
                for(let i = 0 ;i<ul.length;i++){
                    ul[i] = ul[i].replace("\n","");
                    let content = ul[i].replace(/[\s]*(-|\*|\+)\ /g,'');
                    str = str.replace(ul[i],'<ul style = "'+this.style.ul+'"><li>'+content+'</li></ul>');
                }
            }
            return str;
        },
        removeH(str){
            let ss = str.match(/(<h\d).*?<\/h\d>/gm);
            if(ss){
                for (let s in ss){
                    let h = ss[s].match(/>[^<>]*?</g);
                    if(h){
                        let hContent = '#'+ h[0].replace(/>|</g,'');
                        str = str.replace(ss[s],hContent);
                    }
                }
            }
            return str;
        },
        removeUl(str){
            let ss = str.match(/(<ul).*?(<\/ul>)/gm);
            if(ss){
                for (let s in ss){
                    let h = ss[s].match(/(<li).*?(<\/li>)/gm);
                    let hContent = '*\ '+ h[0].replace(/<li>|<\/li>/g,'');
                    str = str.replace(ss[s],hContent);
                }
            }
            return str;
        },
        setCodeBlock(str){
            let codeBlock = str.match(this.block);
            if(codeBlock){
                for (let i = 0;i<codeBlock.length;i++){
                    let content = codeBlock[i].replace(/```\n?/g,'');
                    content = this.removeH(content);
                    content = this.removeUl(content);
                    str = str.replace(codeBlock[i],'<div style = "'+this.style.block+'"><pre style="'+this.style.pre+'"><code>'+content+'</code></pre></div>');
                }
            }
            return str;

        },
        setCode(str){
            let code = str.match(this.code);
            if(code){
                for(let i=0;i<code.length;i++){
                    let content = code[i].replace(/`/g,'');
                    str = str.replace(code[i],'<code style="'+this.style.code+'">'+content+'</code>');
                }
            }
            return str;
        },
        setTable(str){
            let table = str.match(this.table);
            if(table){
                for(let i=0;i<table.length;i++){
                    let td = '<div style="'+this.style.table_parent_div+'"><table style="'+this.style.table+'"><thead style="'+this.style.thead+'">';
                    let tr = table[i].split('\n');
                    for(let a=0;a<tr.length;a++){
                        if(a!==1){
                            if(a===0){
                                td+='<tr style="'+this.style.tr+'">';
                                let per = tr[a].replace(/^ {0,3}\|/g,'').replace(/\|[ \t]*$/,'');
                                let cell = per.split('|');
                                for(let b= 0 ;b<cell.length;b++){
                                    td+='<th scope="col" style="'+this.style.th+'">'+cell[b]+'</th>';
                                }
                                td+='</tr></thead><tbody style="border: 0;">';
                            }else{
                                let per = tr[a].replace(/^ {0,3}\|/g,'').replace(/\|[ \t]*$/,'');
                                let cell = per.split('|');
                                if(cell.length>1){
                                    td+='<tr style="display: table-row;vertical-align: inherit;border-color: inherit;">';

                                    for(let b=0;b<cell.length;b++){
                                        td+='<td style="'+this.style.td+'">'+cell[b]+'</td>';
                                    }
                                    td+='</tr>';
                                }

                            }

                        }

                    }
                    td+='</tbody></table></div>';
                    str = str.replace(table[i],td);
                }
            }
            return str;
        },
        setI(str){
            let ai = str.match(this.i);
            if(ai){
                for(let i=0;i<ai.length;i++){
                    let content = ai[i].replace(/\*/g,'');
                    str = str.replace(ai[i],'<i>'+content+'</i>');
                }
            }
            return str;
        },
        setB(str){
            let b = str.match(this.b);
            if(b){
                for(let i=0;i<b.length;i++){
                    let content = b[i].replace(/\*\*|__/g,'');
                    str = str.replace(b[i],'<span style="font-weight: 700;color: rgb(0,51,153);">'+content+'</span>');
                }
            }
            return str;
        },
        setOl(str){
            let ol = str.match(this.ol);
            if(ol){
                for(let i = 0 ;i<ol.length;i++){
                    ol[i] = ol[i].replace("\n","");
                    let ul = '<ul style = "'+this.style.ol+'"><li>'+ol[i]+'</li></ul>';

                    str = str.replace(ol[i],ul);
                }
            }
            return str;
        },
        setDel(str){
            let del = str.match(this.del);
            if(del){
                for(let i=0;i<del.length;i++){
                    let content = del[i].replace(/\~\~/g,'');
                    str = str.replace(del[i],'<del style="'+this.style.del+'">'+content+'</del>');
                }
            }
            return str;
        },
    };
    win.markView = markView;
}(window,document));