<?php 
	header('content-type:text/html;charset="utf-8"');

	//用户名和密码全部取出
	$username = $_POST['username'];
	$password = $_POST['password'];
	//做md5处理
	$password = md5(md5($password).'qingdao');


	$link = mysql_connect("localhost", "root", "123456");
	//2、判断数据库是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出整个php程序
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择数据库
	mysql_select_db("qd1805");

		//注册
		/*
			判断之前是否添加过
		*/
		$sql = "select * from register where username='{$username}'";
		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			echo '用户名已存在';
		}else{
			//注册成功
			$sql = "insert into register(username,password) values('{$username}','{$password}');";
			$res = mysql_query($sql);
			if($res){
				echo '注册成功';
			}else{
				echo '注册失败';
			}
		}

	//8、关闭数据
	mysql_close($link);

 ?>		
