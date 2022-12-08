
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import 주문Manager from "./components/listers/주문Cards"
import 주문Detail from "./components/listers/주문Detail"
import OrderManager from "./components/listers/OrderCards"
import OrderDetail from "./components/listers/OrderDetail"
import PaymentManager from "./components/listers/PaymentCards"
import PaymentDetail from "./components/listers/PaymentDetail"

import 메뉴판View from "./components/메뉴판View"
import 메뉴판ViewDetail from "./components/메뉴판ViewDetail"
import 통합주문상태View from "./components/통합주문상태View"
import 통합주문상태ViewDetail from "./components/통합주문상태ViewDetail"
import MenuListView from "./components/MenuListView"
import MenuListViewDetail from "./components/MenuListViewDetail"
import CouponListView from "./components/CouponListView"
import CouponListViewDetail from "./components/CouponListViewDetail"
import 주문관리Manager from "./components/listers/주문관리Cards"
import 주문관리Detail from "./components/listers/주문관리Detail"
import AcceptedOrderManager from "./components/listers/AcceptedOrderCards"
import AcceptedOrderDetail from "./components/listers/AcceptedOrderDetail"

import 주문상세보기View from "./components/주문상세보기View"
import 주문상세보기ViewDetail from "./components/주문상세보기ViewDetail"
import NotificationManager from "./components/listers/NotificationCards"
import NotificationDetail from "./components/listers/NotificationDetail"

import OrderStatusView from "./components/OrderStatusView"
import OrderStatusViewDetail from "./components/OrderStatusViewDetail"
import DeliveryManager from "./components/listers/DeliveryCards"
import DeliveryDetail from "./components/listers/DeliveryDetail"

import SendedCouponManager from "./components/listers/SendedCouponCards"
import SendedCouponDetail from "./components/listers/SendedCouponDetail"

import OrderListView from "./components/OrderListView"
import OrderListViewDetail from "./components/OrderListViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/주문',
                name: '주문Manager',
                component: 주문Manager
            },
            {
                path: '/주문/:id',
                name: '주문Detail',
                component: 주문Detail
            },
            {
                path: '/orders',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '/orders/:id',
                name: 'OrderDetail',
                component: OrderDetail
            },
            {
                path: '/payments',
                name: 'PaymentManager',
                component: PaymentManager
            },
            {
                path: '/payments/:id',
                name: 'PaymentDetail',
                component: PaymentDetail
            },

            {
                path: '/메뉴판',
                name: '메뉴판View',
                component: 메뉴판View
            },
            {
                path: '/메뉴판/:id',
                name: '메뉴판ViewDetail',
                component: 메뉴판ViewDetail
            },
            {
                path: '/통합주문상태',
                name: '통합주문상태View',
                component: 통합주문상태View
            },
            {
                path: '/통합주문상태/:id',
                name: '통합주문상태ViewDetail',
                component: 통합주문상태ViewDetail
            },
            {
                path: '/menuLists',
                name: 'MenuListView',
                component: MenuListView
            },
            {
                path: '/menuLists/:id',
                name: 'MenuListViewDetail',
                component: MenuListViewDetail
            },
            {
                path: '/couponLists',
                name: 'CouponListView',
                component: CouponListView
            },
            {
                path: '/couponLists/:id',
                name: 'CouponListViewDetail',
                component: CouponListViewDetail
            },
            {
                path: '/주문관리',
                name: '주문관리Manager',
                component: 주문관리Manager
            },
            {
                path: '/주문관리/:id',
                name: '주문관리Detail',
                component: 주문관리Detail
            },
            {
                path: '/acceptedOrders',
                name: 'AcceptedOrderManager',
                component: AcceptedOrderManager
            },
            {
                path: '/acceptedOrders/:id',
                name: 'AcceptedOrderDetail',
                component: AcceptedOrderDetail
            },

            {
                path: '/주문상세보기',
                name: '주문상세보기View',
                component: 주문상세보기View
            },
            {
                path: '/주문상세보기/:id',
                name: '주문상세보기ViewDetail',
                component: 주문상세보기ViewDetail
            },
            {
                path: '/notifications',
                name: 'NotificationManager',
                component: NotificationManager
            },
            {
                path: '/notifications/:id',
                name: 'NotificationDetail',
                component: NotificationDetail
            },

            {
                path: '/orderStatuses',
                name: 'OrderStatusView',
                component: OrderStatusView
            },
            {
                path: '/orderStatuses/:id',
                name: 'OrderStatusViewDetail',
                component: OrderStatusViewDetail
            },
            {
                path: '/deliveries',
                name: 'DeliveryManager',
                component: DeliveryManager
            },
            {
                path: '/deliveries/:id',
                name: 'DeliveryDetail',
                component: DeliveryDetail
            },

            {
                path: '/sendedCoupons',
                name: 'SendedCouponManager',
                component: SendedCouponManager
            },
            {
                path: '/sendedCoupons/:id',
                name: 'SendedCouponDetail',
                component: SendedCouponDetail
            },

            {
                path: '/orderLists',
                name: 'OrderListView',
                component: OrderListView
            },
            {
                path: '/orderLists/:id',
                name: 'OrderListViewDetail',
                component: OrderListViewDetail
            },


    ]
})
