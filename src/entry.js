import css from './css/index.css'; //在入口文件中引入css文件
import less from './css/black.less';
import sass from './css/fff.scss';
import $ from 'jquery'; //因为jquery类库在node_modules中，所以直接jquery即可。
{
    let jspang = 'Hello Webpack';
    document.getElementById('title').innerHTML = jspang;
}

$("#title").html("Hello jspang");
