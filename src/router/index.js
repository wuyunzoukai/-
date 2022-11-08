import VueRouter from 'vue-router'
import Homepage from '../views/Homepage'
import Subject from '../views/Subject'
import Personal from '../views/Personal'
import Test from '../views/Test'
import Info from '../views/Info'
import Topics from '../views/Topics'
import Browse from '../views/Browse'
import Collection from '../views/Collection'
import MySubject from '../views/MySubject'
import MyAnswer from '../views/MyAnswer'
import MySupport from '../views/MySupport'
import Upload from '../views/Upload'
import Papers from '../views/Papers'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path:'/homepage',
      component:Homepage
    },
    {
      path:'/subject',
      component:Subject
    },
    {
      path:'/personal',
      component:Personal,
      redirect:'/personal/info',
      children:[
        {
          path:'info',
          component:Info
        },
        {
          path:'browse',
          component:Browse
        },
        {
          path:'collection',
          component:Collection
        },
        {
          path:'mysubject',
          component:MySubject
        },
        {
          path:'myanswer',
          component:MyAnswer
        },
        {
          path:'mysupport',
          component:MySupport
        }
      ]
    },
    {
      path:'/test',
      component:Test,
    },
    {
      path:'/topics/:id',
      name:'topics',
      component:Topics
    },
    {
      path:'/upload',
      component:Upload
    },
    {
      path:'/papers/:id',
      name:'papers',
      component:Papers
    }
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 };
  // },
})