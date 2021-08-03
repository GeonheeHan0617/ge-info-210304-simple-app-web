<template>
  <v-app>
    <!-- 데스크톱 크기에서 탐색 서랍이 하단에 툴바 표시되도록 함. app속성은 반드시 설정해야
			하며 v-app엘리먼트 안의 내용이 적절히 표시되도로 도움. -->
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        
        <hr/>
        <!-- <small>main</small>
        <hr/> -->
        <!-- items 배열을 읽어와서 차례로 메뉴로 바인딩 하여 표시함 -->
        <v-list-item value="true" v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br>
        <hr>
        <hr>
        <hr/>
      <!--   <h2> ## 이론</h2>
        <hr/> -->
        
        <hr/>

        <!-- key="'A'+i" A,B,C 표시하기 -->
        <v-list-item value="true" v-for="(item, i) in items2" :key="'A'+i" :to="item.to">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <br>
        <hr>
        <hr/>
        <hr/>
        <hr/>
        <!-- <h2>## 연락처</h2> -->
        <!-- <hr/> -->
        
        <hr/>
        <v-list-item value="true" v-for="(item, i) in items3" :key="'B'+i" :to="item.to">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <hr>
        <hr/>
        <hr/>
        <hr/>
           <!-- <hr/> -->
        
        <hr/>
     
        <hr>
        <hr/>
     



      </v-list>
    </v-navigation-drawer>
    <!-- 탑색서랍이 툴바 아래에 위치할 때 메뉴 아이콘이 적절히 좌측에
			배치되도록 app과 clipped-left 어트리뷰트 지정 -->
    <v-app-bar app clipped-left fixed color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> 이천순복음우리교회 사이트 입니다.  </v-toolbar-title>
     
    </v-app-bar>
      

     
    
    <v-content>
      <div class="mt-5"></div>
      <router-view />
    </v-content>

    
      <v-footer color="secondary" fixed dark>
    
      <div class="mx-auto" >  <a style="text-decoration:none; color:#fff" href="https://creativecommons.org/licenses/">
      <img  style="  width: 16px; height: 16px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/1200px-Cc.logo.circle.svg.png"> 
      Copyright 2021.</a> -- by  KoreaName Han ,Sidesman  <br>
       ||   <br>||   <br>|| Release date: August 3, 21 Year
        <br><small>  &nbsp; &nbsp;|| 📧 Email: 
          &nbsp; &nbsp; || 📞 Tel:  ||</small> 
        
      </div>
        


        <v-list>
         <v-list-item value="true" v-for="(item, i) in itemsicon" :key="i" :href="item.link">
          <v-list-item-action>
            <!-- html 엘리먼트의 값으로 바인딩할 때는 v-html 디렉티브 사용
							-->
            <v-icon v-html="item.icon">
              
            </v-icon>
          </v-list-item-action>
        <!--   <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content> -->
        </v-list-item>
        </v-list>
    </v-footer>
  </v-app>
</template>

<script>
 export default {
   data() {
      // 탐색서랍과 툴바 메뉴명 항목 배열 반환
      return {
        drawer: false,
        items: [{
          icon: 'home',
            title: '| 처음화면 |',
            to: '/'
          },
          {
          icon: 'info',
            title: '| 예배안내 |',
            to: '/worship-table'
          },
          {
            icon: 'note',
            title: '| 주보 |',
            to: '/weekly'
          }
        ],
          /* 정보처리기사 1~5 이론 */
          
         items2: [{
            icon: 'map1',
            title: '| 위치 |',
            to: '/map1'
          },
    
          ],

          items3:[
          {
            icon: 'call',
            title: '| network |',
            to: '/contact'
          }
        ],
        
       
          itemsicon: [/* {
            icon: 'note',
            title: 'q-net',
            link: 'http://q-net.or.kr/'
          }, */
          {
            icon: 'facebook',
            title: '페이스북',
            link: 'https://www.facebook.com/'
          },
     
          {
            icon: 'mdi-instagram',
            title: '인스타그램',
            link: 'https://www.instagram.com/geographer90/'
          },
            {
            icon: 'mdi-github',
            title: '깃허브',
            link: 'https://github.com/GeonheeHan0617'
          },
              {
            icon: 'mdi-email',
            title: '구글메일',
            link: 'https://mail.google.com/mail'
          }
          ]
      }
            
    },
    name: 'App'
  }
</script>
<style lang="scss" scoped>
.v-application--is-ltr 
.v-list-item__action:first-child, 
.v-application--is-ltr 
.v-list-item__icon:first-child {  margin-right: 0px; }

.theme--dark{
 display: flex;
}

.v-application .primary {
    background-color: green !important;
    border-color: green !important;
}
.v-list-item__content >div > .v-list-item__subtitle {
    align-items: center;
    display: block;
        height: 10px;
    
    }
</style>