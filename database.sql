create database users;
use users;
SELECT DATE_FORMAT('2021-06-03','%y-%m-%d')

INSERT INTO curriculum(subject,start_date,end_date,content) VALUES('VR AR반',str_to_date('2021-06-03','%Y-%m-%d'),str_to_date('2021-06-06','%Y-%m-%d'),'VR AR 반 안내 입니다.')

/*DATE 형식*/
SELECT DATE_format(start_date,'%m') FROM curriculum
(SELECT * FROM curriculum)
UNION ALL
(SELECT * FROM curriculum)
select subject from curriculum;

select end_date as 'date' from curriculum;


SELECT * FROM curriculum WHERE DATE_FORMAT(start_date,'%m') = '06'

SELECT MONTH(start_date) FROM curriculum


(SELECT * FROM curriculum)
UNION ALL
(SELECT * FROM curriculum)

-- 두 테이블을 위아래로 합친다
select end_date as 'date' from curriculum
UNION ALL
select start_date as 'date' from curriculum
-- 두 테이블을 옆으로 붙인다


 SELECT *
 FROM (SELECT * FROM skill WHERE curr_id = 4) AS A
 LEFT JOIN skill_item AS B 
 ON A.item_id = B.id;


  SELECT A.curr_id,B.name,B.type
 FROM (SELECT * FROM skill WHERE curr_id = 4) AS A
 LEFT JOIN skill_item AS B 
 ON A.item_id = B.id;


create table skill(
    curr_id INT NOT NULL,
    item_id INT NOT NULL
)character set utf8 collate utf8_general_ci;

create table skill_item(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    type varchar(50) NOT NULL
)character set utf8 collate utf8_general_ci;
-- as는 테이블의 필드값이다
-- select는 새로운 테이블을 만들어서 보여주는 거지 조회하는 것이 아니다
-- 두 테이블을 합치는 것

/*기간 검색 하는 방법*/

-- SELECT * FROM curriculum WHERE start_date BETWEEN '2021-06-01' AND '2021-06-11';
-- //게시판 1:N 채팅 로그인 토큰활용
-- //api 활용 - 지도 api 가지고 오는 법
-- //게시판 분량 설계
-- //디자인 설계 - 어떤 색깔을 중점으로 사용할 것인가?
-- //모바일 버전
-- //db 설계
-- //HEIDISQL 툴 쓰기

-- //SELECT DATE_FORMAT('2021-06-03','%y-%m-%d')

-- //INSERT INTO curriculum(subject,start_date,end_date,content) VALUES('VR AR반',str_to_date('2021-06-03','%Y-%m-%d'),str_to_date('2021-06-06','%Y-%m-%d'),'VR AR 반 안내 입니다.')


MariaDB [class]> insert into skill_item(name,type) values('C++','Promgraming');
Query OK, 1 row affected (0.031 sec)

MariaDB [class]> insert into skill_item(name,type) values('Unity','Programing');
Query OK, 1 row affected (0.028 sec)

MariaDB [class]> select * from skill_item;