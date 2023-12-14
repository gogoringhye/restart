* /* -는 의, _ ~안에 있는 */

🍳 1. 굳이 시멘틱 태그를 쓰는 이유? (https://seo.tbwakorea.com/blog/what-is-semantic-tag/)
# ![image](https://github.com/gogoringhye/restart/assets/145514996/2b0cf9d8-03be-431a-833b-2258b02916e5)

🍳 2. position: relative; 쓰기 전에 top 값 적용이 안되는 이유

# ![image](https://github.com/gogoringhye/restart/assets/145514996/120e5eda-2dff-431d-8c41-fef94f4e5ce4)

🍳 3. h1, p, span 차이점을 알겠는데 정작 쓸 때 바로바로 로딩이 안됨
# ![image](https://github.com/gogoringhye/restart/assets/145514996/67444c20-9689-4ed2-a439-f2bcd3fd21bf)
```
- 인라인 요소
<span>, <a>, <strong>, <em>, <img>, <br>, <span>

- 블록 레벨 요소
<div>, <h1>, <p>, <ul>/<ol>, <li>, <table>, <blockquote>, <hr>
```
🍳 4. max-width, min-width 차이점
# ![image](https://github.com/gogoringhye/restart/assets/145514996/512edd99-05eb-422e-bb51-86a49353afc7)

🍳 5. text-align: center; 사용하면 텍스트가 중앙정렬 되는 줄 알았는데 왜 위치까지 달라짐? 
--> 굳이 값을 많이 안줘도 text-align: right;하면 간편하게 화면 옆으로 넘길 수 있음

🍳 6. top 50px은 적용되는데 50%는 적용안되는 이유
--> 부모의 넓이를 잡아보면 부모의 넓이가 좁아서임을 알 수 있음

🍳 7. 사각형 만드는 방법과 border: px solid #color 여기 solid 대신 올 수 있는 것들에는 무엇이 있는지
```
solid (실선): border: px solid #color;
dashed (대시 선): border: px dashed #color;
dotted (점선): border: px dotted #color;
double (이중 선): border: px double #color;
groove (홈이 파여있는 선): border: px groove #color;
ridge (높낮이가 파여있는 선): border: px ridge #color;
inset (그림자 효과): border: px inset #color;
outset (볼록한 효과): border: px outset #color;
```
💥🍳 8.display:inline-block으로 바꿔주는 이유, text-align: center;와 함께 사용할 때
# ![image](https://github.com/gogoringhye/restart/assets/145514996/5934d667-0a3f-456e-a530-61edcfa14b44)
