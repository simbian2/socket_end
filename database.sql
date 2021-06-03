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


-- MariaDB [class]> insert into skill_item(name,type) values('C++','Promgraming');
-- Query OK, 1 row affected (0.031 sec)

-- MariaDB [class]> insert into skill_item(name,type) values('Unity','Programing');
-- Query OK, 1 row affected (0.028 sec)

-- MariaDB [class]> select * from skill_item;

-- unknown id 값 in column list - 적어도 하나의 primary key값을 줘야 한다.

-- ​

-- 다른 분들 sequelize 받아 올 때는 일단 테이블을 만들지 말고 오류명으로 테이블을 주면 그걸 db에 insert하자

-- //결국 번역 이지만

-- ​

-- 1. 코딩의 자스는

--  일단 한국말로 분류 과정을 쓴 후에, 그걸 코딩 언어로 번역한다고 생각해야 한다. 일반 언어 번역과 비슷하다.

-- 프론트엔드는 한 화면 내에서의 동작을 제어한다.

-- 예시)

-- ​

-- //숫자가 나오면 짜르게 하는 것은?

-- ​

-- //if 

-- //HEAD

-- //모두 소문자로 변환

-- //sort 기능에 문자 순이 있나?

-- ​

-- //else HEAD가 같은 경우

-- //NUMBER

-- //0을 없애거나 replace

-- //sort 기능에 오름차 내림차 순 사용

-- ​

-- //뒤의 TAIL 부분은 무시 할 수도 있다/

-- ​

--  예시처럼 1. 최대한 한국말로 옮겨 놔야 한다. 2.그러나 사고과정은 온연히 !정보분류적!으로 코딩적이어야 한다. 알고리즘적이여야 한다.

-- 많은 정보를 처리하는 것이기 때문에!!

-- ​

-- 2. node js는

--  어떤 기능인지를 기준으로 단락을 묶는다. 그걸 번역한다고 생각한다.

-- 기능은 결국, 여러 화면을 왔다갔다 이동할 때 쓴다고 생각하면 된다. 

-- db, server..., visual studio code 모두 다 화면이라고 생각하자.

-- ​

-- 즉, 프론트 엔드의 정보처리는 한 화면 내에서의 커서의 이동과 동작의 로직이었다면

-- 백엔드의 정보처리는 여러 화면 내에서의 정보의 이동의 로직이다. 

-- 그러니까 둘 다 온연히 같다!

-- ​

--  1. 최대한 한국말로 옮겨 놔야 한다. 2.그러나 사고과정은 온연히 !정보분류적!으로 코딩적이어야 한다

-- ​

-- ​

-- 1. 파일을 쪼개는 것 - 라우터 하는 방법

-- 2. db에 이미지를 보내는 것

-- 3. 저 화면과 이 화면에서 양방향 통신하는 법 - 소켓 하는 법.

-- 4. post로 body에 보내기, get으로 query에 보내기.