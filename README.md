# 정리

* * *

#### 소문자를 대문자로 전환

```
text-transform: uppercase;
```

#### 부모와 관계없이 위치 지정
```
position: absolute;
```
#### 처음 static 상태에서 위치를 조금 변경하고 싶은 경우 사용
```
position: relative; 
```
#### 내부별 요소 크기 
```
flex-basis
```
#### 요소의 콘텐프 시작부분에 생성된 콘텐를 추가한다
```
::before
```
#### 요소의 콘텐츠 끝부분에 생성된 콘텐츠를 추가한다.
```
::after
```
#### transition을 사용하는 이유
##### -> 지정할 속성에 변화나 움직임을 주고 싶은 경우, 일정 시간 간격을 두고 속성에 변화 혹은 부드럽게 해주는 기능

#### opacity
##### -> 요소를 투명하게 해주는 경우 사용 0.0 ~ 1.0 까지의 수를 넣을 수 있음


#### visibility 속성은 태그의 가시성을 결정
###### 가시성 : 클래스와 클래스 멤버인 멤버필드와 메소드의 사용범위를 결정하는 것이다
```
visibility의 속성
visible: 보임
hidden: 숨김 (자신의 영역은 계속 차지)
collapse: 겹치도록 지정
inherit: 부모 요소의 값을 상속
```

##### flex-direction
```
flex 컨테이너에 flex-direction 속성을 지정하면 flex 항목이 나열되는 방향을 변경

row 혹은 row-reverse를 선택하면 주축은 인라인 방향으로 행을 따른다.

column 혹은 column-reverse 을 선택하면 주축은 페이지 상단에서 하단으로 블록 방향을 따른다.

교차축은 주축에 수직하므로, 만약 flex-direction(주축)이 row 나 row-reverse 라면 교차축은 열 방향을 따른다.

주축이 column 혹은 column-reverse 라면 교차축은 행 방향을 따른다.

```

##### 축약형 속성 flex
```
flex-basis 속성은 항목의 크기를 결정
기본값은 auto이다.

flex-grow 속성은 값을 양수로 지정하면 flex 항목별로 주축 방향 크기가 flex-basis 값 이상으로 늘어날 수 있게 된다.

flex-shrink 속성은 주축의 공간이 부족할때 각 항목의 사이즈를 줄이는 방법

flex 컨테이너가 flex 항목을 모두 포함할 만큼 넉넉한 공간을 갖고 있지 않고 flex-shrink 값이 양수이면 flex 항목은 flex-basis에 지정된 크기보다 작아진다. 또한, flex-grow 속성과 마찬가지로 더 큰 flex-shrink 값을 갖는 항목의 사이즈가 더 빨리 줄어듭니다.

flex-grow, flex-shrink, flex-basis 값을 각각 사용하지 않고 이 세 속성을 한번에 지정하는 flex 축약형을 많이 사용한다.

```
##### translate3d : 3 차원 벡터가 특징, 좌표는 요소가 각 방향으로 이동하는 정도를 정의한다

```
translate3d(tx, ty, tz)

perspective를 사용하지 않으면 translateZ의 변화를 느낄수 없다.
그러나 perspective를 사용해 원근감을 주면 차이를 느낄 수 있다. 

perspective-origin은 기준점을 지정해주는 속성이다 perspective-origin: center;
다르게 위치를 지정해주면 생각하는 애니메이션과 다르게 왜곡이 일어날 수있다

```