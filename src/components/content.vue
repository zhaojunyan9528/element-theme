<!--
 * @Description: 主页
 * @version:: 
 * @Author: zhao
 * @Date: 2020-12-22 11:37:28
 * @LastEditors: zhao
 * @LastEditTime: 2020-12-24 11:43:18
-->
<template>
    <div>
        <header class="index-head">
            <div>改变主题色</div>
            <div>
                <el-button @click="changeTheme('#2196f3')">蓝色</el-button>
                <el-button @click="changeTheme('#ffeb3b')">黄色</el-button>
                <el-button @click="changeTheme('#009688')">绿色</el-button>
                <transition name="el-zoom-in-center">
                    <el-popover
                        style="margin-left:20px;"
                        placement="bottom"
                        title="设置主题色"
                        width="200"
                        trigger="click"
                        >
                        <div>
                            <div class="index-row"><div class="index-title">primaryColor：</div><el-color-picker v-model="theme.primary"></el-color-picker></div>
                            <div class="index-row"><div class="index-title">successColor：</div><el-color-picker v-model="theme.success"></el-color-picker></div>
                            <div class="index-row"><div class="index-title">warningColor：</div><el-color-picker v-model="theme.warning"></el-color-picker></div>
                            <div class="index-row"><div class="index-title">infoColor：</div><el-color-picker v-model="theme.info"></el-color-picker></div>
                            <div class="index-row"><div class="index-title">dangerColor：</div><el-color-picker v-model="theme.danger"></el-color-picker></div>
                            <div>
                                <el-button @click="changeTheme()" size="small">确定</el-button>
                            </div>
                        </div>
                        <el-button slot="reference" >设置主题</el-button>
                    </el-popover>
                </transition>

            </div>
        </header>
        <div class="index-content">
            <aside>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </aside>
            <main class="index-main">
                <el-row :gutter="20" style="margin-bottom:20px;">
                    <el-col :span="8" class="flex-row">
                        <label for="name">姓名：</label><el-input name="name" placeholder="请输入" size="small"></el-input>
                    </el-col>
                    <el-col :span="8" class="flex-row">
                        <label for="num">编号：</label><el-input name='num' placeholder="请输入" size="small"></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button type="primary" size="small">搜索</el-button>
                    </el-col>
                </el-row>
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column fixed prop="date" label="日期" width="150">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="province" label="省份" width="120">
                    </el-table-column>
                    <el-table-column prop="city" label="市区" width="120">
                    </el-table-column>
                    <!-- <el-table-column prop="address" label="地址" width="300">
                    </el-table-column> -->
                    <el-table-column prop="zip" label="邮编" width="120">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" >
                        <template slot-scope="">
                            <el-button
                                type="primary"
                                size="mini"
                                >primary</el-button
                            >
                            <el-button type="danger" size="mini"
                                >danger</el-button
                            >
                            <el-button
                                type="warning"
                                size="mini"
                                >warning</el-button
                            >
                            <el-button type="success" size="mini"
                                >success</el-button
                            >
                            <el-button type="info" size="mini"
                                >info</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
                <div>
                    自定义css样式
                    <span style="color:var(--primary-color);margin-right:20px;">primary</span>
                    <span style="color:var(--danger-color);margin-right:20px;">danger</span>
                    <span style="color:var(--warning-color);margin-right:20px;">warning</span>
                    <span style="color:var(--success-color);margin-right:20px;">success</span>
                    <span style="color:var(--info-color);margin-right:20px;">info</span>
                </div>
                <div>count: {{count}}</div>
                <el-button type="primary" @click="increment">increment</el-button>
            </main>
        </div>

    </div>
</template>

<script>
import transferTheme from '../index';
export default {
    name: "IndexContent",
    data() {
        return {
            show:false,
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1518 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1517 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1519 弄",
                    zip: 200333
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    province: "上海",
                    city: "普陀区",
                    address: "上海市普陀区金沙江路 1516 弄",
                    zip: 200333
                }
            ],
            theme:{
                primary: '#2196f3',
                success: '#63cb30',
                warning: '#e6a23c',
                info:'#dcdfe6',
                danger:'#f33'
            }
        };
    },
    created(){
        this.changeTheme();
    },
    computed:{
        count(){
            return this.$store.state.count
        }
    },
    methods: {
        increment(){
            this.$store.commit('increment')
        },
        changeTheme(color){
            if(color){
                transferTheme({primary: color});
            }else{
                transferTheme(this.theme);
            }
            this.show = false;
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style>
.index-head{
    height:80px;
    background-color: var(--primary-color);
    display: flex;
    color: white;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.index-content {
    display: flex;
    flex:1;
    flex-basis: auto;
}
aside{
    width: 300px;
    flex-shrink: 0;
    height: 100%
}
.index-main{
    width: calc(100vw - 300px);
    padding:20px;
    box-sizing: border-box;
}
.flex-row{
    display: flex;
    align-items: center;
}
.flex-row label{
    flex:100px;
}
.index-row{
    display: flex;
    align-items: center;
}
.index-title{
    width: 120px;
}
</style>
