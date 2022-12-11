"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[6727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),o=u(a),N=r,d=o["".concat(m,".").concat(N)]||o[N]||s[N]||l;return a?n.createElement(d,i(i({ref:t},k),{},{components:a})):n.createElement(d,i({ref:t},k))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},7500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2,description:"\ud83d\udccc FastAPI \ub97c \uc774\uc6a9\ud574 CRUD \ub97c \uc218\ud589\ud558\ub294 API \ub97c \uc791\uc131\ud569\ub2c8\ub2e4."},i="2) FastAPI CRUD",p={unversionedId:"fastapi/fastapi-crud",id:"fastapi/fastapi-crud",title:"2) FastAPI CRUD",description:"\ud83d\udccc FastAPI \ub97c \uc774\uc6a9\ud574 CRUD \ub97c \uc218\ud589\ud558\ub294 API \ub97c \uc791\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/fastapi/fastapi-crud.mdx",sourceDirName:"fastapi",slug:"/fastapi/fastapi-crud",permalink:"/tutorial/docs/fastapi/fastapi-crud",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/fastapi/fastapi-crud.mdx",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1670752056,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\ud83d\udccc FastAPI \ub97c \uc774\uc6a9\ud574 CRUD \ub97c \uc218\ud589\ud558\ub294 API \ub97c \uc791\uc131\ud569\ub2c8\ub2e4."},sidebar:"tutorialSidebar",previous:{title:"1) FastAPI Tutorial",permalink:"/tutorial/docs/fastapi/fastapi-tutorial"},next:{title:"3) FastAPI CRUD (Pydantic)",permalink:"/tutorial/docs/fastapi/fasapi-crud-pydantic"}},m={},u=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc2a4\ud399 \uba85\uc138\uc11c",id:"\uc2a4\ud399-\uba85\uc138\uc11c",level:2},{value:"1. API \uba85\uc138\uc11c \uc791\uc131",id:"1-api-\uba85\uc138\uc11c-\uc791\uc131",level:2},{value:"1.1 Path Parameter \uc774\uc6a9",id:"11-path-parameter-\uc774\uc6a9",level:3},{value:"1.2 Query Parameter \uc774\uc6a9",id:"12-query-parameter-\uc774\uc6a9",level:3},{value:"2. API \uad6c\ud604",id:"2-api-\uad6c\ud604",level:2},{value:"2.1 Path Parameter \uc774\uc6a9",id:"21-path-parameter-\uc774\uc6a9",level:3},{value:"2.1.1 \uad6c\ud604",id:"211-\uad6c\ud604",level:4},{value:"2.1.2 <code>crud_path.py</code>",id:"212-crud_pathpy",level:4},{value:"2.2 Query Parameter \uc774\uc6a9",id:"22-query-parameter-\uc774\uc6a9",level:3},{value:"2.2.1 \uad6c\ud604",id:"221-\uad6c\ud604",level:4},{value:"2.2.2 <code>crud_query.py</code>",id:"222-crud_querypy",level:4},{value:"3. API \ud14c\uc2a4\ud2b8",id:"3-api-\ud14c\uc2a4\ud2b8",level:2},{value:"4. Path Parameter vs Query Parameter",id:"4-path-parameter-vs-query-parameter",level:2}],k={toc:u};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-fastapi-crud"},"2) FastAPI CRUD"),(0,r.kt)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"FastAPI \ub97c \uc774\uc6a9\ud574 CRUD \ub97c \uc218\ud589\ud558\ub294 API \ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ol"},"Path Parameter \uc640 Query Parameter \uc758 \ucc28\uc774\uc810\uc5d0 \ub300\ud574 \ud559\uc2b5\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uc2a4\ud399-\uba85\uc138\uc11c"},"\uc2a4\ud399 \uba85\uc138\uc11c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub2e4\uc74c\uc758 CRUD \uae30\ub2a5\uc744 \uc218\ud589\ud558\ub294 API \uc758 \uba85\uc138\uc11c\ub97c ",(0,r.kt)("strong",{parentName:"p"},"(a) Path Parameter")," \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uacfc ",(0,r.kt)("strong",{parentName:"p"},"(b) Query Parameter")," \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uc73c\ub85c \uac01\uac01 \uc791\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"C (Create)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub984\uacfc \ubcc4\uba85\uc744 \uc785\ub825\ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"R (Read)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \ubcc4\uba85\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc785\ub825\ub41c \uc774\ub984\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"400 status code")," \uc640 \ud568\uaed8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Name not found")," \uba54\uc138\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \ub54c ",(0,r.kt)("inlineCode",{parentName:"li"},"fastapi.HTTPException")," \uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. [",(0,r.kt)("a",{parentName:"li",href:"https://fastapi.tiangolo.com/tutorial/handling-errors/"},"FastAPI Handling Errors"),"]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"U (Update)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub984\uacfc \uc0c8\ub85c\uc6b4 \ubcc4\uba85\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \ubcc4\uba85\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc785\ub825\ub41c \uc774\ub984\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"400 status code")," \uc640 \ud568\uaed8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Name not found")," \uba54\uc138\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D (Delete)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc785\ub825\ub41c \uc774\ub984\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,r.kt)("inlineCode",{parentName:"li"},"400 status code")," \uc640 \ud568\uaed8 ",(0,r.kt)("inlineCode",{parentName:"li"},"Name not found")," \uba54\uc138\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc791\uc131\ud55c \uba85\uc138\uc11c\ub97c FastAPI \ub97c \uc774\uc6a9\ud574 ",(0,r.kt)("strong",{parentName:"p"},"(a) Path Parameter")," \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uacfc ",(0,r.kt)("strong",{parentName:"p"},"(b) Query Parameter")," \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uc73c\ub85c \uac01\uac01 \uad6c\ud604\ud569\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"FastAPI \uc758 Swagger UI (",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/docs"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8000/docs")),") \ub97c \ud1b5\ud574 \ub2e4\uc74c\uc758 \uc2dc\ub098\ub9ac\uc624\uac00 \uc798 \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Create"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"POST \ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello", "nickname": "world"}')," \ub85c create \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Read"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"nickname": "world"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello2"}')," \ub85c read \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PUT \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello", "nickname": "world"}')," \ub85c update \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},'{"nickname": "world"}')," \ub97c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"PUT \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"{\u201dname\u201d: \u201chello\u201d, \u201cnickname\u201d: \u201cworld2\u201d}")," \ub85c update \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},'{"nickname": "world2"}')," \ub97c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"PUT \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello2", "nickname": "world2"}')," \ub85c update \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delete"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DELETE \ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c delete \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"DELETE \ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello2"}')," \ub85c delete \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Path parameter")," \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uacfc ",(0,r.kt)("strong",{parentName:"p"},"Query parameter")," \ub97c \uc774\uc6a9\ud55c \ubc29\ubc95\uc5d0 \uc5b4\ub5a0\ud55c \ucc28\uc774\uac00 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-api-\uba85\uc138\uc11c-\uc791\uc131"},"1. API \uba85\uc138\uc11c \uc791\uc131"),(0,r.kt)("p",null,"\uc8fc\uc5b4\uc9c4 CRUD \ub97c \uc218\ud589\ud558\ub294 API \uc758 \uba85\uc138\uc11c\ub97c \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"11-path-parameter-\uc774\uc6a9"},"1.1 Path Parameter \uc774\uc6a9"),(0,r.kt)("p",null,"Path Parameter \uc758 \uacbd\uc6b0 \uac01 API \uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud30c\ub77c\ubbf8\ud130\ub97c Request Header \uc5d0 \ub123\uc5b4 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uace0\ub824\ud558\uc5ec \uba85\uc138\uc11c\ub97c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \ubcc4\uba85\uc744 \uc785\ub825\ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST /users/name/{name}/nickname/{nickname}"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cstatus\u201d: \u201csuccess\u201d","\u2003",(0,r.kt)("br",null),"}"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Read"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \ubcc4\uba85\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /users/name/{name}"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cnickname\u201d: \u201cworld\u201d","\u2003",(0,r.kt)("br",null),"}"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \uc0c8\ub85c\uc6b4 \ubcc4\uba85\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \ubcc4\uba85\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT /users/name/{name}/nickname/{nickname}"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cstatus\u201d: \u201csuccess\u201d","\u2003",(0,r.kt)("br",null),"}"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE /users/name/{name}"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cstatus\u201d: \u201csuccess\u201d","\u2003",(0,r.kt)("br",null),"}")))))),(0,r.kt)("h3",{id:"12-query-parameter-\uc774\uc6a9"},"1.2 Query Parameter \uc774\uc6a9"),(0,r.kt)("p",null,"Query Parameter \uc758 \uacbd\uc6b0 \uac01 API \uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ud30c\ub77c\ubbf8\ud130\ub97c Request Body \uc5d0 \ub123\uc5b4 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub97c \uace0\ub824\ud558\uc5ec \uba85\uc138\uc11c\ub97c \uc791\uc131\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \ubcc4\uba85\uc744 \uc785\ub825\ud558\uc5ec \uc0ac\uc6a9\uc790\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"POST /users"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201dname\u201d: \u201chello\u201d,",(0,r.kt)("br",null),"\u2003","\u201cnickname\u201d: \u201cworld\u201d","\u2003",(0,r.kt)("br",null),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cstatus\u201d: \u201csuccess\u201d","\u2003",(0,r.kt)("br",null),"}"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Read"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \ubcc4\uba85\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET /users"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201dname\u201d: \u201chello\u201d","\u2003",(0,r.kt)("br",null),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cnickname\u201d: \u201cworld\u201d","\u2003",(0,r.kt)("br",null),"}"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \uc0c8\ub85c\uc6b4 \ubcc4\uba85\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \ubcc4\uba85\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PUT /users"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201dname\u201d: \u201chello\u201d,",(0,r.kt)("br",null),"\u2003","\u201cnickname\u201d: \u201cworld2\u201d","\u2003",(0,r.kt)("br",null),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cstatus\u201d: \u201csuccess\u201d","\u2003",(0,r.kt)("br",null),"}"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825\ud558\uc5ec \ud574\ub2f9 \uc774\ub984\uc744 \uac00\uc9c4 \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Request Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Request Body"),(0,r.kt)("th",{parentName:"tr",align:null},"Response Body"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DELETE /users"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201dname\u201d: \u201chello\u201d","\u2003",(0,r.kt)("br",null),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"{",(0,r.kt)("br",null),"\u2003","\u201cstatus\u201d: \u201csuccess\u201d","\u2003",(0,r.kt)("br",null),"}")))))),(0,r.kt)("h2",{id:"2-api-\uad6c\ud604"},"2. API \uad6c\ud604"),(0,r.kt)("p",null,"\uc791\uc131\ud55c \uba85\uc138\uc11c\ub97c FastAPI \ub97c \uc774\uc6a9\ud574 \uad6c\ud604\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 FastAPI \ud074\ub798\uc2a4\uc758 instance \ub97c \uc0dd\uc131\ud55c \ud6c4 \uc785\ub825\ubc1b\uc740 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.\n\ub610\ud55c, \uba54\ubaa8\ub9ac\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc774\ub984\uc5d0 \ub300\ud55c \uc694\uccad\uc774 \ub4e4\uc5b4\uc628 \uacbd\uc6b0\uc5d0 \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPException")," \uc744 \uc774\uc6a9\ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"p"},"NAME_NOT_FOUND")," \ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI, HTTPException\n\n# Create a FastAPI instance\napp = FastAPI()\n\n# User database\nUSER_DB = {}\n\n# Fail response\nNAME_NOT_FOUND = HTTPException(status_code=400, detail="Name not found.")\n')),(0,r.kt)("h3",{id:"21-path-parameter-\uc774\uc6a9"},"2.1 Path Parameter \uc774\uc6a9"),(0,r.kt)("h4",{id:"211-\uad6c\ud604"},"2.1.1 \uad6c\ud604"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \ubcc4\uba85\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc5d0 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uace0 \uc0c1\ud0dc \uc815\ubcf4\ub97c return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.post("/users/name/{name}/nickname/{nickname}")\ndef create_user(name: str, nickname: str):\n    USER_DB[name] = nickname\n    return {"status": "success"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Read"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc5d0\uc11c \ubcc4\uba85\uc744 \ucc3e\uc544 return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.get("/users/name/{name}")\ndef read_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    return {"nickname": USER_DB[name]}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \uc0c8\ub85c\uc6b4 \ubcc4\uba85\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc758 \uc815\ubcf4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc0c1\ud0dc \uc815\ubcf4\ub97c return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.put("/users/name/{name}/nickname/{nickname}")\ndef update_user(name: str, nickname: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    USER_DB[name] = nickname\n    return {"status": "success"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc5d0\uc11c \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uace0 \uc0c1\ud0dc \uc815\ubcf4\ub97c return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.delete("/users/name/{name}")\ndef delete_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    del USER_DB[name]\n    return {"status": "success"}\n')))),(0,r.kt)("h4",{id:"212-crud_pathpy"},"2.1.2 ",(0,r.kt)("inlineCode",{parentName:"h4"},"crud_path.py")),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \ubaa8\uc73c\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="crud_path.py"',title:'"crud_path.py"'},'# crud_path.py\nfrom fastapi import FastAPI, HTTPException\n\n# Create a FastAPI instance\napp = FastAPI()\n\n# User database\nUSER_DB = {}\n\n# Fail response\nNAME_NOT_FOUND = HTTPException(status_code=400, detail="Name not found.")\n\n\n@app.post("/users/name/{name}/nickname/{nickname}")\ndef create_user(name: str, nickname: str):\n    USER_DB[name] = nickname\n    return {"status": "success"}\n\n\n@app.get("/users/name/{name}")\ndef read_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    return {"nickname": USER_DB[name]}\n\n\n@app.put("/users/name/{name}/nickname/{nickname}")\ndef update_user(name: str, nickname: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    USER_DB[name] = nickname\n    return {"status": "success"}\n\n\n@app.delete("/users/name/{name}")\ndef delete_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    del USER_DB[name]\n    return {"status": "success"}\n')),(0,r.kt)("h3",{id:"22-query-parameter-\uc774\uc6a9"},"2.2 Query Parameter \uc774\uc6a9"),(0,r.kt)("h4",{id:"221-\uad6c\ud604"},"2.2.1 \uad6c\ud604"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \ubcc4\uba85\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc5d0 \uc815\ubcf4\ub97c \uc800\uc7a5\ud558\uace0 \uc0c1\ud0dc \uc815\ubcf4\ub97c return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.post("/users")\ndef create_user(name: str, nickname: str):\n    USER_DB[name] = nickname\n    return {"status": "success"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Read"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc5d0\uc11c \ubcc4\uba85\uc744 \ucc3e\uc544 return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.get("/users")\ndef read_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    return {"nickname": USER_DB[name]}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uacfc \uc0c8\ub85c\uc6b4 \ubcc4\uba85\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc758 \uc815\ubcf4\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc0c1\ud0dc \uc815\ubcf4\ub97c return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.put("/users")\ndef update_user(name: str, nickname: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    USER_DB[name] = nickname\n    return {"status": "success"}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete"),(0,r.kt)("p",{parentName:"li"},"\uc774\ub984\uc744 \uc785\ub825 \ubc1b\uc544 ",(0,r.kt)("inlineCode",{parentName:"p"},"USER_DB")," \uc5d0\uc11c \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uace0 \uc0c1\ud0dc \uc815\ubcf4\ub97c return \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.delete("/users")\ndef delete_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    del USER_DB[name]\n    return {"status": "success"}\n')))),(0,r.kt)("h4",{id:"222-crud_querypy"},"2.2.2 ",(0,r.kt)("inlineCode",{parentName:"h4"},"crud_query.py")),(0,r.kt)("p",null,"\uc704\uc5d0\uc11c \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \ubaa8\uc73c\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="crud_query.py"',title:'"crud_query.py"'},'# crud_query.py\nfrom fastapi import FastAPI, HTTPException\n\n# Create a FastAPI instance\napp = FastAPI()\n\n# User database\nUSER_DB = {}\n\n# Fail response\nNAME_NOT_FOUND = HTTPException(status_code=400, detail="Name not found.")\n\n\n@app.post("/users")\ndef create_user(name: str, nickname: str):\n    USER_DB[name] = nickname\n    return {"status": "success"}\n\n\n@app.get("/users")\ndef read_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    return {"nickname": USER_DB[name]}\n\n\n@app.put("/users")\ndef update_user(name: str, nickname: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    USER_DB[name] = nickname\n    return {"status": "success"}\n\n\n@app.delete("/users")\ndef delete_user(name: str):\n    if name not in USER_DB:\n        raise NAME_NOT_FOUND\n    del USER_DB[name]\n    return {"status": "success"}\n')),(0,r.kt)("h2",{id:"3-api-\ud14c\uc2a4\ud2b8"},"3. API \ud14c\uc2a4\ud2b8"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000/docs"),"\ub97c \ud1b5\ud574 FastAPI \uc758 Swagger UI \uc5d0 \uc811\uc18d\ud558\uc5ec \ub2e4\uc74c\uc758 \uc2dc\ub098\ub9ac\uc624\uac00 \uc798 \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"POST \ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello", "nickname": "world"}')," \ub85c create \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Read"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"nickname": "world"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello2"}')," \ub85c read \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Update"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PUT \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello", "nickname": "world"}')," \ub85c update \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},'{"nickname": "world"}')," \ub97c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"PUT \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"{\u201dname\u201d: \u201chello\u201d, \u201cnickname\u201d: \u201cworld2\u201d}")," \ub85c update \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud558\uc5ec \uc815\uc0c1\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"li"},'{"nickname": "world2"}')," \ub97c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"PUT \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello2", "nickname": "world2"}')," \ub85c update \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Delete"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DELETE \ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c delete \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"status": "success"}')," \ub97c \uc815\uc0c1\uc801\uc73c\ub85c return \ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"GET \uc744 \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello"}')," \ub85c read \ud558\uc5ec ",(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"DELETE \ub97c \ud1b5\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},'{"name": "hello2"}')," \ub85c delete \ud569\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'{"detail": "Name not found."}')," \ub97c return \ud558\uba70 400 error \uac00 \ubc1c\uc0dd\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.")))))),(0,r.kt)("h2",{id:"4-path-parameter-vs-query-parameter"},"4. Path Parameter vs Query Parameter"),(0,r.kt)("p",null,"Path Parameter \ub97c \uc774\uc6a9\ud55c API \uc5d0\uc11c\ub294 path \uc5d0 \ubcc0\uc218\uc758 \uac12\uc744 \uc800\uc7a5\ud558\uc5ec \ud568\uc218\uc5d0 \uc804\ub2ec\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ubc18\uba74, Query Parameter \ub97c \uc774\uc6a9\ud55c API \uc5d0\uc11c\ub294 path \uc5d0 \ubcc0\uc218\uc758 \uac12\uc744 \uc800\uc7a5\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 request body \ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);