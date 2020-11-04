<?php

    //爬楼梯问题  一次只能爬一层或者两层
    //代码实现
    //递归实现（较耗资源）
//    function wolk($n){
//        if($n<3)return $n;
//        return wolk($n-1)+wolk($n-2);
//    }
//    function wolk2($n){
//        if($n<3)return $n;
//        $arr[1] = 1;
//        $arr[2] = 2;
//        for($i=3;$i<=$n;$i++){
//            $arr[$i]=$arr[$i-1]+$arr[$i-2];
//        }
//        return $arr[$i-1];
//    }
//    echo wolk(5);
//    echo wolk2(5);


//转圈淘汰
//function rounda($arr=[1,2,3,4,5]){
//    $counter = 1;
//    while(1){
//        if(count($arr)===1)return $arr;
//        if($counter%3!==0){
//            array_push($arr,$arr[$counter-1]);
//            unset($arr[$counter-1]);
//        }else{
//            unset($arr[$counter-1]);
//        }
//        $counter++;
//    }
//
//}
//print_r(rounda());

//单例模式
echo phpinfo();