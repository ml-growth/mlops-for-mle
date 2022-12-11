"use strict";(self.webpackChunktemp=self.webpackChunktemp||[]).push([[175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=l,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(k,p(p({ref:t},s),{},{components:a})):n.createElement(k,p({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var c=2;c<r;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:2,description:"\ud83d\udccc \uc0dd\uc131\ub41c DB \uc5d0 query \ub97c \uc791\uc131\ud558\uc5ec \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."},p="2) Table Creation",i={unversionedId:"database/table-creation",id:"database/table-creation",title:"2) Table Creation",description:"\ud83d\udccc \uc0dd\uc131\ub41c DB \uc5d0 query \ub97c \uc791\uc131\ud558\uc5ec \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.",source:"@site/docs/database/table-creation.mdx",sourceDirName:"database",slug:"/database/table-creation",permalink:"/tutorial/docs/database/table-creation",draft:!1,editUrl:"https://github.com/mlops-for-mle/tutorial/tree/main/docs/database/table-creation.mdx",tags:[],version:"current",lastUpdatedBy:"Aiden-Jeon",lastUpdatedAt:1670752056,formattedLastUpdatedAt:"Dec 11, 2022",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"\ud83d\udccc \uc0dd\uc131\ub41c DB \uc5d0 query \ub97c \uc791\uc131\ud558\uc5ec \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."},sidebar:"tutorialSidebar",previous:{title:"1) DB Server Creation",permalink:"/tutorial/docs/database/db-server-creation"},next:{title:"3) Data Insertion",permalink:"/tutorial/docs/database/data-insertion"}},o={},c=[{value:"\ubaa9\ud45c",id:"\ubaa9\ud45c",level:2},{value:"\uc2a4\ud399 \uba85\uc138\uc11c",id:"\uc2a4\ud399-\uba85\uc138\uc11c",level:2},{value:"0. \ud328\ud0a4\uc9c0 \uc124\uce58",id:"0-\ud328\ud0a4\uc9c0-\uc124\uce58",level:2},{value:"1. \ud14c\uc774\ube14 \uc0dd\uc131",id:"1-\ud14c\uc774\ube14-\uc0dd\uc131",level:2},{value:"1.1 DB connection",id:"11-db-connection",level:3},{value:"1.2 Table creation query",id:"12-table-creation-query",level:3},{value:"1.2.1 SQL Table Creation Query Rule",id:"121-sql-table-creation-query-rule",level:4},{value:"1.2.2 Table Creation Query",id:"122-table-creation-query",level:4},{value:"1.2.3 Send Query to DB",id:"123-send-query-to-db",level:4},{value:"1.2.4 <code>create_table</code>",id:"124-create_table",level:4},{value:"2.3 Query \uc2e4\ud589",id:"23-query-\uc2e4\ud589",level:3},{value:"2.3.1 <code>create_table.py</code>",id:"231-create_tablepy",level:4},{value:"1.3.2 \uc2e4\ud589",id:"132-\uc2e4\ud589",level:4},{value:"2. Table \ud655\uc778",id:"2-table-\ud655\uc778",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"2-table-creation"},"2) Table Creation"),(0,l.kt)("h2",{id:"\ubaa9\ud45c"},"\ubaa9\ud45c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc0dd\uc131\ub41c DB \uc5d0 query \ub97c \uc791\uc131\ud558\uc5ec \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"\uc0dd\uc131\ub41c \ud14c\uc774\ube14 \uc744 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\uc2a4\ud399-\uba85\uc138\uc11c"},"\uc2a4\ud399 \uba85\uc138\uc11c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"pandas")," , ",(0,l.kt)("inlineCode",{parentName:"li"},"psycopg2-binary"),"\xa0, ",(0,l.kt)("inlineCode",{parentName:"li"},"scikit-learn")," \ud328\ud0a4\uc9c0\ub97c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ol"},"Python \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec DB \uc5d0 \uc811\uadfc\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"user : ",(0,l.kt)("inlineCode",{parentName:"li"},"myuser")),(0,l.kt)("li",{parentName:"ul"},"password : ",(0,l.kt)("inlineCode",{parentName:"li"},"mypassword")),(0,l.kt)("li",{parentName:"ul"},"host : ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost")),(0,l.kt)("li",{parentName:"ul"},"port : ",(0,l.kt)("inlineCode",{parentName:"li"},"5432")),(0,l.kt)("li",{parentName:"ul"},"database : ",(0,l.kt)("inlineCode",{parentName:"li"},"mydatabase")))),(0,l.kt)("li",{parentName:"ol"},"Python \uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"psycopg2")," \ub97c \uc0ac\uc6a9\ud558\uc5ec  ",(0,l.kt)("inlineCode",{parentName:"li"},"iris_data")," \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud14c\uc774\ube14\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 column \ub4e4\uc744 \uac16\uace0 \uc788\uc5b4\uc57c \ud569\ub2c8\ub2e4.",(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"column"),(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"sepal length (cm)"),(0,l.kt)("th",{parentName:"tr",align:null},"sepal width (cm)"),(0,l.kt)("th",{parentName:"tr",align:null},"petal length (cm)"),(0,l.kt)("th",{parentName:"tr",align:null},"petal width (cm)"),(0,l.kt)("th",{parentName:"tr",align:null},"target"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"primary key"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"int"))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"psql"),"\xa0\uc744 \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131\ud55c \ud14c\uc774\ube14\uc744 \ud655\uc778\ud569\ub2c8\ub2e4.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"0-\ud328\ud0a4\uc9c0-\uc124\uce58"},"0. \ud328\ud0a4\uc9c0 \uc124\uce58"),(0,l.kt)("p",null,"\ud544\uc694\ud55c \ud328\ud0a4\uc9c0\ub4e4\uc744 \uc124\uce58\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# terminal-command\npip install pandas psycopg2-binary scikit-learn\n")),(0,l.kt)("h2",{id:"1-\ud14c\uc774\ube14-\uc0dd\uc131"},"1. \ud14c\uc774\ube14 \uc0dd\uc131"),(0,l.kt)("p",null,"Python \uc5d0\uc11c postgres \uc11c\ubc84\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud55c \uac00\uc7a5 \uac04\ub2e8\ud55c \ubc29\ubc95\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"psycopg2")," \ud328\ud0a4\uc9c0\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"psycopg2")," \uc5d0 \uad00\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://www.psycopg.org/docs/"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,l.kt)("h3",{id:"11-db-connection"},"1.1 DB connection"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"psycopg2")," \ub97c \uc774\uc6a9\ud558\uc5ec DB \uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud574\uc11c\ub294\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"connect")," \ud568\uc218\ub97c \uc774\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4. ",(0,l.kt)("inlineCode",{parentName:"p"},"connect")," \ud568\uc218\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc791\uc131\ud558\uc5ec ",(0,l.kt)("inlineCode",{parentName:"p"},"db_connect")," connector \ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import psycopg2\n\ndb_connect = psycopg2.connect(\n    user="myuser", \n    password="mypassword",\n    host="localhost",\n    port=5432,\n    database="mydatabase",\n)\n')),(0,l.kt)("p",null,"\uc5ec\uae30\uc11c \uae30\uc5b5\ud574\uc57c\ud560 \uac83\uc740 \uc77c\ubc18\uc801\uc73c\ub85c DB \uc5f0\uacb0 \uc2dc ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"database")," \ucd1d 5\uac00\uc9c0\uc758 \uc815\ubcf4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.\n\uc774\uc804 \uc7a5\uc5d0\uc11c DB \ub97c \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud55c ",(0,l.kt)("inlineCode",{parentName:"p"},"myuser"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mypassword"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"5432"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"mydatabase")," \ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"12-table-creation-query"},"1.2 Table creation query"),(0,l.kt)("h4",{id:"121-sql-table-creation-query-rule"},"1.2.1 SQL Table Creation Query Rule"),(0,l.kt)("p",null,"\ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c SQL \ubb38\uc740 \uc544\ub798\uc640 \uac19\uc740 \uaddc\uce59\uc744 \uac16\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_name (\n    column1 datatype,\n    column2 datatype,\n    column3 datatype,\n   ....\n);\n")),(0,l.kt)("p",null,"\uc774\uc81c \uc704\uc5d0\uc11c \uc815\uc758\ud55c \uc2a4\ud399 \uba85\uc138\uc11c\uc5d0 \ub9de\ucdb0 \ud544\uc694\ud55c \ub0b4\uc6a9\uc744 \ucc44\uc6cc\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h4",{id:"122-table-creation-query"},"1.2.2 Table Creation Query"),(0,l.kt)("p",null,"\uc0bd\uc785\ud560 \ub370\uc774\ud130\ub294 ",(0,l.kt)("inlineCode",{parentName:"p"},"scikit-learn")," \ud328\ud0a4\uc9c0\uc758\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"load_iris")," \ub97c \uc774\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import pandas as pd\nfrom sklearn.datasets import load_iris\n\nX, y = load_iris(return_X_y=True, as_frame=True)\ndf = pd.concat([X, y], axis="columns")\n')),(0,l.kt)("p",null,"\ub370\uc774\ud130\ub97c \ucd9c\ub825\ud558\uba74 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(df)\n#      sepal length (cm)  sepal width (cm)  petal length (cm)  petal width (cm)  target\n# 0                  5.1               3.5                1.4               0.2       0\n# 1                  4.9               3.0                1.4               0.2       0\n# 2                  4.7               3.2                1.3               0.2       0\n# 3                  4.6               3.1                1.5               0.2       0\n# 4                  5.0               3.6                1.4               0.2       0\n# ..                 ...               ...                ...               ...     ...\n# 145                6.7               3.0                5.2               2.3       2\n# 146                6.3               2.5                5.0               1.9       2\n# 147                6.5               3.0                5.2               2.0       2\n# 148                6.2               3.4                5.4               2.3       2\n# 149                5.9               3.0                5.1               1.8       2\n#\n# [150 rows x 5 columns]\n")),(0,l.kt)("p",null,"Iris \ub370\uc774\ud130\uc758 column \ub4e4\uc758 type \uc744 \ud655\uc778\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"print(df.dtypes)\n# sepal length (cm)    float64\n# sepal width (cm)     float64\n# petal length (cm)    float64\n# petal width (cm)     float64\n# target                 int64\n# dtype: object\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"X")," \uc758 data type \uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"float64")," \ub85c \ud45c\uae30\ub418\uace0, target \uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"int64")," \ub85c \ud45c\uae30\ub429\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \uc774 data type \ub4e4\uc740 postgres \uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uae30\uc5d0 \uac01\uac01 ",(0,l.kt)("inlineCode",{parentName:"p"},"float8"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"int")," \ub85c \uc120\uc5b8\ud574 \uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\ub610\ud55c column \uc774\ub984\uc740\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"sepal length (cm)"),"\xa0\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"("),"\xa0\ub54c\ubb38\uc5d0 \uc774\uc6a9\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \ubd80\ubd84\uc744 \uc81c\uac70\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc704\uc758 \ub0b4\uc6a9\uc744 \ubc18\uc601\ud55c query \ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'create_table_query = """\nCREATE TABLE IF NOT EXISTS iris_data (\n    id SERIAL PRIMARY KEY,\n    sepal_width float8,\n    sepal_length float8,\n    petal_width float8,\n    petal_length float8,\n    target int\n);"""\n')),(0,l.kt)("h4",{id:"123-send-query-to-db"},"1.2.3 Send Query to DB"),(0,l.kt)("p",null,"\uc774\uc81c \uc791\uc131\ud55c query \ub97c DB \uc5d0 \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4. \uc804\ub2ec\uc744 \uc704\ud574\uc11c\ub294 \uc544\ub798\uc758 \uacfc\uc815\uc744 \uc218\ud589\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"connector \uc758 cursor \ub97c \uc5f4\uace0 cursor \uc5d0 query \ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"cur = db_connect.cursor()\ncur.execute(create_table_query)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc804\ub2ec \ub41c query \ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 connector \uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"commit")," \uc744 \ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"db_connect.commit()\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"cursor \uc758 \uc0ac\uc6a9\uc774 \ub05d\ub098\uba74 cursor \ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"close")," \ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"cur.close()\n")))),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc124\uba85\ud55c 3\uac1c\uc758 \uacfc\uc815\uc740 \uc544\ub798\ucc98\ub7fc \ud558\ub098\uc758 \ud504\ub85c\uc138\uc2a4\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"with db_connect.cursor() as cur:\n    cur.execute(create_table_query)\n    db_connect.commit()\n")),(0,l.kt)("p",null,"with \ubb38\uc744 \uc774\uc6a9\ud55c \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc740 ",(0,l.kt)("a",{parentName:"p",href:"https://www.psycopg.org/docs/connection.html#the-connection-class"},"\uacf5\uc2dd \ud648\ud398\uc774\uc9c0"),"\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 \uc5b8\uae09\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Connections can be used as context managers. Note that a context wraps a transaction: if the context exits with success the transaction is committed, if it exits with an exception the transaction is rolled back. Note that the connection is not closed by the context and it can be used for several contexts.")),(0,l.kt)("h4",{id:"124-create_table"},"1.2.4 ",(0,l.kt)("inlineCode",{parentName:"h4"},"create_table")),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \uc774\uc6a9\ud574 ",(0,l.kt)("inlineCode",{parentName:"p"},"create_table")," \ud568\uc218\ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def create_table(db_connect):\n    create_table_query = """\n    CREATE TABLE IF NOT EXISTS iris_data (\n        id SERIAL PRIMARY KEY,\n        sepal_length float8,\n        sepal_width float8,\n        petal_length float8,\n        petal_width float8,\n        target int\n    );"""\n    print(create_table_query)\n    with db_connect.cursor() as cur:\n        cur.execute(create_table_query)\n        db_connect.commit()\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"create_table"),"  \uc758 \uc785\ub825\uac12\uc740 ",(0,l.kt)("inlineCode",{parentName:"p"},"db_connect")," \uc785\ub2c8\ub2e4. DB\uc640\uc758 \uc5f0\uacb0\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \uc694\uad6c\ud560 \uacbd\uc6b0 \ubd80\ud558\uac00 \uac08 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ucd5c\ucd08\uc5d0 \ud55c\ubc88\ub9cc \uc5f0\uacb0 \ud6c4 \uc5f0\uacb0\ub41c connector \ub97c \uc7ac\uc0ac\uc6a9\ud558\uae30 \uc704\ud568\uc785\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ud568\uc218 \ub0b4\ubd80\uc5d0\uc11c\ub294 query \uac00 \uc788\uace0 \uc2e4\ud589\ub420 \ub54c \uc5b4\ub5a4 query \uac00 \uc2e4\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"print")," \ub97c \ud569\ub2c8\ub2e4.",(0,l.kt)("br",{parentName:"p"}),"\n","\ub9c8\uc9c0\ub9c9\uc73c\ub85c query \ub97c DB\uc5d0 \uc804\ub2ec\ud558\ub294 with \ubb38\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4.  "),(0,l.kt)("h3",{id:"23-query-\uc2e4\ud589"},"2.3 Query \uc2e4\ud589"),(0,l.kt)("h4",{id:"231-create_tablepy"},"2.3.1 ",(0,l.kt)("inlineCode",{parentName:"h4"},"create_table.py")),(0,l.kt)("p",null,"\uc704\uc5d0\uc11c \uc791\uc131\ud55c \ucf54\ub4dc\ub97c \ubaa8\uc544\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"create_table.py")," \ub85c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="create_table.py"',title:'"create_table.py"'},'# create_table.py\nimport psycopg2\n\ndef create_table(db_connect):\n    create_table_query = """\n    CREATE TABLE IF NOT EXISTS iris_data (\n        id SERIAL PRIMARY KEY,\n        sepal_length float8,\n        sepal_width float8,\n        petal_length float8,\n        petal_width float8,\n        target int\n    );"""\n    print(create_table_query)\n    with db_connect.cursor() as cur:\n        cur.execute(create_table_query)\n        db_connect.commit()\n\nif __name__ == "__main__":\n    db_connect = psycopg2.connect(\n        user="myuser",\n        password="mypassword",\n        host="localhost",\n        port=5432,\n        database="mydatabase",\n    )\n    create_table(db_connect)\n')),(0,l.kt)("h4",{id:"132-\uc2e4\ud589"},"1.3.2 \uc2e4\ud589"),(0,l.kt)("p",null,"Python \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# terminal-command\npython create_table.py\nCREATE TABLE IF NOT EXISTS iris_data (\n    id SERIAL PRIMARY KEY,\n    sepal_length float8,\n    sepal_width float8,\n    petal_length float8,\n    petal_width float8,\n    target int\n);\n")),(0,l.kt)("h2",{id:"2-table-\ud655\uc778"},"2. Table \ud655\uc778"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"psql")," \uc744 \uc774\uc6a9\ud558\uc5ec DB \uc5d0 \uc811\uadfc\ud558\uace0, \uc0dd\uc131\ub41c \ud14c\uc774\ube14\uc744 \ud655\uc778\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc6b0\uc120 psql\uc5d0 \uc811\uc18d\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# terminal-command\npsql -h localhost -p 5432 -U myuser -d mydatabase\nPassword for user myuser: \npsql (14.3, server 14.0 (Debian 14.0-1.pgdg110+1))\nType "help" for help.\n\nmydatabase=#\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"\\d")," \ub97c \uc785\ub825\ud574 \uc0dd\uc131\ub41c \ud14c\uc774\ube14\ub4e4\uc758 \ubaa9\ub85d\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# terminal-command\nmydatabase=# \\d\nList of relations\n Schema |       Name       |   Type   | Owner  \n--------+------------------+----------+--------\n public | iris_data        | table    | myuser\n public | iris_data_id_seq | sequence | myuser\n(2 rows)\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc704 \ubaa9\ub85d \uc911 ",(0,l.kt)("inlineCode",{parentName:"p"},"iris_data")," \ud14c\uc774\ube14\uc5d0 \uc788\ub294 \ub370\uc774\ud130 \uc804\uccb4\ub97c \ud655\uc778\ud558\uae30 \uc704\ud55c query \ubb38\uc744 \uc2e4\ud589\ud55c \uacb0\uacfc\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# terminal-command\nmydatabase=# select * from iris_data;\n id | sepal_length | sepal_width | petal_length | petal_width | target \n----+--------------+-------------+--------------+-------------+--------\n(0 rows)\n")),(0,l.kt)("p",{parentName:"li"},"column \ub4e4\uc774 \uc704\uc758 Python \uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c \uc791\uc131\ud55c \uc774\ub984\uacfc \uac19\uc740\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4.\n\ub610\ud55c \uc544\uc9c1 \uc785\ub825\ud55c \ub370\uc774\ud130\uac00 \uc5c6\uae30 \ub54c\ubb38\uc5d0 ",(0,l.kt)("inlineCode",{parentName:"p"},"(0 rows)")," \ub85c \ub098\uc624\ub294 \uac78 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))))}d.isMDXComponent=!0}}]);